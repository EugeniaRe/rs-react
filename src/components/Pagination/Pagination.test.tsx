import { fireEvent, render, screen } from '@testing-library/react';
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

  it('calls onClick with right argument when a page button is clicked', () => {
    const onClick = vi.fn();
    render(
      <MemoryRouter>
        <Pagination itemsCount={60} onClick={onClick} />
      </MemoryRouter>
    );
    const secondPageButton = screen.getByRole('button', { name: '2' });
    fireEvent.click(secondPageButton);
    expect(onClick).toHaveBeenCalledWith(2);
  });
});
