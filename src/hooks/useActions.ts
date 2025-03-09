import { bindActionCreators } from '@reduxjs/toolkit';
import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { actions } from '../store/selectedItems/selectedItems.slice';

const rootActions = {
  ...actions,
};

const useActions = () => {
  const dispatch = useDispatch();

  return useMemo(() => {
    bindActionCreators(rootActions, dispatch);
  }, [dispatch]);
};

export default useActions;
