import { IResultItem } from '../../interfaces/interfaces';
import { useGetPlanetsQuery } from '../../store/api/api';
import Loading from '../Loading/Loading';
import Card from '../Card/Card';
import styles from './CardList.module.css';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { ITEMS_FOR_PAGE } from '../../constants';

interface CardListProps {
  searchTerm: string;
}

function CardList({ searchTerm }: CardListProps) {
  const searchParams = useSearchParams();

  // const pageParam = Number(searchParams.get('page') ?? '1');

  const pageParam = searchParams.get('page')
    ? !isNaN(Number(searchParams.get('page')))
      ? Number(searchParams.get('page'))
      : 1
    : 1;

  const resultsCount =
    useGetPlanetsQuery({
      searchTerm: searchTerm,
    }).data?.count ?? 0;

  const pagesCount = Math.ceil(resultsCount / ITEMS_FOR_PAGE);

  // const [activePage, setActivePage] = useState(0);

  useEffect(() => {
    // setActivePage(pageParam > pagesCount ? 1 : pageParam);
  }, [pagesCount]);

  // setData(data);

  // if (pageParam > pagesCount) {
  //   pageParam = 1;
  //   router.push(
  //     `${pathname}?${createQueryString(searchParams, 'page', pageParam.toString())}`
  //   );
  // }

  const { data, isLoading } = useGetPlanetsQuery({
    searchTerm: searchTerm,
    page: pageParam > pagesCount ? 1 : pageParam,
  });

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
