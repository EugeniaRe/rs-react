import { Link } from 'react-router-dom';
import './ResultSection.css';

interface ResultItem {
  url: string;
  name: string;
}

interface ResultSectionProps {
  results: ResultItem[];
}

function ResultSection({ results }: ResultSectionProps) {
  return (
    <div className="results-list">
      {results.map((result: ResultItem) => (
        <Link to={`/${result.name}`} key={result.url}>
          {result.name}
        </Link>
      ))}
    </div>
  );
}
export default ResultSection;
