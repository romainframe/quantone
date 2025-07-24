'use client';

import { useLocale } from 'next-intl';

import { Link, usePathname } from '../i18n/navigation';

const locales = ['en', 'es', 'fr'] as const;

export function LangSwitcher() {
  const pathname = usePathname();
  const currentLocale = useLocale();

  return (
    <div className="flex items-center space-x-1">
      {locales.map((loc) => (
        <Link
          key={loc}
          href={pathname}
          locale={loc}
          className={`text-sm font-black uppercase tracking-wider px-3 py-2 border-4 border-black transition-colors ${
            loc === currentLocale 
              ? 'bg-[#ef4444] text-white' 
              : 'bg-white text-black hover:bg-[#ef4444] hover:text-white'
          }`}
        >
          {loc}
        </Link>
      ))}
    </div>
  );
} 