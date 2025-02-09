import { useSearchParams } from 'react-router-dom';
import { useGetSearchTerm } from '../../hooks/useGetSearchTerm';

interface PaginationProps {
  itemsCount: number;
  onSearch: (searchTerm: string, page: number) => void;
}

const ITEMS_FOR_PAGE = 10;

function Pagination({ itemsCount, onSearch }: PaginationProps) {
  const [, setSearchParams] = useSearchParams(); // Hook to access query parameters
  // const navigate = useNavigate(); // Hook for navigation

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
        <button onClick={() => handleClick(index + 1)} key={index}>
          {index + 1}
        </button>
      ))}
    </div>
  );
}

export default Pagination;
