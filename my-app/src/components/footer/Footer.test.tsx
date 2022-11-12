import { render, screen } from '@testing-library/react';
import Footer from 'components/footer/Footer';

describe('Footer component', () => {
  test('Footer has links', () => {
    render(<Footer />);
    const githubLink = screen.getByRole('link', { name: 'svr-by' });
    expect(githubLink).toBeInTheDocument();
    const rsslink = screen.getByRole('link', { name: 'RSSchool' });
    expect(rsslink).toBeInTheDocument();
    const qtyLinks = screen.queryAllByRole('link').length;
    expect(qtyLinks).toEqual(2);
  });

  test('Footer has info about year of creation', () => {
    render(<Footer />);
    const year = screen.getByText(/2022/i);
    expect(year).toBeInTheDocument();
  });
});
