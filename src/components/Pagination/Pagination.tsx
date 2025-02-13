import { useSearchParams } from 'react-router-dom';
import useLocalStorage from '../../hooks/useLocalStorage';

interface PaginationProps {
  itemsCount: number;
  onSearch: (searchTerm: string, page: number) => void;
}

const ITEMS_FOR_PAGE = 10;

function Pagination({ itemsCount, onSearch }: PaginationProps) {
  const [, setSearchParams] = useSearchParams();

  const [storedValue] = useLocalStorage('searchTerm');
  const pagesCount = Math.ceil(itemsCount / ITEMS_FOR_PAGE);
  const handleClick = (value: number) => {
    setSearchParams({ page: String(value) });
    onSearch(storedValue, value);
    console.log(value);
  };

  return (
    <div>
      {Array.from({ length: pagesCount }).map((_, index) => (
        <button onClick={() => handleClick(index + 1)} key={index}>
          {index + 1}
        </button>
      ))}
    </div>
  );
}

export default Pagination;
