import '@/styles/globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata = {
  title: {
    default: 'FinacX Consulting Services | Strategy, Advisory & Transformation',
    template: '%s | FinacX Consulting Services',
  },
  description: 'FinacX Consulting Services — Empowering businesses to solve complex challenges, optimize performance, and unlock sustainable growth through expert consulting.',
  keywords: ['consulting', 'strategy', 'financial advisory', 'operations', 'risk management', 'technology advisory', 'FinacX'],
  authors: [{ name: 'FinacX Consulting Services' }],
  creator: 'FinacX Consulting Services',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.finacx.com',
    siteName: 'FinacX Consulting Services',
    title: 'FinacX Consulting Services | Strategy, Advisory & Transformation',
    description: 'Empowering businesses to solve complex challenges, optimize performance, and unlock sustainable growth.',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
