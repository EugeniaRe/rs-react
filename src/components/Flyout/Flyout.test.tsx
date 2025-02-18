import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import '@testing-library/jest-dom';
import Flyout from './Flyout';
import { reducer } from '../../store/selectedItems/selectedItems.slice';

const planetExample = {
  name: 'Tatooine',
  url: 'https://swapi.dev/api/planets/1/',
  climate: 'Arid',
  diameter: '10465',
};

const createMockStore = (initialState = []) => {
  return configureStore({
    reducer: {
      selectedItems: reducer,
    },
    preloadedState: {
      selectedItems: initialState,
    },
  });
};

describe('Card', () => {
  it('shows amount of selected items', () => {
    const selectedItems = [planetExample];
    const store = createMockStore(selectedItems);

    render(
      <Provider store={store}>
        <Flyout />
      </Provider>
    );

    expect(screen.getByText('Selected elements: 1')).toBeInTheDocument();
  });

  //   it('closes flyout', () => {
  //     const selectedItems = [planetExample];
  //     const store = createMockStore(selectedItems);

  //     render(
  //       <Provider store={store}>
  //         <Flyout />
  //       </Provider>
  //     );

  //     const unselectAllButton = screen.getByRole('button', {
  //       name: /unselect all/i,
  //     });
  //     fireEvent.click(unselectAllButton);

  //     const flyout = screen.getByTestId('flyout');
  //     expect(flyout).toHaveClass('closed');
  //   });
});
