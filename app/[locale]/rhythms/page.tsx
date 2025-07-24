import { useTranslations } from 'next-intl';

export function generateStaticParams() {
  return [
    { locale: 'en' },
    { locale: 'es' },
    { locale: 'fr' }
  ];
}

export default function RhythmsPage() {
  const t = useTranslations('Rhythms');
  return (
    <div className="bg-[#6366f1] min-h-screen">
      <section className="pt-24 pb-32 bg-[#6366f1]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-8xl md:text-9xl font-black text-white mb-8 uppercase tracking-tighter transform -skew-y-2">
              {t('title')}
            </h1>
            <p className="text-3xl text-[#22c55e] font-black uppercase leading-tight mb-20 transform skew-x-1">
              {t('description')}
            </p>
                        
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-[#fbbf24] border-8 border-black p-8 transform hover:scale-105 hover:rotate-3 transition-all">
                <h3 className="text-3xl font-black text-black mb-6 uppercase">POLYRHYTHMS</h3>
                <p className="text-black font-bold uppercase text-lg mb-8 leading-tight">
                                    EXPLORE THE MATHEMATICAL BEAUTY OF OVERLAPPING RHYTHMIC PATTERNS
                </p>
                <div className="w-full h-32 bg-black border-4 border-black flex items-center justify-center">
                  <span className="text-[#fbbf24] font-black uppercase text-xl">RHYTHM VIZ</span>
                </div>
              </div>
                            
              <div className="bg-[#ef4444] border-8 border-black p-8 transform hover:scale-105 hover:-rotate-3 transition-all">
                <h3 className="text-3xl font-black text-white mb-6 uppercase">TIME SIGNATURES</h3>
                <p className="text-white font-bold uppercase text-lg mb-8 leading-tight">
                                    UNDERSTAND THE MATHEMATICAL STRUCTURES THAT DEFINE MUSICAL TIME
                </p>
                <div className="w-full h-32 bg-black border-4 border-black flex items-center justify-center">
                  <span className="text-[#ef4444] font-black uppercase text-xl">SIGNATURE PATTERNS</span>
                </div>
              </div>
                            
              <div className="bg-[#22c55e] border-8 border-black p-8 transform hover:scale-105 hover:rotate-3 transition-all">
                <h3 className="text-3xl font-black text-black mb-6 uppercase">EUCLIDEAN RHYTHMS</h3>
                <p className="text-black font-bold uppercase text-lg mb-8 leading-tight">
                                    DISCOVER HOW ANCIENT MATHEMATICS CREATES MODERN BEATS
                </p>
                <div className="w-full h-32 bg-black border-4 border-black flex items-center justify-center">
                  <span className="text-[#22c55e] font-black uppercase text-xl">EUCLIDEAN PATTERNS</span>
                </div>
              </div>
                            
              <div className="bg-[#8b5cf6] border-8 border-black p-8 transform hover:scale-105 hover:-rotate-3 transition-all">
                <h3 className="text-3xl font-black text-white mb-6 uppercase">FRACTALS IN MUSIC</h3>
                <p className="text-white font-bold uppercase text-lg mb-8 leading-tight">
                                    EXPLORE SELF-SIMILAR PATTERNS IN RHYTHMIC COMPOSITION
                </p>
                <div className="w-full h-32 bg-black border-4 border-black flex items-center justify-center">
                  <span className="text-[#8b5cf6] font-black uppercase text-xl">FRACTAL VIZ</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 