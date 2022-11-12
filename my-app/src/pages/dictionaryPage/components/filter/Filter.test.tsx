import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Filter from 'pages/dictionaryPage/components/filter/Filter';

const onUpdateDifficulty = jest.fn();
const onUpdateSearch = jest.fn();

describe('Filter component', () => {
  beforeEach(() => {
    render(<Filter />);
  });

  test('Search input renders with placeholder', () => {
    expect(screen.getByPlaceholderText('Search word ...')).toBeInTheDocument();
  });

  test('Function onUpdateSearch called correctly', () => {
    userEvent.type(screen.getByRole('searchbox'), 'word');
    expect(onUpdateSearch).toHaveBeenCalledTimes(4);
  });

  test('Function onUpdateDifficulty called correctly', () => {
    const buttons = screen.getAllByRole('button');
    for (let i = 0; i < buttons.length; i++) {
      userEvent.click(buttons[i]);
    }
    expect(onUpdateDifficulty).toHaveBeenCalledTimes(buttons.length);
  });
});
