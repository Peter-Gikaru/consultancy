import { Inter, Lora } from 'next/font/google';
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

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-lora-next',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export const metadata = {
  title: "DERAP Consult Limited | Evaluation, Research & Data Analytics — Nairobi, Kenya",
  description: "A Kenyan research and evaluation firm specialising in rigorous impact evaluation, advanced quantitative analysis and transparent public opinion research across Africa.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${lora.variable}`}>
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
