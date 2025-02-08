import { useEffect, useState } from 'react';
import { useGetSearchTerm } from './useGetSearchTerm';

interface useFetchDataProps {
  search: string;
  page: number;
}
// import { useDebounce } from './useDebounce';
const BASE_URL = 'https://swapi.dev/api/planets/?';
//https://swapi.dev/api/planets/?search=&page=
// export function useFetchData(initialParams: useFetchDataProps) {
//   const [params, setParams] = useState(initialParams);
//   const [results, setResults] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [isError, setIsError] = useState(false);

//   // const storedSearchTerm = useGetSearchTerm();
//   const paramsString = Object.entries(params)
//     .map(([key, value]) => `${key}=${value}`)
//     .join('&');

//   useEffect(() => {
//     async function requestPeople() {
//       setIsError(false);
//       setIsLoading(true);
//       try {
//         const response = await fetch(`${baseUrl}${paramsString}`);
//         const data = await response.json();
//         setResults(data.results);
//       } catch (error) {
//         setIsError(true);
//         console.log(error);
//       }
//       setIsLoading(false);
//     }
//     requestPeople();
//   }, [params]);

//   return [{ params, results, isLoading, isError }, setParams];
// }

export function useFetchData(initialParams: useFetchDataProps) {
  const [params, setParams] = useState(initialParams);
  const [results, setResults] = useState([]);
  // const [resultsCount, setResultsCount] = useState(0);
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
      // setResultsCount(data.count);
    } catch (error) {
      console.error('Error fetching data:', error);
      setResults([]);
    } finally {
      setIsLoading(false);
    }
  };
  return [{ params, results, isLoading }, setParams];
}
