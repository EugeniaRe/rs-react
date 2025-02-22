import { IResultData, IResultItem } from '../../interfaces/interfaces';
import { useGetPlanetsQuery } from '../../store/api/api';
import Loading from '../Loading/Loading';
import Card from '../Card/Card';
import styles from './CardList.module.css';

interface CardListProps {
  searchTerm: string;
  activePage: number;
  setData: (data: IResultData) => void;
}

function CardList({ searchTerm, activePage, setData }: CardListProps) {
  const { data, isLoading } = useGetPlanetsQuery({
    searchTerm: searchTerm,
    page: activePage,
  });

  if (data) setData(data);

  return (
    <div className={styles.list}>
      {isLoading ? (
        <Loading />
      ) : data?.results && data?.results.length !== 0 ? (
        data.results.map((result: IResultItem) => (
          <Card key={result.url} result={result} />
        ))
      ) : (
        <div>Items Not Found</div>
      )}
    </div>
  );
}
export default CardList;
