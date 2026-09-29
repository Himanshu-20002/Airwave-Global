import type { Metadata } from 'next';
import './globals.css';

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
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Google Fonts Preconnect & Stylesheet */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@700;900&family=Poppins:wght@400;600;700;800&display=swap"
        />

        {/* Responsive LCP Preload for Instant First Hero Banner Paint */}
        <link
          rel="preload"
          as="image"
          href="/images/banner/hero-1.webp"
          media="(min-width: 768px)"
          fetchPriority="high"
        />
        <link
          rel="preload"
          as="image"
          href="/images/banner/hero-1-mobile.webp"
          media="(max-width: 767px)"
          fetchPriority="high"
        />
      </head>
      <body className="bg-slate-50 text-slate-800 antialiased selection:bg-[#fe7f25] selection:text-white font-sans">
        {children}
      </body>
    </html>
  );
}
