import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'es', 'fr'],
  defaultLocale: 'en',
  localeDetection: true
});

export type Locale = (typeof routing.locales)[number]; 