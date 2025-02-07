// import React, { useEffect, useState } from 'react';
// import Loading from './components/Loading/Loading';
// import './App.css';

// // interface AppState {
// //   isLoading: boolean;
// //   searchTerm: string;
// //   searchResult: ResultItem[] | null;
// // }

// // interface ResultItem {
// //   url: string;
// //   name: string;
// //   terrain: string;
// // }
// // class App extends React.Component<{}, AppState> {
// //   constructor(props: {}) {
// //     super(props);
// //     this.state = {
// //       isLoading: false,
// //       searchTerm: localStorage.getItem('searchTerm') || '',
// //       searchResult: null,
// //     };
// //   }

// //   handleSearch = (searchTerm: string) => {
// //     this.setState({ searchTerm: searchTerm });
// //     this.fetchData(searchTerm);
// //   };

// //   fetchData = async (searchTerm: string) => {
// //     this.setState({ isLoading: true });

// //     try {
// //       const response = await fetch(
// //         `https://swapi.dev/api/planets?search=${searchTerm}`
// //       );
// //       const data = await response.json();
// //       this.setState({ searchResult: data.results, isLoading: false });
// //     } catch (error: unknown) {
// //       console.log(`The ERROR ${error} occurred`);
// //     }
// //   };

// //   componentDidMount() {
// //     this.fetchData(this.state.searchTerm);
// //   }

// //   render() {
// //     return (
// //       <div className="app">
// //         <header>Hi! This is an application for searching planets!</header>
// //         <main>
// //           <SearchSection onSearch={this.handleSearch} />
// //           <ResultSection results={this.state.searchResult} />
// //           <Loading isLoading={this.state.isLoading} />
// //         </main>
// //       </div>
// //     );
// //   }
// // }

interface ResultItem {
  url: string;
  name: string;
  terrain: string;
}
// function App() {
//   // const initialTerm = useGetSearchTerm();
//   // const [{ query, results, isLoading, isError }, setQuery] =
//   //   useFetchData(initialTerm);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [results, setResults] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const baseUrl = `https://swapi.dev/api/planets?search=${searchTerm}`;

//   useEffect(() => {
//     const initialSearchTerm = localStorage.getItem('searchTerm');
//     if (initialSearchTerm) {
//       setSearchTerm(initialSearchTerm);
//       fetchData(initialSearchTerm);
//     } else {
//       fetchData();
//     }
//   }, []);

//   const fetchData = async (query = '') => {
//     setLoading(true);
//     try {
//       const url = `${baseUrl}${query}`;
//       const response = await fetch(url);
//       if (!response.ok) {
//         throw new Error('Error: response is not ok');
//       }
//       const data = await response.json();
//       setResults(data);
//     } catch (error) {
//       console.error('Failed to fetch data:', error);
//       setResults([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleSearch = () => {
//     const trimmedSearchTerm = searchTerm.trim();
//     if (trimmedSearchTerm) {
//       localStorage.setItem('lastSearchTerm', trimmedSearchTerm);
//       fetchData(trimmedSearchTerm);
//     }
//   };

//   return (
//     <div className="search-app">
//       <div className="top-section">
//         <input
//           type="text"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           placeholder="Search..."
//         />
//         <button onClick={handleSearch}>Search</button>
//         <Loading isLoading={loading} />
//       </div>
//       <div className="main-section">
//         <ul>
//           {results?.map((item: ResultItem) => (
//             <li key={item.url}>{item.name}</li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

// //   return (
// //     <div className="app">
// //       <header>Hi! This is an application for searching planets!</header>
// //       <main></main>
// //     </div>
// //   );
// // }
// export default App;

import { useState, useEffect } from 'react';
import Loading from './components/Loading/Loading';
import { useGetSearchTerm } from './hooks/useGetSearchTerm';
import SearchSection from './components/SearchSection/SearchSection';

const baseUrl = 'https://swapi.dev/api/planets/?search=';

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
      search(''); // Default search term
    }
  }, []);

  const search = async (term: string) => {
    setIsLoading(true);
    try {
      const response = await fetch(`${baseUrl}${term}`);
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

      <ul>
        {results.map((result: ResultItem) => (
          <li key={result.url} className="border-b p-2">
            {result.name}
          </li>
        ))}
      </ul>
      <Loading isLoading={isLoading} />
    </div>
  );
}

export default App;
