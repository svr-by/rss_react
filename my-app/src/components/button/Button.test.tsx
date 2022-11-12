import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from 'components/button/Button';

const handleClick = jest.fn();

describe('Card component', () => {
  beforeEach(() => {
    render(<Button onClick={handleClick}>All words</Button>);
  });

  test('Button renders with inner text', () => {
    expect(screen.getByRole('button', { name: 'All words' })).toBeInTheDocument();
    expect(screen.getByText('All words')).toBeInTheDocument();
  });

  test('Function handleClick called correctly', () => {
    userEvent.click(screen.getByRole('button', { name: 'All words' }));
    userEvent.click(screen.getByRole('button', { name: 'All words' }));
    expect(handleClick).toHaveBeenCalledTimes(2);
  });
});
