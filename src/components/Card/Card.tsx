import { Link } from 'react-router-dom';
import { ICard, IResultItem } from '../../interfaces/interfaces';
import { useDispatch } from 'react-redux';
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

  return (
    <Link to={`items/${planetId}`} className={styles.card}>
      <input
        type="checkbox"
        className="checkbox"
        checked={isSelected}
        onChange={handleClick}
      />
      <span>{result.name}</span>
    </Link>
  );
}

export default Card;
