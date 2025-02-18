import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { vi } from 'vitest';
import Pagination from './Pagination';

describe('Pagination', () => {
  it('renders the correct number of page buttons', () => {
    const onClick = vi.fn();
    render(
      <MemoryRouter>
        <Pagination itemsCount={60} onClick={onClick} />
      </MemoryRouter>
    );
    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(6);
  });
});
