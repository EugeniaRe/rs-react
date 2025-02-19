import { fireEvent, render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import '@testing-library/jest-dom';
import SearchSection from './SearchSection';

describe('SearchSection', () => {
  it('renders the search input and button', () => {
    const onSearch = vi.fn();
    render(<SearchSection onSearch={onSearch} />);
    expect(screen.getByPlaceholderText(/search/i)).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('calls onSearch with the value typed in the input', () => {
    const onSearch = vi.fn();

    render(<SearchSection onSearch={onSearch} />);

    const input = screen.getByPlaceholderText(/search/i);
    const button = screen.getByRole('button');
    fireEvent.change(input, { target: { value: 'y' } });
    fireEvent.click(button);
    expect(onSearch).toHaveBeenCalledWith('y');
  });
});
