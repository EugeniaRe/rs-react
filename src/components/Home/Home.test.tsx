import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Home from './Home';

vi.mock('../Header/Header', () => ({
  default: () => <header>Header</header>,
}));

vi.mock('../Main/Main', () => ({
  default: () => <main>Main Content</main>,
}));

vi.mock('../Footer/Footer', () => ({
  default: () => <footer>Footer</footer>,
}));

describe('Home Component', () => {
  it('renders Header, Main, Footer and children', () => {
    render(
      <Home>
        <div>Child</div>
      </Home>
    );

    expect(screen.getByText('Header')).toBeInTheDocument();

    expect(screen.getByText('Main Content')).toBeInTheDocument();

    expect(screen.getByText('Footer')).toBeInTheDocument();

    expect(screen.getByText('Child')).toBeInTheDocument();
  });
});
