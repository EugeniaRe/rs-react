import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Main from '../Main/Main';
import styles from './Home.module.css';

function Home() {
  return (
    <>
      <Header />
      <div className={styles.main_wrapper}>
        <Main />
      </div>
      <Footer />
    </>
  );
}

export default Home;
