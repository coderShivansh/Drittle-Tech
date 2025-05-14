import { Inter, Merriweather } from 'next/font/google';
import '@/sass/index.scss';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import UIProvider from '@/context/UI/provider';
import ContactModal from '@/components/ContactModal';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const calistoga = Merriweather({
  subsets: ['latin'],
  variable: '--font-serif',
  weight: ['400', '300', '700', '900'],
});

import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Home - Drittle Tech',
  description: 'Drittle Tech | IT Services Company | Build Your IT Here | Software | MVP',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={`${inter.variable} ${calistoga.variable}`}>
      <body className={'font-sans bg-gray-900 relative text-white antialiased'}>
        {/* <Cursor /> */}
        <UIProvider>
          <ContactModal />
          <Navbar />
          {children}
          <Footer />
        </UIProvider>
      </body>
    </html>
  );
}
