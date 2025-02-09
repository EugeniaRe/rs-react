import { Link, useSearchParams } from 'react-router-dom';
import { useGetSearchTerm } from '../../hooks/useGetSearchTerm';
import './Pagination.css';

interface PaginationProps {
  itemsCount: number;
  onSearch: (searchTerm: string, page: number) => void;
}

const ITEMS_FOR_PAGE = 10;

function Pagination({ itemsCount, onSearch }: PaginationProps) {
  const [, setSearchParams] = useSearchParams();

  const searchTerm = useGetSearchTerm();
  const pagesCount = Math.ceil(itemsCount / ITEMS_FOR_PAGE);
  const handleClick = (value: number) => {
    setSearchParams({ page: String(value) });
    onSearch(searchTerm, value);
    console.log(value);
  };

  return (
    <div>
      {Array.from({ length: pagesCount }).map((item, index) => (
        <Link
          className="page-link"
          to={'/planets'}
          onClick={() => handleClick(index + 1)}
          key={index}
        >
          {index + 1}
        </Link>
      ))}
    </div>
  );
}

export default Pagination;
