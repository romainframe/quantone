
import { useTranslations } from 'next-intl';

import { Link } from '../../i18n/navigation';

export function generateStaticParams() {
  return [
    { locale: 'en' },
    { locale: 'es' },
    { locale: 'fr' }
  ];
}

export default function Page() {
  const t = useTranslations('Home');
  return (
    <div className="bg-[#6366f1]">
      {/* Hero Section */}
      <section className="pt-24 pb-32 bg-[#6366f1]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-6xl mx-auto">
            <h1 className="text-8xl md:text-9xl font-black text-white mb-8 uppercase tracking-tighter leading-tight transform -skew-y-1">
              {t('title')}
            </h1>
            <p className="text-2xl md:text-3xl text-[#22c55e] font-black uppercase leading-tight mb-12 transform skew-x-1">
              {t('description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/rhythms" className="px-12 py-6 bg-[#fbbf24] text-black text-xl font-black uppercase border-8 border-black hover:bg-[#f59e0b] transition-colors transform hover:scale-105 hover:-rotate-2">
                {t('buttons.explore')}
              </Link>
              <Link href="/about" className="px-12 py-6 bg-[#ef4444] text-white text-xl font-black uppercase border-8 border-black hover:bg-[#dc2626] transition-colors transform hover:scale-105 hover:rotate-2">
                {t('buttons.learn')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-[#22c55e] border-t-8 border-b-8 border-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-6xl md:text-7xl font-black text-black mb-8 uppercase tracking-tighter transform -skew-x-3">
              {t('features.title')}
            </h2>
            <p className="text-2xl text-black font-black uppercase max-w-4xl mx-auto leading-tight">
              {t('features.subtitle')}
            </p>
          </div>
                    
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#fbbf24] border-8 border-black p-8 transform hover:scale-105 hover:rotate-2 transition-all">
              <div className="text-center">
                <div className="text-6xl mb-6">🎵</div>
                <h3 className="text-2xl font-black text-black mb-4 uppercase">{t('features.cards.rhythm.title')}</h3>
                <p className="text-black font-bold uppercase text-lg leading-tight">
                  {t('features.cards.rhythm.description')}
                </p>
              </div>
            </div>
                        
            <div className="bg-[#ef4444] border-8 border-black p-8 transform hover:scale-105 hover:-rotate-2 transition-all">
              <div className="text-center">
                <div className="text-6xl mb-6">📐</div>
                <h3 className="text-2xl font-black text-white mb-4 uppercase">{t('features.cards.harmonic.title')}</h3>
                <p className="text-white font-bold uppercase text-lg leading-tight">
                  {t('features.cards.harmonic.description')}
                </p>
              </div>
            </div>
                        
            <div className="bg-[#8b5cf6] border-8 border-black p-8 transform hover:scale-105 hover:rotate-2 transition-all">
              <div className="text-center">
                <div className="text-6xl mb-6">∞</div>
                <h3 className="text-2xl font-black text-white mb-4 uppercase">{t('features.cards.infinite.title')}</h3>
                <p className="text-white font-bold uppercase text-lg leading-tight">
                  {t('features.cards.infinite.description')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 bg-[#8b5cf6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-8 uppercase tracking-tighter">
            {t('newsletter.title')}
          </h2>
          <div className="bg-white border-8 border-black p-2 rounded-full max-w-2xl mx-auto">
            <div className="flex">
              <input 
                type="email" 
                placeholder={t('newsletter.placeholder')}
                className="flex-1 px-6 py-4 text-lg font-black uppercase text-black placeholder-gray-500 bg-transparent outline-none"
              />
              <button className="px-8 py-4 bg-black text-white font-black uppercase border-4 border-black hover:bg-gray-800 transition-colors">
                {t('newsletter.button')}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
