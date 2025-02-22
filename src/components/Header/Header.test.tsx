import '@testing-library/jest-dom';
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import useThemeContext from '../../hooks/useThemeContext';
import Header from './Header';

vi.mock('../../hooks/useThemeContext', () => ({
  default: vi.fn(),
}));

describe('Header', () => {
  const mockToggleTheme = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();

    (useThemeContext as vi.Mock).mockReturnValue({
      theme: 'light',
      toggleTheme: mockToggleTheme,
    });
  });

  it('renders button to switch theme', () => {
    render(<Header />);
    expect(
      screen.getByRole('button', { name: /Switch to/i })
    ).toBeInTheDocument();
  });

  it('toggles theme when clicking the switch theme button', () => {
    render(<Header />);
    const switchButton = screen.getByRole('button', { name: /Switch to/i });
    fireEvent.click(switchButton);

    expect(mockToggleTheme).toHaveBeenCalled();
  });
});
