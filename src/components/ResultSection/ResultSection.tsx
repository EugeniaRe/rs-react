import React from 'react';
import './resultSection.css';

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
        <div style={{ paddingBottom: '10px', fontWeight: '700' }}>
          Search Results
        </div>
        <ul className="results-list">
          {this.props.results.map((item: ResultItem) => (
            <li key={item.url}>
              <span className="results-item-name">{item.name}</span>
              <span>{item.terrain}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ResultSection;
