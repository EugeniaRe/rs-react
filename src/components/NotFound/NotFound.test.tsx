import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import NotFound from './NotFound';

describe('NotFound', () => {
  it('renders link to home page', () => {
    render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>
    );
    expect(
      screen.getByRole('link', { name: /back to home/i })
    ).toBeInTheDocument();
  });
});
