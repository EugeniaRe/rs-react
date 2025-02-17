import { useState, useEffect } from 'react';
import SearchSection from '../SearchSection/SearchSection';
import Pagination from '../Pagination/Pagination';
import { Outlet } from 'react-router-dom';
import useLocalStorage from '../../hooks/useLocalStorage';
import { useGetPlanetsQuery } from '../../store/api/api';
import Loading from '../Loading/Loading';
import Card from '../Card/Card';
import { IResultItem } from '../../interfaces/interfaces';
import Flyout from '../Flyout/Flyout';
import './Main.css';
import useThemeContext from '../../hooks/useThemeContext';

function Main() {
  const { theme, toggleTheme } = useThemeContext();
  const [searchTerm, setSearchTerm] = useLocalStorage('searchTerm');

  const [queryTerm, setQueryTerm] = useState(searchTerm);

  const [activePage, setActivePage] = useState(1);
  const { data, isLoading } = useGetPlanetsQuery({
    searchTerm: queryTerm,
    page: activePage,
  });

  useEffect(() => {
    handleSearch(searchTerm);
  }, [searchTerm]);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    setQueryTerm(searchTerm);
    setActivePage(1);
  };

  return (
    <>
      <div
        className={`main-page-wrapper ${theme === 'dark' ? 'dark' : 'light'}`}
      >
        <div className="main-page">
          <button onClick={toggleTheme}>
            {`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Theme`}
          </button>
          <SearchSection onSearch={handleSearch} />
          <div className="results-list">
            {isLoading ? (
              <Loading />
            ) : data?.results && data?.results.length !== 0 ? (
              data.results.map((result: IResultItem) => (
                <Card key={result.url} result={result} />
              ))
            ) : (
              <div>Items Not Found</div>
            )}
          </div>
          <Pagination
            itemsCount={data?.count || 0}
            onClick={(page) => {
              setActivePage(page);
            }}
          />
          {isLoading && <Loading />}
          <Flyout />
        </div>
        <Outlet />
      </div>
    </>
  );
}

export default Main;
