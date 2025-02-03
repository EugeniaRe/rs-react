import React from 'react';

interface SearchSectionProps {
  onSearch: (searchTerm: string) => void;
}

interface SearchSectionState {
  searchTerm: string;
}

class SearchSection extends React.Component<
  SearchSectionProps,
  SearchSectionState
> {
  constructor(props: SearchSectionProps) {
    super(props);
    this.state = {
      searchTerm: localStorage.getItem('searchTerm') || '',
    };
  }
  handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchTerm: event.target.value });
  };

  handleBtnClick = () => {
    const trimmedSearchTerm = this.state?.searchTerm?.trim();
    localStorage.setItem('searchTerm', trimmedSearchTerm);
    this.props.onSearch(trimmedSearchTerm);
  };

  render() {
    return (
      <div style={{ paddingBottom: '20px' }}>
        <input
          type="text"
          placeholder="Search..."
          value={this.state.searchTerm}
          onChange={this.handleInputChange}
        />
        <button onClick={this.handleBtnClick}>Search</button>
      </div>
    );
  }
}

export default SearchSection;
