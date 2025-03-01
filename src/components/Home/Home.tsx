import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Main from '../Main/Main';
import styles from './Home.module.css';

function Home({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <div className={styles.main_wrapper}>
        <Main />

        {children}
      </div>
      <Footer />
    </>
  );
}

export default Home;
