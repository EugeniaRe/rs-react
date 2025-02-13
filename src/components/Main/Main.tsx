import { useState, useEffect } from 'react';
import Loading from '../Loading/Loading';
import SearchSection from '../SearchSection/SearchSection';
import ResultSection from '../ResultSection/ResultSection';
import Pagination from '../Pagination/Pagination';
import { Outlet, useLocation, useSearchParams } from 'react-router-dom';
import { BASE_URL } from '../../constants';
import './Main.css';
import useLocalStorage from '../../hooks/useLocalStorage';

function Main() {
  const location = useLocation();
  const [, setSearchParams] = useSearchParams();

  const [results, setResults] = useState([]);
  const [resultsCount, setResultsCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const [storedSearchTerm] = useLocalStorage('searchTerm');

  // console.log(storedSearchTerm);
  useEffect(() => {
    if (storedSearchTerm) {
      search(storedSearchTerm);
    } else {
      search('');
    }
  }, [storedSearchTerm]);

  const search = async (term: string, pageNumber?: number) => {
    // console.log('search term', term);
    const oldPageNumber =
      Number(new URLSearchParams(location.search).get('page')) || 1;
    pageNumber = pageNumber || oldPageNumber;
    setSearchParams({ page: String(pageNumber), search: term });
    setIsLoading(true);
    try {
      const response = await fetch(
        `${BASE_URL}?search=${term}&page=${pageNumber}`
      );
      const data = await response.json();
      setResults(data.results);
      setResultsCount(data.count);
    } catch (error) {
      console.error('Error fetching data:', error);
      setResults([]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = async (searchTerm: string, pageNumber: number = 1) => {
    await search(searchTerm, pageNumber);
  };

  return (
    <>
      <div className="">
        <SearchSection onSearch={handleSearch} />
        {results.length === 0 && <p>No results found</p>}
        <ResultSection results={results} />
        <Pagination itemsCount={resultsCount} onSearch={handleSearch} />
        <Loading isLoading={isLoading} />
      </div>
      <Outlet />
    </>
  );
}

export default Main;
