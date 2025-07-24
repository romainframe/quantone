'use client';

import { useState, useEffect } from 'react';

import { useTranslations } from 'next-intl';

// Type definitions
type Pattern = number[]; // Binary array (0s and 1s)
type OnsetIndices = number[]; // Array of onset positions

interface RhythmScore {
  pattern: Pattern;
  onsetIndices: OnsetIndices;
  score: number;
}

// Utility function to generate all combinations
function generateCombinations(n: number, k: number): OnsetIndices[] {
  const result: OnsetIndices[] = [];
  
  function backtrack(start: number, current: number[]): void {
    if (current.length === k) {
      result.push([...current]);
      return;
    }
    
    for (let i = start; i < n; i++) {
      current.push(i);
      backtrack(i + 1, current);
      current.pop();
    }
  }
  
  backtrack(0, []);
  return result;
}

// Convert onset indices to binary pattern
function indicesToPattern(indices: OnsetIndices, n: number): Pattern {
  const pattern = new Array(n).fill(0);
  indices.forEach(i => pattern[i] = 1);
  return pattern;
}

// Get inter-onset intervals
function getIntervals(onsetIndices: OnsetIndices, n: number): number[] {
  if (onsetIndices.length <= 1) {return [];}
  
  const intervals: number[] = [];
  for (let i = 0; i < onsetIndices.length; i++) {
    const current = onsetIndices[i];
    const next = onsetIndices[(i + 1) % onsetIndices.length];
    const interval = next > current ? next - current : n - current + next;
    intervals.push(interval);
  }
  return intervals;
}

// Scoring functions
function scoreEvenness(onsetIndices: OnsetIndices, n: number): number {
  if (onsetIndices.length <= 1) {return 1;}
  
  const intervals = getIntervals(onsetIndices, n);
  const mean = intervals.reduce((a, b) => a + b, 0) / intervals.length;
  const variance = intervals.reduce((a, b) => a + Math.pow(b - mean, 2), 0) / intervals.length;
  const stdDev = Math.sqrt(variance);
  
  // Normalize: perfect evenness = 1, high variance = 0
  const maxPossibleStdDev = n / 2;
  return Math.max(0, 1 - (stdDev / maxPossibleStdDev));
}

function scoreEntropy(onsetIndices: OnsetIndices, n: number): number {
  if (onsetIndices.length <= 1) {return 0;}
  
  const intervals = getIntervals(onsetIndices, n);
  const intervalCounts = new Map<number, number>();
  
  intervals.forEach(interval => {
    intervalCounts.set(interval, (intervalCounts.get(interval) || 0) + 1);
  });
  
  let entropy = 0;
  const total = intervals.length;
  
  intervalCounts.forEach(count => {
    const p = count / total;
    if (p > 0) {
      entropy -= p * Math.log2(p);
    }
  });
  
  // Normalize by maximum possible entropy
  const maxEntropy = Math.log2(Math.min(intervals.length, n));
  return maxEntropy > 0 ? entropy / maxEntropy : 0;
}

function scoreBalance(onsetIndices: OnsetIndices, n: number): number {
  if (onsetIndices.length === 0) {return 1;}
  
  let sumX = 0;
  let sumY = 0;
  
  onsetIndices.forEach(index => {
    const angle = (2 * Math.PI * index) / n;
    sumX += Math.cos(angle);
    sumY += Math.sin(angle);
  });
  
  const magnitude = Math.sqrt(sumX * sumX + sumY * sumY);
  return 1 - (magnitude / onsetIndices.length);
}

function scoreMaxGap(onsetIndices: OnsetIndices, n: number): number {
  if (onsetIndices.length <= 1) {return 1;}
  
  const intervals = getIntervals(onsetIndices, n);
  const maxGap = Math.max(...intervals);
  
  return 1 - (maxGap / n);
}

function scoreSymmetry(pattern: Pattern): number {
  const n = pattern.length;
  
  // Check for mirror symmetry
  let isMirrorSymmetric = true;
  for (let i = 0; i < Math.floor(n / 2); i++) {
    if (pattern[i] !== pattern[n - 1 - i]) {
      isMirrorSymmetric = false;
      break;
    }
  }
  
  return isMirrorSymmetric ? 1 : 0;
}

