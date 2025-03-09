import { useEffect, useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { ITEMS_FOR_PAGE } from '../../constants';
import { useGetPlanetsQuery } from '../../store/api/api';
import createQueryString from '../../utils/createQueryString';
import styles from './Pagination.module.css';

interface PaginationProps {
  searchTerm: string;
}

function Pagination({ searchTerm }: PaginationProps) {
  const { data } = useGetPlanetsQuery({
    searchTerm: searchTerm,
  });

  const itemsCount = data?.count ?? 0;

  const pagesCount = Math.ceil(itemsCount / ITEMS_FOR_PAGE);

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const pageParam = searchParams.get('page')
    ? !isNaN(Number(searchParams.get('page')))
      ? Number(searchParams.get('page'))
      : 1
    : 1;

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setCurrentPage(pageParam > pagesCount ? 1 : pageParam);
  }, [pagesCount, pageParam]);

  const handlePageClick = (pageNumber: number) => {
    router.push(
      `${pathname}?${createQueryString(searchParams, 'page', pageNumber.toString())}`
    );
  };
  return (
    <div>
      {Array.from({ length: pagesCount }).map((_, index) => (
        <button
          className={`${styles.btn} ${currentPage === index + 1 && styles.active}`}
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
