import { useEffect } from 'react';
import useLocalStorage from '../../hooks/useLocalStorage';
import useThemeContext from '../../hooks/useThemeContext';
import Pagination from '../Pagination/Pagination';
import SearchSection from '../SearchSection/SearchSection';
import Flyout from '../Flyout/Flyout';
import CardList from '../CardList/CardList';
import styles from './Main.module.css';
// import usePage from '../../hooks/usePage';

//TODO: refactor code
function Main() {
  const { theme } = useThemeContext();

  const [searchTerm, setSearchTerm] = useLocalStorage('searchTerm');

  // const [queryTerm, setQueryTerm] = useState(searchTerm);

  // const router = useRouter();
  // const pathname = usePathname();
  // const searchParams = useSearchParams();

  // const [activePage, setActivePage] = useState(1);
  // // const pageParam = Number(searchParams.get('page') ?? '1');

  // const pageParam = searchParams.get('page')
  //   ? !isNaN(Number(searchParams.get('page')))
  //     ? Number(searchParams.get('page'))
  //     : 1
  //   : 1;
  // console.log('pageParam', searchParams.get('page'));

  // const { data } = useGetPlanetsQuery({ searchTerm: searchTerm, page: 1 });

  // const pagesCount = data ? Math.ceil(data.count / ITEMS_FOR_PAGE) : 0;

  // const [activePage, setActivePage] = useState(0);

  // useEffect(() => {
  //   setActivePage(pageParam > pagesCount ? 1 : pageParam);
  // }, [pagesCount]);

  // const [activePage, setActivePage] = usePage(searchTerm);
  // console.log('activePage', activePage);

  // useEffect(() => {
  //   if (router.query.page) {
  //     setActivePage(Number(router.query.page));
  //   }
  // }, [router.query.page]);

  useEffect(() => {
    handleSearch(searchTerm);
  }, [searchTerm]);

  // const navigateToPage = (page: number) => {
  //   // const params = new URLSearchParams(searchParams.toString());
  //   // params.set('page', page.toString());

  //   // router.push(`${pathname}?${params.toString()}`);
  //   router.push(
  //     `${pathname}?${createQueryString(searchParams, 'page', page.toString())}`
  //   );
  //   setActivePage(page);
  // };

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    // setQueryTerm(searchTerm);

    // setActivePage(1);
  };

  return (
    <>
      <div
        className={`${styles.main_page_wrapper} ${theme === 'dark' ? 'dark' : 'light'}`}
      >
        <div className={`${styles.main_page}`}>
          <h1>Search for a planet</h1>

          <p>
            A Planet resource is a large mass, planet or planetoid in the Star
            Wars Universe, at the time of 0 ABY
          </p>
          <SearchSection onSearch={handleSearch} />
          <CardList searchTerm={searchTerm} />
          <Pagination searchTerm={searchTerm} />
          <Flyout />
        </div>
      </div>
    </>
  );
}

export default Main;
