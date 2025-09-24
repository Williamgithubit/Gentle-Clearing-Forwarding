import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ScrollToTop } from '@/components/ui/ScrollToTop';
import { ClientLayout } from '@/components/layout/ClientLayout';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    template: '%s | Gentle Clearing & Forwarding',
    default: 'Gentle Clearing & Forwarding - Professional Logistics & Supply Chain Solutions'
  },
  description: 'Professional logistics and supply chain solutions including freight forwarding, warehousing, transportation, and customs clearance services.',
  keywords: ['logistics', 'freight', 'warehousing', 'transportation', 'supply chain', 'customs clearance'],
  authors: [{ name: 'Gentle Clearing & Forwarding' }],
  openGraph: {
    title: 'Gentle Clearing & Forwarding - Professional Logistics Solutions',
    description: 'Professional logistics and supply chain solutions for businesses worldwide.',
    url: 'https://gentleclearing.com',
    siteName: 'Gentle Clearing & Forwarding',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Gentle Clearing & Forwarding - Professional Logistics Solutions',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gentle Clearing & Forwarding - Professional Logistics Solutions',
    description: 'Professional logistics and supply chain solutions for businesses worldwide.',
    images: ['/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <ClientLayout>
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
          <ScrollToTop />
        </ClientLayout>
      </body>
    </html>
  );
}