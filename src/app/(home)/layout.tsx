'use client';

import { Suspense } from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Main from '../../components/Main/Main';
import ThemeProvider from '../../Providers/ThemeProvider';
import Loading from '../../components/Loading/Loading';
import styles from './Home.module.css';

function Home({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ThemeProvider>
        <Header />
        <div className={styles.main_wrapper}>
          <Suspense fallback={<Loading />}>
            <Main />
            {children}
          </Suspense>
        </div>
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default Home;
