import Link from 'next/link';
import { ICard, IResultItem } from '../../interfaces/interfaces';
import { useDispatch } from 'react-redux';
import { actions } from '../../store/selectedItems/selectedItems.slice';
import useSelectedItems from '../../hooks/useSelectedItems';
import styles from './Card.module.css';
// import { useSearchParams } from 'next/navigation';

function Card({ result }: ICard) {
  const { selectedItems } = useSelectedItems();

  // const searchParams = useSearchParams();

  const dispatch = useDispatch();

  const isSelected =
    selectedItems &&
    selectedItems.some((item: IResultItem) => item.url === result.url);

  const handleClick = () => {
    dispatch(actions.toggleSelectedItems(result));
  };

  const planetId = result.url.split('/')[5];

  return (
    <div className={styles.card}>
      <input
        type="checkbox"
        className="checkbox"
        checked={isSelected}
        onChange={handleClick}
      />
      <Link
        href={{
          pathname: `/planets/${planetId}`,
          // query: { page: `${searchParams.get('page')}` },
        }}
        className={styles.name}
      >
        {result.name}
      </Link>
    </div>
  );
}

export default Card;
