import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import DetailedCard from './DetailedCard';
import { api } from '../../store/api/api';

const createMockStore = () => {
  return configureStore({
    reducer: {
      [api.reducerPath]: api.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(api.middleware),
  });
};

describe('DetailedCard', () => {
  it('renders close button', () => {
    const store = createMockStore();
    render(
      <Provider store={store}>
        <MemoryRouter>
          <DetailedCard />
        </MemoryRouter>
      </Provider>
    );
    expect(screen.getByRole('button', { name: /close/i })).toBeInTheDocument();
  });

  it('renders titles for name, climate and diameter', () => {
    const store = createMockStore();
    render(
      <Provider store={store}>
        <MemoryRouter>
          <DetailedCard />
        </MemoryRouter>
      </Provider>
    );
    expect(screen.getByText('Planet:')).toBeInTheDocument();
    expect(screen.getByText('Climate:')).toBeInTheDocument();
    expect(screen.getByText('Diameter:')).toBeInTheDocument();
  });
});
