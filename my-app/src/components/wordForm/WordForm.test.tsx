import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import WordForm from 'components/wordForm/WordForm';

const onSubmitForm = jest.fn();

describe('WordForm component', () => {
  beforeEach(() => {
    render(<WordForm onSubmit={onSubmitForm} />);
  });

  test('renders with textboxes', () => {
    expect(screen.getByLabelText('Word:')).toBeInTheDocument();
    expect(screen.getByLabelText('Word translate:')).toBeInTheDocument();
    expect(screen.getByLabelText('Word transcription:')).toBeInTheDocument();
  });

  test('switches works correctly', () => {
    const exampleSwitch = screen.getByLabelText('', { selector: 'input[name="exampleSwitch"]' });
    const meanSwitch = screen.getByLabelText('', { selector: 'input[name="meanSwitch"]' });
    expect(exampleSwitch).toBeInTheDocument();
    expect(meanSwitch).toBeInTheDocument();

    userEvent.click(exampleSwitch);
    expect(
      screen.getByRole('group', { name: 'Example' }).getElementsByTagName('input')
    ).toHaveLength(2);
    userEvent.click(meanSwitch);
    expect(
      screen.getByRole('group', { name: 'Meaning' }).getElementsByTagName('input')
    ).toHaveLength(2);
  });

  test('renders with list of word difficulties', () => {
    expect(screen.getByRole('option', { name: 'None' })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: 'Hard' })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: 'Learned' })).toBeInTheDocument();
  });

  test('renders with checkbox', () => {
    expect(
      screen.getByRole('checkbox', { name: 'Save the date the word was created' })
    ).toBeInTheDocument();
  });

  test('renders with two file inputs', () => {
    expect(
      screen.getByLabelText('Word image:', { selector: 'input[type="file"]' })
    ).toBeInTheDocument();
    expect(
      screen.getByLabelText('Word audio:', { selector: 'input[type="file"]' })
    ).toBeInTheDocument();
  });
});
