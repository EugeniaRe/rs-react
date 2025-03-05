import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import Pagination from './Pagination';
import { useGetPlanetsQuery } from '../../store/api/api';

vi.mock('../../store/api/api', () => ({
  useGetPlanetsQuery: vi.fn(),
}));

vi.mock('next/navigation', () => ({
  useRouter: vi.fn(),
  usePathname: vi.fn(),
  useSearchParams: vi.fn(),
}));

describe('Pagination', () => {
  const mockRouter = {
    push: vi.fn(),
  };

  const mockSearchParams = {
    get: vi.fn(),
  };

  vi.mock('../../utils/createQueryString', () => ({
    default: vi.fn((params, key, value) => `${key}=${value}`),
  }));

  beforeEach(() => {
    vi.clearAllMocks();
    useRouter.mockReturnValue(mockRouter);
    usePathname.mockReturnValue('/');
    useSearchParams.mockReturnValue(mockSearchParams);

    mockSearchParams.get.mockImplementation((param) => {
      if (param === 'page') return '1';
      return null;
    });
  });

  it('renders the correct number of page buttons', () => {
    useGetPlanetsQuery.mockReturnValue({
      data: { count: 60 },
    });

    render(<Pagination searchTerm="" />);
    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(6);
  });

  it('does not render pagination buttons for empty data', () => {
    useGetPlanetsQuery.mockReturnValue({
      data: { count: 0 },
    });

    render(<Pagination searchTerm="" />);

    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });

  it('renders  when page param is missing', () => {
    useGetPlanetsQuery.mockReturnValue({
      data: { count: 60 },
    });

    mockSearchParams.get.mockImplementation((param) => {
      if (param === 'page') return null;
      return null;
    });

    render(<Pagination searchTerm="" />);
    expect(screen.getByText('1')).toBeInTheDocument();
  });

  it('renders when page param is not a number', () => {
    useGetPlanetsQuery.mockReturnValue({
      data: { count: 60 },
    });

    mockSearchParams.get.mockImplementation((param) => {
      if (param === 'page') return 'test';
      return null;
    });

    render(<Pagination searchTerm="" />);
    expect(screen.getByText('1')).toBeInTheDocument();
  });

  it('renders when page param is a number', () => {
    useGetPlanetsQuery.mockReturnValue({
      data: { count: 60 },
    });

    mockSearchParams.get.mockImplementation((param) => {
      if (param === 'page') return '1';
      return null;
    });

    render(<Pagination searchTerm="" />);
    expect(screen.getByText('1')).toBeInTheDocument();
  });

  it('navigates to the correct page when a button is clicked', () => {
    useGetPlanetsQuery.mockReturnValue({
      data: { count: 60 },
    });

    render(<Pagination searchTerm="" />);

    fireEvent.click(screen.getByText('3'));

    expect(mockRouter.push).toHaveBeenCalledWith('/?page=3');
  });
});
