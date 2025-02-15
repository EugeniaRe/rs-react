import { useSearchParams } from 'react-router-dom';

interface PaginationProps {
  itemsCount: number;
  onClick: (pageNumber: number) => void;
}
const ITEMS_FOR_PAGE = 10;

function Pagination({ itemsCount, onClick }: PaginationProps) {
  const [, setSearchParams] = useSearchParams();
  const pagesCount = Math.ceil(itemsCount / ITEMS_FOR_PAGE);

  const handlePageClick = (pageNumber: number) => {
    setSearchParams({ page: String(pageNumber) });
    onClick(pageNumber);
  };
  return (
    <div>
      {Array.from({ length: pagesCount }).map((_, index) => (
        <button onClick={() => handlePageClick(index + 1)} key={index}>
          {index + 1}
        </button>
      ))}
    </div>
  );
}

export default Pagination;
