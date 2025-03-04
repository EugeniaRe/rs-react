import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useGetPlanetsQuery } from '../store/api/api';
import { ITEMS_FOR_PAGE } from '../constants';

const usePage = (searchTerm: string, value?: number) => {
  const searchParams = useSearchParams();

  const pageParam = Number(searchParams.get('page') ?? '1');
  console.log('pageParam', pageParam);
  const { data } = useGetPlanetsQuery({ searchTerm: searchTerm, page: 1 });

  const pagesCount = data ? Math.ceil(data.count / ITEMS_FOR_PAGE) : 0;

  console.log('pagesCount', pagesCount);

  const [activePage, setActivePage] = useState(value);
  useEffect(() => {
    setActivePage(pageParam > pagesCount ? 1 : pageParam);
  }, [pagesCount]);

  //   useEffect(() => {
  //     localStorage.setItem(key, storedValue);
  //   }, [key, storedValue]);
  console.log('activePage', activePage);
  return [activePage, setActivePage];
};

export default usePage;
