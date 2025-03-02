import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import DetailedCard from './DetailedCard';
import { api } from '../../store/api/api';

interface LinkProps {
  children: React.ReactNode;
  href: {
    pathname: string;
    query: string;
  };
}

vi.mock('next/link', () => ({
  default: ({ children, href }: LinkProps) => (
    <a href={typeof href === 'object' ? href.pathname : href}>{children}</a>
  ),
}));

vi.mock('next/navigation', () => ({
  useSearchParams: () => ({
    get: vi.fn().mockImplementation((param: string) => {
      if (param === 'page') return '1';
      return null;
    }),
  }),
}));

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
          <DetailedCard planetId="1" />
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
          <DetailedCard planetId="1" />{' '}
        </MemoryRouter>
      </Provider>
    );
    expect(screen.getByText('Planet:')).toBeInTheDocument();
    expect(screen.getByText('Climate:')).toBeInTheDocument();
    expect(screen.getByText('Diameter:')).toBeInTheDocument();
  });
});
