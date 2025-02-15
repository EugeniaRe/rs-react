import { useDispatch } from 'react-redux';
import useSelectedItems from '../../hooks/useSelectedItems';
import { actions } from '../../store/selectedItems/selectedItems.slice';
import { useEffect, useState } from 'react';
import './Flyout.css';

function Flyout() {
  const [isFlyoutOpen, setIsFlyoutOpen] = useState(false);
  const { selectedItems } = useSelectedItems();

  const dispatch = useDispatch();

  const handleUnselectAll = () => {
    dispatch(actions.unselectAll());
  };
  useEffect(() => {
    if (selectedItems.length > 0) {
      setIsFlyoutOpen(true);
    } else {
      setIsFlyoutOpen(false);
    }
  }, [selectedItems.length]);
  return (
    <div className={`flyout ${isFlyoutOpen ? 'flyout-open' : 'flyout-closed'}`}>
      <div>Selected elements: {selectedItems.length}</div>
      <button onClick={handleUnselectAll}>Unselect all</button>
      <button>Download</button>
    </div>
  );
}

export default Flyout;
