'use client';

import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Main from '../../components/Main/Main';
import ThemeProvider from '../../Providers/ThemeProvider';
import styles from '../../components/Home/Home.module.css';
import { Suspense } from 'react';
import Loading from '../../components/Loading/Loading';

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
