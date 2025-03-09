import { useEffect } from 'react';
import useLocalStorage from '../../hooks/useLocalStorage';
import useThemeContext from '../../hooks/useThemeContext';
import Pagination from '../Pagination/Pagination';
import SearchSection from '../SearchSection/SearchSection';
import Flyout from '../Flyout/Flyout';
import CardList from '../CardList/CardList';
import styles from './Main.module.css';

function Main() {
  const { theme } = useThemeContext();

  const [searchTerm, setSearchTerm] = useLocalStorage('searchTerm');

  useEffect(() => {
    handleSearch(searchTerm);
  }, [searchTerm]);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  return (
    <>
      <div
        className={`${styles.main_page_wrapper} ${theme === 'dark' ? 'dark' : 'light'}`}
      >
        <div className={`${styles.main_page}`}>
          <h1>Search for a planet</h1>

          <p>
            A Planet resource is a large mass, planet or planetoid in the Star
            Wars Universe, at the time of 0 ABY
          </p>
          <SearchSection onSearch={handleSearch} />
          <CardList searchTerm={searchTerm} />
          <Pagination searchTerm={searchTerm} />
          <Flyout />
        </div>
      </div>
    </>
  );
}

export default Main;
