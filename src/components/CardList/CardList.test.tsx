import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
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

describe('CardList Component', () => {
  const setData = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders loading', () => {
    (useGetPlanetsQuery as vi.Mock).mockReturnValue({
      data: { results: [], count: 0 },
      isLoading: true,
    });
    render(<CardList searchTerm="test" activePage={1} setData={setData} />);
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
    render(<CardList searchTerm="" activePage={1} setData={setData} />);
    expect(screen.getByText('Tatooine')).toBeInTheDocument();
    expect(screen.getByText('Alderaan')).toBeInTheDocument();
  });

  it("renders 'Items Not Found' when no data is returned", () => {
    (useGetPlanetsQuery as vi.Mock).mockReturnValue({
      data: null,
      isLoading: false,
    });
    render(<CardList searchTerm="qqqq" activePage={1} setData={setData} />);
    expect(screen.getByText('Items Not Found')).toBeInTheDocument();
  });
});
