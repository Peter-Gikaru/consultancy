import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CursorGlow from '@/components/CursorGlow';
import FloatingContactWidget from '@/components/FloatingContactWidget';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter-next',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair-next',
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
});

export const metadata = {
  title: "DERAP Consult Limited | Evaluation, Research & Data Analytics — Nairobi, Kenya",
  description: "A Kenyan research and evaluation firm specialising in rigorous impact evaluation, advanced quantitative analysis and transparent public opinion research across Africa.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <CursorGlow />
        <Navbar />
        <main>{children}</main>
        <FloatingContactWidget />
        <Footer />
      </body>
    </html>
  );
}
