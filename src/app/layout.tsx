import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { AnalyticsProviders } from '@/components/tracking/AnalyticsProviders';
import { JsonLd } from '@/components/seo/JsonLd';
import { business } from '@/config/business';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://maineroofingscapesrepairs.com'),
  title: {
    default: 'Roofing Contractor in Maine & NH | Maine Roofing Scapes & Repairs',
    template: '%s | Maine Roofing Scapes & Repairs'
  },
  description: "Trusted Maine roofing contractor serving Maine and New Hampshire since 2021. Specializing in commercial roof restoration, standing seam metal roofing, architectural shingle replacement, and winter emergency ice dam removal. Call (207) 383-1646.",
  keywords: [
    'roofing contractors maine',
    'roofing companies in maine',
    'commercial roofing maine',
    'roof restoration maine',
    'metal roofs in maine',
    'ice dam removal maine',
    'roof repair maine',
    'roof replacement contractor maine'
  ],
  authors: [{ name: business.name }],
  creator: business.name,
  publisher: business.name,
  formatDetection: {
    telephone: true,
    email: true,
    address: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://maineroofingscapesrepairs.com',
    siteName: business.name,
    title: 'Roofing Contractor in Maine & NH | Maine Roofing Scapes & Repairs',
    description: 'Commercial flat roof restorations, standing seam metal, architectural shingles, and rapid winter ice dam removal across Maine & NH. Call (207) 383-1646.',
    images: [
      {
        url: '/images/og-maineroofing.jpg',
        width: 1200,
        height: 630,
        alt: 'Maine Roofing Scapes & Repairs - Commercial & Residential Roofing Specialists in Maine & NH',
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Maine Roofing Scapes & Repairs | Roofing Specialists',
    description: 'Commercial & residential roofing built for severe Maine winters. Call (207) 383-1646.',
    images: ['/images/og-maineroofing.jpg'],
  },
  alternates: {
    canonical: 'https://maineroofingscapesrepairs.com'
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} font-sans scroll-smooth antialiased`}>
      <head>
        <JsonLd />
      </head>
      <body className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-crimson-600 selection:text-white">
        <AnalyticsProviders />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
