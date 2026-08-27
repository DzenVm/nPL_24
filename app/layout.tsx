import type { Metadata } from 'next';
import { Space_Grotesk, Source_Sans_3, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';

const displayFont = Space_Grotesk({
  subsets: ['latin-ext'],
  weight: ['500', '600', '700'],
  variable: '--next-display',
});

const bodyFont = Source_Sans_3({
  subsets: ['latin-ext'],
  weight: ['400', '500', '600'],
  variable: '--next-body',
});

const tagFont = IBM_Plex_Mono({
  subsets: ['latin-ext'],
  weight: ['400', '500'],
  variable: '--next-tag',
});

const siteUrl = 'https://twoja-domena.pl';
const siteTitle = 'Gra o nocnej zmianie dyżurnego ruchu';
const siteDescription =
  'Przeglądarkowa gra logiczna o prowadzeniu nocnego ruchu na niewielkiej stacji: rozjazdy, perony, zmęczenie brygad i decyzje, które układają się w jedną zmianę.';

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  metadataBase: new URL(siteUrl),
  alternates: { canonical: '/' },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    locale: 'pl_PL',
    type: 'website',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Game',
    name: siteTitle,
    description: siteDescription,
    inLanguage: 'pl-PL',
    genre: 'Gra logiczna i strategiczna',
    playMode: ['SinglePlayer', 'CoOp'],
    applicationCategory: 'Game',
    operatingSystem: 'Any (przeglądarka internetowa)',
    isAccessibleForFree: true,
  };

  return (
    <html lang="pl" className={`${displayFont.variable} ${bodyFont.variable} ${tagFont.variable}`}>
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
