import useTypedSelector from './useTypedSelector';

const useSelectedItems = () => {
  const selectedItems = useTypedSelector((state) => state.selectedItems);
  return { selectedItems };
};

export default useSelectedItems;
