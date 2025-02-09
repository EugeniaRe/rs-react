import { useState, useEffect } from 'react';
import Loading from './components/Loading/Loading';
import { useGetSearchTerm } from './hooks/useGetSearchTerm';
import SearchSection from './components/SearchSection/SearchSection';
import ResultSection from './components/ResultSection/ResultSection';
import Pagination from './components/Pagination/Pagination';
import { Outlet, useLocation, useSearchParams } from 'react-router-dom';
import { BASE_URL } from './constants';
import './App.css';

function App() {
  const location = useLocation();
  const [, setSearchParams] = useSearchParams();

  const [results, setResults] = useState([]);
  const [resultsCount, setResultsCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const storedSearchTerm = useGetSearchTerm();

  useEffect(() => {
    if (storedSearchTerm) {
      search(storedSearchTerm);
    } else {
      search('');
    }
  }, []);

  const search = async (term: string, pageNumber?: number) => {
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

  const handleSearch = (searchTerm: string, pageNumber: number = 1) => {
    search(searchTerm, pageNumber);
  };

  return (
    <>
      <div className="">
        <SearchSection onSearch={handleSearch} />
        <ResultSection results={results} />
        <Pagination itemsCount={resultsCount} onSearch={handleSearch} />
        <Loading isLoading={isLoading} />
      </div>
      <Outlet />
    </>
  );
}

export default App;