// Main component
export default function RhythmGeneratorPage() {
  const t = useTranslations('RhythmGenerator');
  
  // State
  const [numPulses, setNumPulses] = useState(16);
  const [numOnsets, setNumOnsets] = useState(5);
  const [scoringAlgorithm, setScoringAlgorithm] = useState('evenness');
  const [viewMode, setViewMode] = useState<'circular' | 'linear'>('circular');
  const [bestPattern, setBestPattern] = useState<Pattern | null>(null);
  const [bestScore, setBestScore] = useState<number>(0);
  const [bestOnsetIndices, setBestOnsetIndices] = useState<OnsetIndices>([]);

  // Generate and score patterns when parameters change
  useEffect(() => {
    if (numOnsets === 0 || numOnsets > numPulses) {
      setBestPattern(null);
      return;
    }

    // Generate all combinations
    const combinations = generateCombinations(numPulses, numOnsets);
    
    let topScore = -1;
    let topPattern: Pattern | null = null;
    let topIndices: OnsetIndices = [];

    combinations.forEach(indices => {
      const pattern = indicesToPattern(indices, numPulses);
      let score = 0;

      switch (scoringAlgorithm) {
        case 'evenness':
          score = scoreEvenness(indices, numPulses);
          break;
        case 'entropy':
          score = scoreEntropy(indices, numPulses);
          break;
        case 'balance':
          score = scoreBalance(indices, numPulses);
          break;
        case 'maxGap':
          score = scoreMaxGap(indices, numPulses);
          break;
        case 'symmetry':
          score = scoreSymmetry(pattern);
          break;
      }

      if (score > topScore) {
        topScore = score;
        topPattern = pattern;
        topIndices = indices;
      }
    });

    setBestPattern(topPattern);
    setBestScore(topScore);
    setBestOnsetIndices(topIndices);
  }, [numPulses, numOnsets, scoringAlgorithm]);

  // Circular view component
  const CircularView = ({ pattern, onsetIndices }: { pattern: Pattern | null, onsetIndices: OnsetIndices }) => {
    if (!pattern) {return null;}

    const radius = 120;
    const centerX = 150;
    const centerY = 150;

    return (
      <svg width="300" height="300" className="mx-auto">
        {/* Outer circle */}
        <circle
          cx={centerX}
          cy={centerY}
          r={radius}
          fill="none"
          stroke="#e5e7eb"
          strokeWidth="2"
        />
        
        {/* Pulse markers */}
        {pattern.map((value, index) => {
          const angle = (2 * Math.PI * index) / numPulses - Math.PI / 2;
          const x = centerX + radius * Math.cos(angle);
          const y = centerY + radius * Math.sin(angle);
          
          return (
            <g key={index}>
              <circle
                cx={x}
                cy={y}
                r={value === 1 ? 8 : 4}
                fill={value === 1 ? '#6366f1' : '#e5e7eb'}
                stroke={value === 1 ? '#4338ca' : '#9ca3af'}
                strokeWidth="2"
              />
              {/* Optional: Add pulse numbers */}
              <text
                x={x}
                y={y - 15}
                textAnchor="middle"
                fontSize="10"
                fill="#6b7280"
              >
                {index}
              </text>
            </g>
          );
        })}
        
        {/* Connect onsets with lines (optional polygon) */}
        {onsetIndices.length > 2 && (
          <polygon
            points={onsetIndices.map(index => {
              const angle = (2 * Math.PI * index) / numPulses - Math.PI / 2;
              const x = centerX + radius * Math.cos(angle);
              const y = centerY + radius * Math.sin(angle);
              return `${x},${y}`;
            }).join(' ')}
            fill="none"
            stroke="#6366f1"
            strokeWidth="1"
            strokeOpacity="0.3"
          />
        )}
      </svg>
    );
  };

  // Linear view component
  const LinearView = ({ pattern }: { pattern: Pattern | null }) => {
    if (!pattern) {return null;}

    return (
      <div className="flex justify-center gap-1 flex-wrap">
        {pattern.map((value, index) => (
          <div
            key={index}
            className={`w-10 h-10 flex items-center justify-center border-2 ${
              value === 1
                ? 'bg-[#6366f1] border-[#4338ca] text-white'
                : 'bg-gray-100 border-gray-300 text-gray-600'
            }`}
          >
            <span className="text-xs font-bold">{index}</span>
          </div>
        ))}
      </div>
    );
  };

  // Get localized algorithm name
  const getAlgorithmDisplayName = (algorithm: string) => {
    return t(`algorithms.${algorithm}` as any);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#6366f1] to-[#8b5cf6]">
      <section className="pt-24 pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <h1 className="text-6xl md:text-7xl font-black text-white mb-4 uppercase tracking-tighter">
              {t('title')}
            </h1>
            <p className="text-xl text-white/80 mb-12">
              {t('subtitle')}
            </p>

            {/* Controls */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 mb-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Number of Pulses */}
                <div>
                  <label className="block text-white font-semibold mb-2">
                    {t('controls.pulses')}
                  </label>
                  <input
                    type="range"
                    min="3"
                    max="24"
                    value={numPulses}
                    onChange={(e) => setNumPulses(parseInt(e.target.value))}
                    className="w-full mb-2"
                  />
                  <div className="text-white text-center font-bold">{numPulses}</div>
                </div>

                {/* Number of Onsets */}
                <div>
                  <label className="block text-white font-semibold mb-2">
                    {t('controls.onsets')}
                  </label>
                  <input
                    type="range"
                    min="0"
                    max={Math.min(numPulses, 12)}
                    value={numOnsets}
                    onChange={(e) => setNumOnsets(parseInt(e.target.value))}
                    className="w-full mb-2"
                  />
                  <div className="text-white text-center font-bold">{numOnsets}</div>
                </div>

                {/* Scoring Algorithm */}
                <div>
                  <label className="block text-white font-semibold mb-2">
                    {t('controls.algorithm')}
                  </label>
                  <select
                    value={scoringAlgorithm}
                    onChange={(e) => setScoringAlgorithm(e.target.value)}
                    className="w-full px-3 py-2 rounded bg-white/20 text-white border border-white/30"
                  >
                    <option value="evenness">{t('algorithms.evenness')}</option>
                    <option value="entropy">{t('algorithms.entropy')}</option>
                    <option value="balance">{t('algorithms.balance')}</option>
                    <option value="maxGap">{t('algorithms.maxGap')}</option>
                    <option value="symmetry">{t('algorithms.symmetry')}</option>
                  </select>
                </div>

                {/* View Mode */}
                <div>
                  <label className="block text-white font-semibold mb-2">
                    {t('controls.viewMode')}
                  </label>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setViewMode('circular')}
                      className={`flex-1 px-3 py-2 rounded font-semibold transition-colors ${
                        viewMode === 'circular'
                          ? 'bg-white text-[#6366f1]'
                          : 'bg-white/20 text-white hover:bg-white/30'
                      }`}
                    >
                      {t('controls.circular')}
                    </button>
                    <button
                      onClick={() => setViewMode('linear')}
                      className={`flex-1 px-3 py-2 rounded font-semibold transition-colors ${
                        viewMode === 'linear'
                          ? 'bg-white text-[#6366f1]'
                          : 'bg-white/20 text-white hover:bg-white/30'
                      }`}
                    >
                      {t('controls.linear')}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Visualization */}
            <div className="bg-white rounded-lg p-8 shadow-xl">
              {bestPattern ? (
                <>
                  {/* Score Display */}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      {t('results.title', { algorithm: getAlgorithmDisplayName(scoringAlgorithm) })}
                    </h3>
                    <p className="text-lg text-gray-600">
                      {t('results.score')} <span className="font-mono font-bold">{bestScore.toFixed(3)}</span>
                    </p>
                  </div>

                  {/* Pattern Visualization */}
                  <div className="mb-6">
                    {viewMode === 'circular' ? (
                      <CircularView pattern={bestPattern} onsetIndices={bestOnsetIndices} />
                    ) : (
                      <LinearView pattern={bestPattern} />
                    )}
                  </div>

                  {/* Pattern Details */}
                  <div className="text-center space-y-2">
                    <p className="text-gray-700">
                      <span className="font-semibold">{t('results.binaryPattern')}</span>{' '}
                      <span className="font-mono bg-gray-100 px-2 py-1 rounded">
                        {bestPattern.join('')}
                      </span>
                    </p>
                    <p className="text-gray-700">
                      <span className="font-semibold">{t('results.onsetPositions')}</span>{' '}
                      <span className="font-mono bg-gray-100 px-2 py-1 rounded">
                        [{bestOnsetIndices.join(', ')}]
                      </span>
                    </p>
                  </div>
                </>
              ) : (
                <div className="text-center text-gray-500 py-12">
                  <p>{t('results.noPattern')}</p>
                </div>
              )}
            </div>

            {/* Algorithm Descriptions */}
            <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h4 className="text-white font-bold mb-2">{t('descriptions.evenness.title')}</h4>
                <p className="text-white/80 text-sm">
                  {t('descriptions.evenness.text')}
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h4 className="text-white font-bold mb-2">{t('descriptions.entropy.title')}</h4>
                <p className="text-white/80 text-sm">
                  {t('descriptions.entropy.text')}
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h4 className="text-white font-bold mb-2">{t('descriptions.balance.title')}</h4>
                <p className="text-white/80 text-sm">
                  {t('descriptions.balance.text')}
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h4 className="text-white font-bold mb-2">{t('descriptions.maxGap.title')}</h4>
                <p className="text-white/80 text-sm">
                  {t('descriptions.maxGap.text')}
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h4 className="text-white font-bold mb-2">{t('descriptions.symmetry.title')}</h4>
                <p className="text-white/80 text-sm">
                  {t('descriptions.symmetry.text')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 