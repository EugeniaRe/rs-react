import React from 'react';
import Loading from './components/Loading/Loading';
import SearchSection from './components/SearchSection/SearchSection';

interface AppProps {}
interface AppState {
  isLoading: boolean;
  searchTerm: string;
}

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      isLoading: false,
      searchTerm: localStorage.getItem('searchTerm') || '',
    };
  }

  render() {
    return (
      <div className="app">
        <Loading isLoading={this.state.isLoading} />
        <SearchSection />
      </div>
    );
  }
}

export default App;
