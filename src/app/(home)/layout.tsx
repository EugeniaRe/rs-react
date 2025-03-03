'use client';

import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Main from '../../components/Main/Main';
import ThemeProvider from '../../Providers/ThemeProvider';
import styles from '../../components/Home/Home.module.css';

function Home({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ThemeProvider>
        <Header />
        <div className={styles.main_wrapper}>
          <Main />
          {children}
        </div>
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default Home;
