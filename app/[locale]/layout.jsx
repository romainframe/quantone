import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '../../i18n/routing';
import { Header } from '../../components/header';
import { Footer } from '../../components/footer';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export default async function LocaleLayout({
  children,
  params
}) {
  const {locale} = await params;
  
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
              <body>
          <NextIntlClientProvider messages={messages}>
                       <div className="flex flex-col min-h-screen bg-[#6366f1]">
              <Header />
              <main className="grow">
                {children}
              </main>
              <Footer />
            </div>
          </NextIntlClientProvider>
        </body>
    </html>
  );
} 