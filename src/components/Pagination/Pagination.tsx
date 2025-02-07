interface PaginationProps {
  itemsCount: number;
}

const ITEMS_FOR_PAGE = 10;

function Pagination({ itemsCount }: PaginationProps) {
  const pagesCount = Math.ceil(itemsCount / ITEMS_FOR_PAGE);
  return (
    <div>
      {Array.from({ length: pagesCount }).map((_, index) => (
        <button key={index}>{index + 1}</button>
      ))}
    </div>
  );
}

export default Pagination;
