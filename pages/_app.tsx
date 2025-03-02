import { FC, ReactElement, ReactNode } from 'react';
import type { AppProps } from 'next/app';
import type { NextPage } from 'next';
import ThemeProvider from '../src/Providers/ThemeProvider';
import Home from 'src/components/Home/Home';
import '../styles/globals.css';
import { Provider } from 'react-redux';
import { store } from 'src/store/store';

type NextPageWithLayout = NextPage & {
  Layout?: FC<{ children: ReactNode }>;
};

interface MyAppProps extends AppProps {
  Component: NextPageWithLayout;
}

const MyApp = ({ Component, pageProps }: MyAppProps): ReactElement => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <Home>
          <Component {...pageProps} />
        </Home>
      </ThemeProvider>
    </Provider>
  );
};

export default MyApp;
