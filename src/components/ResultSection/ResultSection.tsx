interface ResultItem {
  url: string;
  name: string;
  terrain: string;
}

interface ResultSectionProps {
  results: ResultItem[];
}

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
