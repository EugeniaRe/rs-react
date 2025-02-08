import { useGetSearchTerm } from '../../hooks/useGetSearchTerm';

interface PaginationProps {
  itemsCount: number;
  onSearch: (searchTerm: string, page: number) => void;
}

const ITEMS_FOR_PAGE = 10;

function Pagination({ itemsCount, onSearch }: PaginationProps) {
  const searchTerm = useGetSearchTerm();
  const pagesCount = Math.ceil(itemsCount / ITEMS_FOR_PAGE);
  const handleClick = (value: number) => {
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
