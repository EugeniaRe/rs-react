import { useDispatch } from 'react-redux';
import useSelectedItems from '../../hooks/useSelectedItems';
import { actions } from '../../store/selectedItems/selectedItems.slice';
import { useEffect, useState } from 'react';
import styles from './Flyout.module.css';

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
  const downloadCSV = () => {
    const header = 'Name,URL,Climate,Diameter';
    const rows = selectedItems.map(
      (item) =>
        `"${item.name}","${item.url}","climate: ${item.climate}","diameter: ${item.diameter}"`
    );
    const csvContent = [header, ...rows].join('\n');

    const fileName =
      selectedItems.length === 1
        ? '1_planet.csv'
        : `${selectedItems.length}_planets.csv`;

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', fileName);
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div
      className={`${styles.flyout} ${isFlyoutOpen ? styles.open : styles.closed}`}
      data-testid="flyout"
    >
      <div>Selected elements: {selectedItems.length}</div>
      <button onClick={handleUnselectAll}>Unselect all</button>
      <button onClick={downloadCSV}>Download</button>
    </div>
  );
}

export default Flyout;
