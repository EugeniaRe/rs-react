import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer Component', () => {
  it('renders the current year', () => {
    const currentYear = new Date().getFullYear();
    render(<Footer />);

    const footerElement = screen.getByText(currentYear.toString());
    expect(footerElement).toBeInTheDocument();
  });
});
