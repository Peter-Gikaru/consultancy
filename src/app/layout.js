import { Inter, Lora, Playfair_Display } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter-next',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-lora-next',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair-next',
  weight: ['500', '600', '700', '800'],
  display: 'swap',
});

export const metadata = {
  title: 'Built on Site - Smart Technical Assistance for Government Reform in Africa',
  description: 'We embed local teams, deliver evidence-based policy, and drive sustainable impact across Africa. Explore our smart TA approach built for the Kenyan market and beyond.',
  keywords: ['Technical Assistance', 'Government Reform Kenya', 'Public Policy Africa', 'Project Evaluation', 'Health Systems Strengthening', 'Climate Resilience Kenya'],
  openGraph: {
    title: 'Built on Site - Smart Technical Assistance for Government Reform in Africa',
    description: 'Embedded teams, evidence-based policy, and sustainable government reform across Kenya and Africa.',
    url: 'https://builton.site',
    siteName: 'Built on Site Consultancy',
    images: [
      {
        url: '/images/hero-kenya.jpg',
        width: 1200,
        height: 630,
        alt: 'Built on Site Consultancy Community Policy Meeting in Kenya',
      },
    ],
    locale: 'en_KE',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ConsultingBusiness',
    name: 'Built on Site Consultancy',
    description: 'Smart Technical Assistance for Government Reform in Africa',
    url: 'https://builton.site',
    telephone: '+254700000000',
    email: 'info@builton.site',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Nairobi',
      addressCountry: 'KE',
    },
    areaServed: ['Kenya', 'Ethiopia', 'Uganda', 'Tanzania', 'Rwanda', 'Ghana'],
    knowsAbout: ['Public Policy', 'Health Systems Strengthening', 'Climate Resilience', 'Government Evaluation'],
  };

  return (
    <html lang="en" className={`${inter.variable} ${lora.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
