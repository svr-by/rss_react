import { render, screen } from '@testing-library/react';
import AboutPage from 'pages/aboutPage/AboutPage';

describe('AboutPage component', () => {
  test('AboutPage renders with title', () => {
    render(<AboutPage />);

    expect(screen.getByRole('heading')).toHaveTextContent(/about us/i);
  });
});
