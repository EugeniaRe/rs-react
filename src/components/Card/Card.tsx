import { Link } from 'react-router-dom';
import { IResultItem } from '../../interfaces/interfaces';
import { useDispatch } from 'react-redux';
import { actions } from '../../store/selectedItems/selectedItems.slice';
import useSelectedItems from '../../hooks/useSelectedItems';

export interface ICard {
  result: IResultItem;
}

function Card({ result }: ICard) {
  const { selectedItems } = useSelectedItems();

  const dispatch = useDispatch();

  const isSelected =
    selectedItems &&
    selectedItems.some((item: IResultItem) => item.url === result.url);

  const handleClick = () => {
    dispatch(actions.toggleSelectedItems(result));
    console.log(selectedItems);
  };

  const planetId = result.url.split('/')[5];

  return (
    <div>
      <input
        type="checkbox"
        className="checkbox"
        checked={isSelected}
        onChange={handleClick}
      />
      <Link to={`items/${planetId}`} className="link">
        {result.name}
      </Link>
    </div>
  );
}

export default Card;
