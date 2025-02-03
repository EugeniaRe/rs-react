import React from 'react';

interface ResultSectionProps {
  results: ResultItem[] | null;
}

interface ResultItem {
  url: string;
  name: string;
  terrain: string;
}
class ResultSection extends React.Component<ResultSectionProps> {
  render() {
    if (!this.props.results || this.props.results.length === 0) {
      return (
        <div>
          It looks like there are no results for your request. Please try
          searching for something else.
        </div>
      );
    }
    return (
      <div>
        <ul>
          Search Results
          {this.props.results.map((item: ResultItem) => (
            <li key={item.url}>
              <span>{item.name}</span>
              <span>{item.terrain}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ResultSection;
