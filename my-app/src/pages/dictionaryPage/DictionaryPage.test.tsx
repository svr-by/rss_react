import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import { setupServer } from 'msw/node';
import { getWordsHandler, searchWordHandler } from './mocks/handlers';
import DictionaryPage from 'pages/dictionaryPage/DictionaryPage';

const server = setupServer(getWordsHandler);

describe('DictionaryPage component', () => {
  beforeAll(() => {
    server.listen();
  });

  beforeEach(() => {
    act(() => {
      render(<DictionaryPage />);
    });
  });

  afterEach(() => {
    server.resetHandlers();
  });

  afterAll(() => {
    server.close();
  });

  test('renders with title', () => {
    expect(screen.getByRole('heading')).toHaveTextContent(/dictionary/i);
  });

  test('renders with levels', async () => {
    expect(await screen.findByText('A1')).toBeInTheDocument();
    expect(await screen.findByText('A2')).toBeInTheDocument();
    expect(await screen.findByText('B1')).toBeInTheDocument();
    expect(await screen.findByText('B2')).toBeInTheDocument();
    expect(await screen.findByText('C1')).toBeInTheDocument();
    expect(await screen.findByText('C2')).toBeInTheDocument();
  });

  test('renders with all cards', async () => {
    const list = await screen.findByTestId('list');
    expect(list.children).toHaveLength(3);
    expect(await screen.findByText('alcohol')).toBeInTheDocument();
    expect(await screen.findByText('boat')).toBeInTheDocument();
    expect(await screen.findByText('camera')).toBeInTheDocument();
  });

  test('sorting by word works correctly', () => {
    act(async () => {
      const list = await screen.findByTestId('list');
      userEvent.click(screen.getByText(/sort by word/i));
      expect(list.children[0]).toHaveTextContent('alcohol');
      expect(list.children[1]).toHaveTextContent('boat');
      expect(list.children[2]).toHaveTextContent('camera');
    });
  });

  test('sorting by translate works correctly', () => {
    act(async () => {
      const list = await screen.findByTestId('list');
      userEvent.click(screen.getByText(/sort by translate/i));
      expect(list.children[0]).toHaveTextContent('алкоголь');
      expect(list.children[1]).toHaveTextContent('камера');
      expect(list.children[2]).toHaveTextContent('лодка');
    });
  });

  test('searchbox works correctly', () => {
    act(async () => {
      server.use(searchWordHandler);
      const searchbox = screen.getByRole('searchbox');
      userEvent.type(searchbox, 'boat{enter}');
      const list = await screen.findByTestId('list');
      expect(list.children).toHaveLength(1);
      expect(await screen.findByText('boat')).toBeInTheDocument();
    });
  });
});
