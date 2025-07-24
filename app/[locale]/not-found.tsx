import Link from 'next/link';

import { useTranslations } from 'next-intl';

export default function NotFound() {
  const t = useTranslations('NotFound');
  
  return (
    <div className="bg-[#ef4444] min-h-screen flex items-center justify-center">
      <div className="max-w-6xl mx-auto px-6 py-24 text-center">
        {/* Giant 404 */}
        <div className="mb-8">
          <h1 className="text-[200px] md:text-[300px] font-black text-white leading-none uppercase transform -skew-y-3">
            {t('title')}
          </h1>
        </div>
        
        {/* Lost in the rhythm */}
        <h2 className="text-5xl md:text-6xl font-black text-[#fbbf24] mb-8 uppercase transform skew-x-2">
          {t('subtitle')}
        </h2>
        
        {/* Description */}
        <p className="text-2xl md:text-3xl text-white font-black uppercase leading-tight mb-16 max-w-4xl mx-auto">
          {t('description')}
        </p>
        
        {/* Visual element */}
        <div className="flex justify-center mb-16 space-x-4">
          <div className="text-8xl animate-bounce" style={{ animationDelay: '0ms' }}>🎵</div>
          <div className="text-8xl animate-bounce" style={{ animationDelay: '100ms' }}>📐</div>
          <div className="text-8xl animate-bounce" style={{ animationDelay: '200ms' }}>∞</div>
        </div>
        
        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Link href="/">
            <button className="px-12 py-6 bg-[#22c55e] text-black text-xl font-black uppercase border-8 border-black hover:bg-[#16a34a] transition-all transform hover:scale-105 hover:-rotate-2">
              {t('home')}
            </button>
          </Link>
          <Link href="/rhythms">
            <button className="px-12 py-6 bg-[#fbbf24] text-black text-xl font-black uppercase border-8 border-black hover:bg-[#f59e0b] transition-all transform hover:scale-105 hover:rotate-2">
              {t('explore')}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
} 