import { FC, ReactElement, ReactNode } from 'react';
import type { AppProps } from 'next/app';
import type { NextPage } from 'next';
import StoreProvider from '../src/Providers/StoreProvider';
import ThemeProvider from '../src/Providers/ThemeProvider';
import Home from 'src/components/Home/Home';
import '../styles/globals.css';

type NextPageWithLayout = NextPage & {
  Layout?: FC<{ children: ReactNode }>;
};

interface MyAppProps extends AppProps {
  Component: NextPageWithLayout;
}

const MyApp = ({ Component, pageProps }: MyAppProps): ReactElement => {
  return (
    <StoreProvider>
      <ThemeProvider>
        <Home>
          <Component {...pageProps} />
        </Home>
      </ThemeProvider>
    </StoreProvider>
  );
};

export default MyApp;
