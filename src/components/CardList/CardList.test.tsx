import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import { useSearchParams } from 'next/navigation';
import { useGetPlanetsQuery } from '../../store/api/api';
import CardList from '../../components/CardList/CardList';

vi.mock('../../store/api/api', () => ({
  useGetPlanetsQuery: vi.fn(),
}));

vi.mock('../../components/Card/Card', () => {
  return {
    default: (props: { result: { name: string } }) => (
      <div>{props.result.name}</div>
    ),
  };
});

vi.mock('next/navigation', () => ({
  useSearchParams: vi.fn(),
}));

describe('CardList Component', () => {
  const mockSearchParams = {
    get: vi.fn(),
  };

  beforeEach(() => {
    vi.clearAllMocks();

    useSearchParams.mockReturnValue(mockSearchParams);
  });

  it('renders loading', () => {
    (useGetPlanetsQuery as vi.Mock).mockReturnValue({
      data: { results: [], count: 0 },
      isLoading: true,
    });
    render(<CardList searchTerm="test" />);
    expect(screen.getByTestId('loading')).toBeInTheDocument();
  });

  it('renders cards', () => {
    const mockData = {
      results: [
        { name: 'Tatooine', url: 'https://swapi.dev/api/planets/1/' },
        { name: 'Alderaan', url: 'https://swapi.dev/api/planets/2/' },
      ],
    };
    (useGetPlanetsQuery as vi.Mock).mockReturnValue({
      data: mockData,
      isLoading: false,
    });
    render(<CardList searchTerm="" />);
    expect(screen.getByText('Tatooine')).toBeInTheDocument();
    expect(screen.getByText('Alderaan')).toBeInTheDocument();
  });

  it("renders 'Items Not Found' when no data is returned", () => {
    (useGetPlanetsQuery as vi.Mock).mockReturnValue({
      data: null,
      isLoading: false,
    });
    render(<CardList searchTerm="qqqq" />);
    expect(screen.getByText('Items Not Found')).toBeInTheDocument();
  });

  it('renders cards when page param is missing', () => {
    mockSearchParams.get.mockImplementation((param) => {
      if (param === 'page') return null;
      return null;
    });

    const mockData = {
      results: [
        { name: 'Tatooine', url: 'https://swapi.dev/api/planets/1/' },
        { name: 'Alderaan', url: 'https://swapi.dev/api/planets/2/' },
      ],
    };
    (useGetPlanetsQuery as vi.Mock).mockReturnValue({
      data: mockData,
      isLoading: false,
    });
    render(<CardList searchTerm="test" />);
    expect(screen.getByText('Alderaan')).toBeInTheDocument();
  });

  it('renders cards when page param is not a number', () => {
    mockSearchParams.get.mockImplementation((param) => {
      if (param === 'page') return 'test';
      return null;
    });

    const mockData = {
      results: [
        { name: 'Tatooine', url: 'https://swapi.dev/api/planets/1/' },
        { name: 'Alderaan', url: 'https://swapi.dev/api/planets/2/' },
      ],
    };
    (useGetPlanetsQuery as vi.Mock).mockReturnValue({
      data: mockData,
      isLoading: false,
    });
    render(<CardList searchTerm="test" />);
    expect(screen.getByText('Alderaan')).toBeInTheDocument();
  });

  it('renders cards when page param is a number', () => {
    mockSearchParams.get.mockImplementation((param) => {
      if (param === 'page') return '1';
      return null;
    });

    const mockData = {
      results: [
        { name: 'Tatooine', url: 'https://swapi.dev/api/planets/1/' },
        { name: 'Alderaan', url: 'https://swapi.dev/api/planets/2/' },
      ],
    };
    (useGetPlanetsQuery as vi.Mock).mockReturnValue({
      data: mockData,
      isLoading: false,
    });
    render(<CardList searchTerm="test" />);
    expect(screen.getByText('Alderaan')).toBeInTheDocument();
  });
});
