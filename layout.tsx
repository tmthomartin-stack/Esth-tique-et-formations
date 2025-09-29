import type { Metadata } from 'next'
import { Inter, Playfair_Display, Poppins } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'Esthéticienne Multi-Spécialiste | Soins & Formations Professionnelles',
  description: 'Découvrez 50+ services esthétiques uniques et formations professionnelles en onglerie. Spécialités rares : Head Spa japonais, BB Glow, Volume russe. Réservez votre soin ou formation dès maintenant.',
  keywords: 'esthéticienne, soins esthétiques, formations onglerie, BB Glow, Head Spa japonais, Volume russe, lifting colombien, microneedling, plasma, cils, sourcils',
  authors: [{ name: 'Esthéticienne Multi-Spécialiste' }],
  creator: 'Esthéticienne Multi-Spécialiste',
  publisher: 'Esthéticienne Multi-Spécialiste',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://esthetienne-multispecialiste.fr'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Esthéticienne Multi-Spécialiste | Soins & Formations Professionnelles',
    description: 'Découvrez 50+ services esthétiques uniques et formations professionnelles en onglerie. Spécialités rares et techniques avancées.',
    url: 'https://esthetienne-multispecialiste.fr',
    siteName: 'Esthéticienne Multi-Spécialiste',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Esthéticienne Multi-Spécialiste - Soins & Formations',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Esthéticienne Multi-Spécialiste | Soins & Formations Professionnelles',
    description: 'Découvrez 50+ services esthétiques uniques et formations professionnelles en onglerie.',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${playfair.variable} ${poppins.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#F8D7DA" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BeautySalon",
              "name": "Esthéticienne Multi-Spécialiste",
              "description": "Salon d'esthétique proposant 50+ services uniques et formations professionnelles en onglerie",
              "url": "https://esthetienne-multispecialiste.fr",
              "telephone": "+33619698984",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "FR"
              },
              "openingHours": "Mo-Fr 09:00-19:00,Sa 09:00-17:00",
              "priceRange": "€€",
              "serviceArea": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": 48.8566,
                  "longitude": 2.3522
                },
                "geoRadius": "50000"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Services Esthétiques",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Cils & Sourcils",
                      "description": "Extensions de cils, rehaussement, volume russe, microblading"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Soins Visage",
                      "description": "Hydrafacial, BB Glow, Plasma, Microneedling, Luminothérapie"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Formations Professionnelles",
                      "description": "Formations certifiantes en onglerie et techniques esthétiques"
                    }
                  }
                ]
              }
            })
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}


