import { useState, useEffect } from 'react';
import Loading from './components/Loading/Loading';
import { useGetSearchTerm } from './hooks/useGetSearchTerm';
import SearchSection from './components/SearchSection/SearchSection';
import ResultSection from './components/ResultSection/ResultSection';
import Pagination from './components/Pagination/Pagination';

const BASE_URL = 'https://swapi.dev/api/planets/?search=';

function App() {
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

  const search = async (term: string) => {
    setIsLoading(true);
    try {
      const response = await fetch(`${BASE_URL}${term}`);
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

  const handleSearch = (searchTerm: string) => {
    search(searchTerm);
  };

  return (
    <div className="">
      <SearchSection onSearch={handleSearch} />
      <ResultSection results={results} />
      <Pagination itemsCount={resultsCount} />
      <Loading isLoading={isLoading} />
    </div>
  );
}

export default App;
