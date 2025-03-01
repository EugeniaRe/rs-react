import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import useLocalStorage from '../../hooks/useLocalStorage';
import useThemeContext from '../../hooks/useThemeContext';
import Pagination from '../Pagination/Pagination';
import SearchSection from '../SearchSection/SearchSection';
import Flyout from '../Flyout/Flyout';
import CardList from '../CardList/CardList';
import styles from './Main.module.css';

function Main() {
  const router = useRouter();

  const { theme } = useThemeContext();

  const [searchTerm, setSearchTerm] = useLocalStorage('searchTerm');

  const [queryTerm, setQueryTerm] = useState(searchTerm);

  const [activePage, setActivePage] = useState(Number(router.query.page) || 1);

  useEffect(() => {
    if (router.query.page) {
      setActivePage(Number(router.query.page));
    }
  }, [router.query.page]);

  useEffect(() => {
    handleSearch(searchTerm);
  }, [searchTerm]);

  const navigateToPage = (page: number) => {
    router.push({
      pathname: '/',
      query: { ...router.query, page },
    });
    setActivePage(page);
  };

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    setQueryTerm(searchTerm);

    setActivePage(1);
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
          <CardList searchTerm={queryTerm} activePage={activePage} />
          <Pagination searchTerm={queryTerm} onPageClick={navigateToPage} />
          <Flyout />
        </div>
      </div>
    </>
  );
}

export default Main;
