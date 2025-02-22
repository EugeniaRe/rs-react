import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { IResultData } from '../../interfaces/interfaces';
import useLocalStorage from '../../hooks/useLocalStorage';
import useThemeContext from '../../hooks/useThemeContext';
import Pagination from '../Pagination/Pagination';
import SearchSection from '../SearchSection/SearchSection';
import Flyout from '../Flyout/Flyout';
import CardList from '../CardList/CardList';
import './Main.css';

function Main() {
  const { theme } = useThemeContext();
  const [searchTerm, setSearchTerm] = useLocalStorage('searchTerm');

  const [queryTerm, setQueryTerm] = useState(searchTerm);

  const [activePage, setActivePage] = useState(1);

  const [resultsData, setResultsData] = useState<IResultData>({
    count: 0,
    results: [],
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
        className={`main_page_wrapper ${theme === 'dark' ? 'dark' : 'light'}`}
      >
        <div className="main_page">
          <h1>Search for a planet</h1>

          <p>
            A Planet resource is a large mass, planet or planetoid in the Star
            Wars Universe, at the time of 0 ABY
          </p>
          <SearchSection onSearch={handleSearch} />
          <CardList
            searchTerm={queryTerm}
            activePage={activePage}
            setData={setResultsData}
          />
          <Pagination
            itemsCount={resultsData?.count || 0}
            onClick={setActivePage}
          />
          <Flyout />
        </div>
        <Outlet />
      </div>
    </>
  );
}

export default Main;
