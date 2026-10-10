import type { Metadata, Viewport } from 'next';
import { Outfit, Poppins } from 'next/font/google';
import JsonLd from '@/components/seo/JsonLd';
import './globals.css';

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['700', '900'],
  variable: '--font-outfit',
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#071126',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://airwaveglobal.in'),
  title: {
    default: 'Airwave Global Logistics Private Limited | Bridging Continents, Connecting Markets',
    template: '%s | Airwave Global Logistics',
  },
  description:
    'Airwave Global Logistics Private Limited is India’s premier freight forwarder and licensed customs broker. End-to-end air freight charters, ocean cargo (FCL/LCL), ICEGATE 2.0 digital customs clearance, project heavy-lift transport, and pharma cold chain.',
  alternates: {
    canonical: 'https://airwaveglobal.in',
  },
  keywords: [
    'Airwave Global Logistics',
    'Airwave Global Logistics Private Limited',
    'freight forwarding company India',
    'international freight forwarder Delhi',
    'air cargo charters India',
    'ocean freight forwarder FCL LCL',
    'customs clearance broker India',
    'ICEGATE 2.0 digital customs clearance',
    'Nhava Sheva sea freight forwarder',
    'Delhi air cargo clearance',
    'multimodal transport operator India',
    'project cargo ODC logistics India',
    'pharmaceutical cold chain air freight',
    'temperature controlled logistics India',
    'supply chain management India',
  ],
  authors: [{ name: 'Airwave Global Logistics Private Limited', url: 'https://airwaveglobal.in' }],
  creator: 'Airwave Global Logistics Private Limited',
  publisher: 'Airwave Global Logistics Private Limited',
  category: 'Logistics & Supply Chain',
  classification: 'International Freight Forwarding & Customs Brokerage',
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Airwave Global Logistics Private Limited | Bridging Continents, Connecting Markets',
    description:
      'Airwave Global Logistics Private Limited—reliable global freight forwarding, priority air & ocean cargo, ICEGATE 2.0 customs brokerage, and precision supply chain execution.',
    url: 'https://airwaveglobal.in',
    siteName: 'Airwave Global Logistics Private Limited',
    images: [
      {
        url: '/images/airwave-logo.webp',
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
    description:
      'Bridging Continents, Connecting Markets. International Air & Ocean Freight, ICEGATE Customs Brokerage, and Multimodal Supply Chain.',
    images: ['/images/airwave-logo.webp'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.png', type: 'image/png' },
    ],
    apple: [{ url: '/apple-icon.png' }],
  },
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${outfit.variable} ${poppins.variable}`}>
      <head>
        {/* Dynamic Image CDN Preconnect for instantaneous asset delivery */}
        <link rel="dns-prefetch" href="https://cdn.sanity.io" />
        <link rel="preconnect" href="https://cdn.sanity.io" crossOrigin="anonymous" />

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

        {/* Schema.org Structured Data (JSON-LD) for Search Engines */}
        <JsonLd />
      </head>
      <body className={`${poppins.className} bg-slate-50 text-slate-800 antialiased selection:bg-[#fe7f25] selection:text-white font-sans`}>
        {children}
      </body>
    </html>
  );
}
