import type { Metadata } from 'next';
import { Poppins, Outfit } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['400', '600', '700', '800'],
});

const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-outfit',
  weight: ['700', '900'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.airwavelogistics.com'),
  title: 'Airwave Global Logistics Private Limited | Bridging Continents, Connecting Markets',
  description: 'Airwave Global Logistics Private Limited—your trusted partner for global freight forwarding, multimodal transport, customs brokerage, and supply chain solutions.',
  keywords: [
    'Airwave Global Logistics',
    'Airwave Global Logistics Private Limited',
    'global freight forwarding',
    'air freight logistics',
    'ocean freight forwarder',
    'customs clearance India',
    'supply chain solutions',
  ],
  openGraph: {
    title: 'Airwave Global Logistics Private Limited | Bridging Continents, Connecting Markets',
    description: 'Airwave Global Logistics Private Limited—reliable global freight forwarding, air and ocean cargo, and precision supply chain execution.',
    url: 'https://www.airwavelogistics.com',
    siteName: 'Airwave Global Logistics Private Limited',
    images: [
      {
        url: '/images/airwave-logo.jpg',
        width: 1200,
        height: 630,
        alt: 'Airwave Global Logistics Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Airwave Global Logistics Private Limited',
    description: 'Bridging Continents, Connecting Markets. Air & Ocean Freight, Customs, and Multimodal Supply Chain.',
    images: ['/images/airwave-logo.jpg'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.png', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon.png' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${poppins.variable} ${outfit.variable}`}>
      <body className="bg-slate-50 text-slate-800 antialiased selection:bg-[#fe7f25] selection:text-white font-sans">
        {children}
      </body>
    </html>
  );
}
