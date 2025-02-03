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
    return (
      <div>
        <ul>
          Search Results
          {this.props.results ? (
            this.props.results.map((item: ResultItem) => (
              <li key={item.url}>
                <span>{item.name}</span>
                <span>{item.terrain}</span>
              </li>
            ))
          ) : (
            <div>
              It looks like there are no results for your request. Please try
              searching for something else.
            </div>
          )}
        </ul>
      </div>
    );
  }
}

export default ResultSection;
