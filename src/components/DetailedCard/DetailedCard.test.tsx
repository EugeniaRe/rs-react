import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { useSearchParams } from 'next/navigation';
import DetailedCard from './DetailedCard';
import { useGetPlanetQuery } from '../../store/api/api';

vi.mock('next/navigation', () => ({
  useSearchParams: vi.fn(),
}));

vi.mock('../../store/api/api', () => ({
  useGetPlanetQuery: vi.fn(),
}));

vi.mock('next/link', () => ({
  default: vi.fn(({ children, href }) => (
    <a href={JSON.stringify(href)}>{children}</a>
  )),
}));

describe('DetailedCard', () => {
  const mockPlanetData = {
    name: 'Tatooine',
    climate: 'Arid',
    diameter: '10465',
  };

  beforeEach(() => {
    vi.clearAllMocks();
    // Set default mock for useSearchParams
    vi.mocked(useSearchParams).mockReturnValue(new URLSearchParams('page=1'));
  });

  it('renders loading when data is loading', async () => {
    useGetPlanetQuery.mockReturnValue({
      data: undefined,
      isLoading: true,
    });

    render(<DetailedCard planetId="1" />);

    expect(screen.getByTestId('loading')).toBeInTheDocument();
  });

  it('renders planet data when query is successful', () => {
    useGetPlanetQuery.mockReturnValue({
      data: mockPlanetData,
      isLoading: false,
    });

    render(<DetailedCard planetId="1" />);

    expect(screen.getByText('Planet: Tatooine')).toBeInTheDocument();
    expect(screen.getByText('Climate: Arid')).toBeInTheDocument();
    expect(screen.getByText('Diameter: 10465')).toBeInTheDocument();
  });

  it('renders close button with correct link when page param exists', async () => {
    useGetPlanetQuery.mockReturnValue({
      data: mockPlanetData,
      isLoading: false,
    });

    render(<DetailedCard planetId="1" />);

    const linkElement = screen.getByRole('link', { name: 'Close' });
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute(
      'href',
      '{"pathname":"/","query":{"page":"1"}}'
    );
  });

  it('renders close button with correct link when page param does not exist', () => {
    useGetPlanetQuery.mockReturnValue({
      data: mockPlanetData,
      isLoading: false,
    });
    vi.mocked(useSearchParams).mockReturnValue(new URLSearchParams(''));

    render(<DetailedCard planetId="1" />);

    const linkElement = screen.getByRole('link', { name: 'Close' });
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute(
      'href',
      '{"pathname":"/","query":{"page":"1"}}'
    );
  });
});
