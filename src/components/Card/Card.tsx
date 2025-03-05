import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { ICard, IResultItem } from '../../interfaces/interfaces';
import { actions } from '../../store/selectedItems/selectedItems.slice';
import useSelectedItems from '../../hooks/useSelectedItems';
import styles from './Card.module.css';

function Card({ result }: ICard) {
  const { selectedItems } = useSelectedItems();

  const dispatch = useDispatch();

  const isSelected =
    selectedItems &&
    selectedItems.some((item: IResultItem) => item.url === result.url);

  const handleClick = () => {
    dispatch(actions.toggleSelectedItems(result));
  };

  const planetId = result.url.split('/')[5];

  const searchParams = useSearchParams();

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
          query: { page: `${searchParams.get('page') ?? 1}` },
        }}
        className={styles.name}
      >
        {result.name}
      </Link>
    </div>
  );
}

export default Card;
