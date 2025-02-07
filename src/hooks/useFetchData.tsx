import { useEffect, useState } from 'react';
// import { useDebounce } from './useDebounce';
const baseUrl = 'https://swapi.dev/api/planets/?search=';
export function useFetchData(initialQuery: string = '') {
  const [query, setQuery] = useState(initialQuery);
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  //   const filterDebounced = useDebounce(query, 500);
  useEffect(() => {
    async function requestPeople() {
      setIsError(false);
      setIsLoading(true);
      try {
        const response = await fetch(`${baseUrl}${query}`);
        const data = await response.json();
        setResults(data.results);
      } catch (error) {
        setIsError(true);
        console.log(error);
      }
      setIsLoading(false);
    }
    requestPeople();
  }, [query]);

  return [{ query, results, isLoading, isError }, setQuery];
}
