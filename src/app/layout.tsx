import { Inter } from 'next/font/google';
import StoreProvider from '../Providers/StoreProvider';
import '../globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: 'SW Planets',
  description: 'App for searching Star Wars Planets',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
