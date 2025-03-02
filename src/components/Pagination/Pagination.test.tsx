import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import Pagination from './Pagination';
import { useGetPlanetsQuery } from '../../store/api/api';

vi.mock('../../store/api/api', () => ({
  useGetPlanetsQuery: vi.fn(),
}));

describe('Pagination', () => {
  const mockOnPageClick = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders the correct number of page buttons', () => {
    useGetPlanetsQuery.mockReturnValue({
      data: { count: 60 },
    });

    render(<Pagination searchTerm="" onPageClick={mockOnPageClick} />);
    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(6);
  });

  it('calls onClick with right argument when a page button is clicked', () => {
    useGetPlanetsQuery.mockReturnValue({
      data: { count: 60 },
    });
    render(<Pagination searchTerm="" onPageClick={mockOnPageClick} />);

    const secondPageButton = screen.getByRole('button', { name: '2' });
    fireEvent.click(secondPageButton);

    expect(mockOnPageClick).toHaveBeenCalled();
  });
});
