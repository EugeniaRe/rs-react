import '@testing-library/jest-dom';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import Main from './Main';
import useLocalStorage from '../../hooks/useLocalStorage';
import useThemeContext from '../../hooks/useThemeContext';
import { reducer } from '../../store/selectedItems/selectedItems.slice';
import { IResultData } from '../../interfaces/interfaces';

vi.mock('../../hooks/useLocalStorage', () => ({
  default: vi.fn(),
}));

vi.mock('../../hooks/useThemeContext', () => ({
  default: vi.fn(),
}));

const createMockItemsStore = () => {
  return configureStore({
    reducer: {
      selectedItems: reducer,
    },
  });
};

vi.mock('../../components/CardList/CardList', () => {
  return {
    default: (props: {
      searchTerm: string;
      activePage: number;
      setData: (data: IResultData) => void;
    }) => <div>{props.searchTerm + props.activePage + props.setData}</div>,
  };
});

const planetExample = {
  name: 'Tatooine',
  url: 'https://swapi.dev/api/planets/1/',
  climate: 'Arid',
  diameter: '10465',
};

const selectedItems = [planetExample];
const itemsStore = createMockItemsStore(selectedItems);

const renderMain = () => {
  return render(
    <MemoryRouter>
      <Provider store={itemsStore}>
        <Main />
      </Provider>
    </MemoryRouter>
  );
};
describe('Main', () => {
  const mockToggleTheme = vi.fn();
  const mockSetSearchTerm = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();

    (useThemeContext as vi.Mock).mockReturnValue({
      theme: 'light',
      toggleTheme: mockToggleTheme,
    });

    (useLocalStorage as vi.Mock).mockReturnValue(['', mockSetSearchTerm]);
  });

  it('renders title', () => {
    renderMain();

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Search for a planet'
    );
  });
});
