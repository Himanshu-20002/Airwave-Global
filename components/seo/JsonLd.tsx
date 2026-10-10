import React from 'react';

export default function JsonLd() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Corporation',
    '@id': 'https://airwaveglobal.in/#organization',
    name: 'Airwave Global Logistics Private Limited',
    alternateName: ['Airwave Global Logistics', 'Airwave Logistics'],
    legalName: 'Airwave Global Logistics Private Limited',
    url: 'https://airwaveglobal.in',
    logo: 'https://airwaveglobal.in/images/airwave-logo.webp',
    image: 'https://airwaveglobal.in/images/airwave-logo.webp',
    description:
      'Airwave Global Logistics Private Limited is a premier Indian multimodal freight forwarder and licensed customs broker specializing in international air cargo charters, ocean container shipping (FCL/LCL), ICEGATE 2.0 digital customs clearance, defense & ODC heavy-lift cargo, and GDP-certified pharmaceutical cold chain.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Hauz Khas',
      addressLocality: 'New Delhi',
      addressRegion: 'Delhi',
      postalCode: '110016',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '28.5494',
      longitude: '77.2001',
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+91-83682-62026',
        contactType: 'customer service',
        email: 'info@airwaveglobal.in',
        areaServed: ['IN', 'US', 'EU', 'AE', 'Worldwide'],
        availableLanguage: ['English', 'Hindi'],
      },
    ],
    sameAs: [
      'https://www.instagram.com/airwavelogistics/',
      'https://wa.me/918368262026',
    ],
    priceRange: '$$',
    currenciesAccepted: 'INR, USD, EUR',
    paymentAccepted: 'Bank Wire, Letter of Credit, Online Transfer',
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://airwaveglobal.in/#website',
    url: 'https://airwaveglobal.in',
    name: 'Airwave Global Logistics Private Limited',
    publisher: {
      '@id': 'https://airwaveglobal.in/#organization',
    },
    inLanguage: 'en-US',
  };

  const servicesSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://airwaveglobal.in/#services',
    serviceType: 'International Freight Forwarding & Logistics Management',
    provider: {
      '@id': 'https://airwaveglobal.in/#organization',
    },
    areaServed: {
      '@type': 'AdministrativeArea',
      name: 'Worldwide',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Multimodal Freight & Customs Brokerage Solutions',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'International Air Freight Forwarding & Charters',
            description:
              'Dedicated cargo aircraft chartering, priority belly-hold bookings, and time-critical global air shipping.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Ocean Freight Forwarding (FCL & LCL)',
            description:
              'Full Container Load (FCL) and Less than Container Load (LCL) maritime shipping across all major global sea lanes.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Licensed Indian Customs Brokerage (ICEGATE 2.0)',
            description:
              'Direct ICEGATE EDI digital documentation, Advance Authorization validation, and duty exemption filing across Indian sea and air ports.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Project, Defense & Over-Dimensional Cargo (ODC)',
            description:
              'Turnkey heavy-lift engineering, breakbulk, and secured multi-axle trailers for specialized project cargo.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'GDP Pharmaceutical Cold Chain Logistics',
            description:
              'Validated active and passive temperature-controlled air freight (-70°C, 2-8°C, 15-25°C) with real-time temperature loggers.',
          },
        },
      ],
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What services does Airwave Global Logistics Private Limited offer?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Airwave Global Logistics Private Limited delivers end-to-end multimodal transport solutions, including international air freight and flight charters, ocean container forwarding (FCL & LCL), paperless customs clearance via ICEGATE 2.0, project heavy lift cargo, and GDP-certified cold chain logistics for pharmaceuticals.',
        },
      },
      {
        '@type': 'Question',
        name: 'How fast can I get a freight rate quotation from Airwave?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You can calculate instant volumetric freight budget estimates using our online CBM Smart Hub, and receive an official customized spot and contract freight rate quote from our dispatch team within 2 hours.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does Airwave provide customs clearance at all major Indian ports?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, Airwave operates licensed customs brokerage operations across all major Indian seaports (Nhava Sheva, Mundra, Chennai, Kolkata) and international air cargo terminals (Delhi DEL, Mumbai BOM, Bengaluru BLR, Hyderabad HYD) utilizing ICEGATE 2.0 paperless filings.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the difference between LCL and FCL shipping?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Full Container Load (FCL) reserves an entire container (20ft, 40ft, or 40ft High Cube) exclusively for your shipment. Less than Container Load (LCL) combines cargo from multiple shippers into one shared container, allowing smaller shipments to pay only for the exact cubic meters (CBM) occupied.',
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
