import '../styles/globals.css';
import type { ReactNode } from 'react';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | Quantone',
    default: 'Quantone'
  }
};

interface RootLayoutProps {
    children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return children;
}
