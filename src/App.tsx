import React from 'react';
import Loading from './components/Loading/Loading';
import SearchSection from './components/SearchSection/SearchSection';
import ResultSection from './components/ResultSection/ResultSection';

interface AppState {
  isLoading: boolean;
  searchTerm: string;
  searchResult: ResultItem[] | null;
}

interface ResultItem {
  url: string;
  name: string;
  terrain: string;
}
class App extends React.Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      isLoading: false,
      searchTerm: localStorage.getItem('searchTerm') || '',
      searchResult: null,
    };
  }

  handleSearch = (searchTerm: string) => {
    this.setState({ searchTerm: searchTerm });
    this.fetchData(searchTerm);
  };

  fetchData = async (searchTerm: string) => {
    this.setState({ isLoading: true });

    try {
      const response = await fetch(
        `https://swapi.dev/api/planets?search=${searchTerm}`
      );
      const data = await response.json();
      console.log(data.results);
      this.setState({ searchResult: data.results, isLoading: false });
    } catch (error: unknown) {
      console.log(`The ERROR ${error} occurred`);
    }
  };

  componentDidMount() {
    this.fetchData(this.state.searchTerm);
  }

  render() {
    return (
      <div className="app">
        <Loading isLoading={this.state.isLoading} />
        <SearchSection onSearch={this.handleSearch} />
        <ResultSection results={this.state.searchResult} />
      </div>
    );
  }
}

export default App;
