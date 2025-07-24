import Link from 'next/link';

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
              <Link href="./rhythms/generator" className="block bg-[#ec4899] border-8 border-black p-8 transform hover:scale-105 hover:rotate-3 transition-all">
                <h3 className="text-3xl font-black text-white mb-6 uppercase">{t('cards.generator.title')}</h3>
                <p className="text-white font-bold uppercase text-lg mb-8 leading-tight">
                  {t('cards.generator.description')}
                </p>
                <div className="w-full h-32 bg-black border-4 border-black flex items-center justify-center">
                  <span className="text-[#ec4899] font-black uppercase text-xl">{t('cards.generator.button')}</span>
                </div>
              </Link>
              
              <div className="bg-[#fbbf24] border-8 border-black p-8 transform hover:scale-105 hover:rotate-3 transition-all">
                <h3 className="text-3xl font-black text-black mb-6 uppercase">{t('cards.polyrhythms.title')}</h3>
                <p className="text-black font-bold uppercase text-lg mb-8 leading-tight">
                  {t('cards.polyrhythms.description')}
                </p>
                <div className="w-full h-32 bg-black border-4 border-black flex items-center justify-center">
                  <span className="text-[#fbbf24] font-black uppercase text-xl">{t('cards.polyrhythms.button')}</span>
                </div>
              </div>
                            
              <div className="bg-[#ef4444] border-8 border-black p-8 transform hover:scale-105 hover:-rotate-3 transition-all">
                <h3 className="text-3xl font-black text-white mb-6 uppercase">{t('cards.timeSignatures.title')}</h3>
                <p className="text-white font-bold uppercase text-lg mb-8 leading-tight">
                  {t('cards.timeSignatures.description')}
                </p>
                <div className="w-full h-32 bg-black border-4 border-black flex items-center justify-center">
                  <span className="text-[#ef4444] font-black uppercase text-xl">{t('cards.timeSignatures.button')}</span>
                </div>
              </div>
                            
              <div className="bg-[#22c55e] border-8 border-black p-8 transform hover:scale-105 hover:rotate-3 transition-all">
                <h3 className="text-3xl font-black text-black mb-6 uppercase">{t('cards.euclidean.title')}</h3>
                <p className="text-black font-bold uppercase text-lg mb-8 leading-tight">
                  {t('cards.euclidean.description')}
                </p>
                <div className="w-full h-32 bg-black border-4 border-black flex items-center justify-center">
                  <span className="text-[#22c55e] font-black uppercase text-xl">{t('cards.euclidean.button')}</span>
                </div>
              </div>
                            
              <div className="bg-[#8b5cf6] border-8 border-black p-8 transform hover:scale-105 hover:-rotate-3 transition-all">
                <h3 className="text-3xl font-black text-white mb-6 uppercase">{t('cards.fractals.title')}</h3>
                <p className="text-white font-bold uppercase text-lg mb-8 leading-tight">
                  {t('cards.fractals.description')}
                </p>
                <div className="w-full h-32 bg-black border-4 border-black flex items-center justify-center">
                  <span className="text-[#8b5cf6] font-black uppercase text-xl">{t('cards.fractals.button')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 