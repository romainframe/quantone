import { useTranslations } from 'next-intl';

import { Link } from '../i18n/navigation';

export function Footer() {
  const t = useTranslations('Footer');
  
  return (
    <footer className="bg-[#8b5cf6] border-t-8 border-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h3 className="text-6xl md:text-7xl font-black text-white mb-8 uppercase tracking-tighter transform -skew-x-6">
            {t('title')}
          </h3>
          <p className="text-2xl text-black font-black uppercase max-w-2xl mx-auto leading-tight">
            {t('description')}
          </p>
        </div>
                
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6 mb-12">
          <Link href="/rhythms" className="px-8 py-4 bg-[#fbbf24] text-black font-black uppercase border-8 border-black hover:bg-[#f59e0b] transition-colors transform hover:scale-105">
            {t('links.rhythms')}
          </Link>
          <a href="https://github.com/romainframe/quantone" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-black text-white font-black uppercase border-8 border-black hover:bg-gray-800 transition-colors transform hover:scale-105">
            {t('links.github')}
          </a>
          <span className="px-8 py-4 bg-[#22c55e] text-black font-black uppercase border-8 border-black">
            {t('links.openSource')}
          </span>
        </div>
                
        <div className="border-t-8 border-black pt-8">
          <p className="text-lg font-black text-black text-center uppercase tracking-wide">
            {t('copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
}
