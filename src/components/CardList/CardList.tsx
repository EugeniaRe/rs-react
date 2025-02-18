import { IResultItem } from '../../interfaces/interfaces';
import './CardList.css';
import { useGetPlanetsQuery } from '../../store/api/api';
import Loading from '../Loading/Loading';
import Card from '../Card/Card';

interface CardListProps {
  searchTerm: string;
}

function CardList({ searchTerm }: CardListProps) {
  const { isLoading, data } = useGetPlanetsQuery(searchTerm);
  return (
    <div className="results-list">
      {isLoading ? (
        <Loading />
      ) : data ? (
        data.results.map((result: IResultItem) => (
          <Card key={result.url} result={result} />
        ))
      ) : (
        <div>Not Found</div>
      )}
    </div>
  );
}
export default CardList;
