import { useState, useEffect } from 'react';
import Loading from './components/Loading/Loading';
import { useGetSearchTerm } from './hooks/useGetSearchTerm';
import SearchSection from './components/SearchSection/SearchSection';
import ResultSection from './components/ResultSection/ResultSection';

const BASE_URL = 'https://swapi.dev/api/planets/?search=';

function App() {
  // const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const storedSearchTerm = useGetSearchTerm();
  useEffect(() => {
    if (storedSearchTerm) {
      // setSearchTerm(storedSearchTerm);
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
    } catch (error) {
      console.error('Error fetching data:', error);
      setResults([]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = (searchTerm: string) => {
    // localStorage.setItem('searchTerm', searchTerm);
    // setSearchTerm(searchTerm);
    search(searchTerm);
  };

  return (
    <div className="">
      <SearchSection onSearch={handleSearch} />

      {/* <ul>
        {results.map((result: ResultItem) => (
          <li key={result.url} className="border-b p-2">
            {result.name}
          </li>
        ))}
      </ul> */}
      <ResultSection results={results} />
      <Loading isLoading={isLoading} />
    </div>
  );
}

export default App;
