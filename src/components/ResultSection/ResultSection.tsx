// import React from 'react';
// import './resultSection.css';

interface ResultItem {
  url: string;
  name: string;
  terrain: string;
}

interface ResultSectionProps {
  results: ResultItem[];
}

// // class ResultSection extends React.Component<ResultSectionProps> {
// //   render() {
// //     if (!this.props.results || this.props.results.length === 0) {
// //       return (
// //         <div>
// //           It looks like there are no results for your request. Please try
// //           searching for something else.
// //         </div>
// //       );
// //     }
// //     return (
// //       <div>
// //         <div className="results-head">Search Results</div>
// //         <ul className="results-list">
// //           <div className="results-list-head">
// //             <span className="results-head-name">Planet</span>
// //             <span>Terrain</span>
// //           </div>
// //           {this.props.results.map((item: ResultItem) => (
// //             <li key={item.url}>
// //               <span className="results-item-name">{item.name}</span>
// //               <span>{item.terrain}</span>
// //             </li>
// //           ))}
// //         </ul>
// //       </div>
// //     );
// //   }
// // }

function ResultSection({ results }: ResultSectionProps) {
  return (
    <ul>
      {results.map((result: ResultItem) => (
        <li key={result.url}>{result.name}</li>
      ))}
    </ul>
  );
}
export default ResultSection;
