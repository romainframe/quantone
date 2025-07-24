import Image from 'next/image';

import { useTranslations } from 'next-intl';

import { LangSwitcher } from './lang-switcher';
import { Link } from '../i18n/navigation';

interface NavItem {
    linkText: string;
    href: string;
}

export function Header() {
  const t = useTranslations('Header');

  const navItems: NavItem[] = [
    { linkText: t('home'), href: '/' },
    { linkText: t('rhythms'), href: '/rhythms' },
    { linkText: t('about'), href: '/about' }
  ];

  return (
    <header className="w-full bg-[#22c55e] border-b-8 border-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <nav className="flex items-center justify-between h-24">
          <Link href="/" className="flex items-center">
            <span className="text-4xl font-black text-black uppercase tracking-tighter transform -skew-x-6">quantone</span>
          </Link>
                    
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item, index) => (
              <Link 
                key={index}
                href={item.href} 
                className="text-lg font-black text-black uppercase tracking-wide px-4 py-2 bg-[#fbbf24] border-4 border-black hover:bg-[#f59e0b] transition-colors transform hover:scale-105"
              >
                {item.linkText}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <LangSwitcher />
            <Link
              href="https://github.com/romainframe/quantone"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-black border-4 border-black hover:bg-gray-800 transition-colors"
            >
              <Image src="/images/github-mark-white.svg" alt="GitHub logo" width={24} height={24} className="w-6 h-6 invert" />
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
