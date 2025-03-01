import { useGetPlanetsQuery } from '../../store/api/api';
import styles from './Pagination.module.css';

interface PaginationProps {
  searchTerm: string;
  onPageClick: (pageNumber: number) => void;
}
const ITEMS_FOR_PAGE = 10;

function Pagination({ searchTerm, onPageClick }: PaginationProps) {
  const { data } = useGetPlanetsQuery({
    searchTerm: searchTerm,
  });

  const itemsCount = data?.count ?? 0;

  const pagesCount = Math.ceil(itemsCount / ITEMS_FOR_PAGE);

  const handlePageClick = (pageNumber: number) => {
    onPageClick(pageNumber);
  };
  return (
    <div>
      {Array.from({ length: pagesCount }).map((_, index) => (
        <button
          className={styles.btn}
          onClick={() => handlePageClick(index + 1)}
          key={index}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
}

export default Pagination;
