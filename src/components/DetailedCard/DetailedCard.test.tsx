import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import '@testing-library/jest-dom';
import DetailedCard from './DetailedCard';
import { api } from '../../store/api/api';

// const planetExample = {
//   id: '1',
//   name: 'Tatooine',
//   climate: 'Arid',
//   diameter: '10465',
// };

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
});
