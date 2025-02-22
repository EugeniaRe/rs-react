import '@testing-library/jest-dom';
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import Card from './Card';
import { reducer } from '../../store/selectedItems/selectedItems.slice';

const resultExample = {
  name: 'Tatooine',
  url: 'https://swapi.dev/api/planets/1/',
};

const createMockStore = (initialState = [{ name: '', url: '' }]) => {
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
  it('renders card with getting result', () => {
    const store = createMockStore();

    render(
      <Provider store={store}>
        <MemoryRouter>
          <Card result={resultExample} />
        </MemoryRouter>
      </Provider>
    );
    expect(screen.getByText('Tatooine')).toBeInTheDocument();
  });

  it('renders card with checkbox', () => {
    const store = createMockStore();
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Card result={resultExample} />
        </MemoryRouter>
      </Provider>
    );
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  });

  it('calls dispatch when checkbox is clicked', async () => {
    const store = createMockStore();
    const mockDispatch = vi.spyOn(store, 'dispatch');

    render(
      <Provider store={store}>
        <MemoryRouter>
          <Card result={resultExample} />
        </MemoryRouter>
      </Provider>
    );

    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);

    expect(mockDispatch).toHaveBeenCalled();
  });

  it('checkbox is checked if item is in selected items', () => {
    const selectedItems = [resultExample];
    const store = createMockStore(selectedItems);

    render(
      <Provider store={store}>
        <MemoryRouter>
          <Card result={resultExample} />
        </MemoryRouter>
      </Provider>
    );

    const checkbox: HTMLInputElement = screen.getByRole('checkbox');

    expect(checkbox.checked).toBe(true);
  });
});
