import '@testing-library/jest-dom';
import { describe, it, expect, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import Flyout from './Flyout';
import { reducer } from '../../store/selectedItems/selectedItems.slice';

const planetExample = {
  name: 'Tatooine',
  url: 'https://swapi.dev/api/planets/1/',
  climate: 'Arid',
  diameter: '10465',
};

global.URL.createObjectURL = vi.fn();

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

describe('Flyout', () => {
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

  it('sets selected elements to 0 by clicking Unselect all', () => {
    const selectedItems = [planetExample];
    const store = createMockStore(selectedItems);

    render(
      <Provider store={store}>
        <Flyout />
      </Provider>
    );

    fireEvent.click(screen.getByRole('button', { name: /unselect all/i }));

    expect(screen.getByText('Selected elements: 0')).toBeInTheDocument();
  });

  it('renders download button', () => {
    const selectedItems = [planetExample];
    const store = createMockStore(selectedItems);

    render(
      <Provider store={store}>
        <Flyout />
      </Provider>
    );

    expect(
      screen.getByRole('button', { name: /download/i })
    ).toBeInTheDocument();
  });
});
