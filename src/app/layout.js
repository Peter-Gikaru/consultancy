import { Inter, Lora, Playfair_Display } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import NoBsPricingAnchor from '@/components/NoBsPricingAnchor';
import { siteData } from '@/config/siteData';

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
  title: `${siteData.siteInfo.brandName} - Project Evaluation & Advisory`,
  description: siteData.siteInfo.tagline,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${lora.variable} ${playfair.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <NoBsPricingAnchor />
        <Footer />
      </body>
    </html>
  );
}
