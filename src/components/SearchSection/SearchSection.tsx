import React from 'react';

interface SearchSectionState {
  searchTerm: string;
}

class SearchSection extends React.Component<{}, SearchSectionState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      searchTerm: localStorage.getItem('searchTerm') || '',
    };
  }

  handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchTerm: event.target.value });
  };

  render() {
    return (
      <div>
        <input
          placeholder="Search..."
          type="text"
          value={this.state.searchTerm}
          onChange={this.handleInputChange}
        />
        <button onClick={() => {}}>Search</button>
      </div>
    );
  }
}

export default SearchSection;
