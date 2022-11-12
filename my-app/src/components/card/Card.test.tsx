import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Card from 'components/card/Card';
import { generateGamesStats } from 'components/card/cardUtils';

const changeWordDifficulty = jest.fn();

const word = {
  _id: '5e9f5ee35eb9e72bc21af4b6',
  group: 0,
  page: 1,
  word: 'chemical',
  image: 'files/02_0024.jpg',
  audio: 'files/02_0024.mp3',
  audioMeaning: 'files/02_0024_meaning.mp3',
  audioExample: 'files/02_0024_example.mp3',
  textMeaning: 'A <i>chemical</i> is something that scientists use in chemistry.',
  textExample: 'The scientist mixed the <b>chemicals</b>.',
  transcription: '[kémikəl]',
  textExampleTranslate: 'Ученый смешал химикаты',
  textMeaningTranslate: 'Химическое вещество - это то, что ученые используют в химии',
  wordTranslate: 'химический',
  userWord: {
    difficulty: 'learned',
    optional: {
      games: {
        audioCall: {
          right: 0,
          wrong: 1,
        },
        sprint: {
          right: 7,
          wrong: 3,
        },
      },
    },
  },
};

describe('Card component', () => {
  beforeEach(() => {
    render(
      <Card
        word={word}
        fullView={true}
        isUserLogged={true}
        onChangeDifficulty={changeWordDifficulty}
      />
    );
  });

  test('Card renders with image', () => {
    expect(screen.getByRole('img')).toBeInTheDocument();
  });

  test('Card renders with word, translate and transcription', () => {
    expect(screen.getByRole('heading')).toHaveTextContent(word.word);
    expect(screen.getByRole('heading')).toHaveTextContent(word.wordTranslate);
    expect(screen.getByRole('heading')).toHaveTextContent(word.transcription);
  });

  test('Card renders with games stats', () => {
    const gamesStats = generateGamesStats(word.userWord.optional.games);
    expect(gamesStats).toEqual('Аудиовызов: 0|1, Спринт: 7|3');
    expect(screen.getByText(gamesStats)).toBeInTheDocument();
  });

  test('Function changeWordDifficulty called correctly', () => {
    userEvent.click(screen.getByRole('button', { name: 'Add to hard' }));
    userEvent.click(screen.getByRole('button', { name: 'Remove from learned' }));
    expect(changeWordDifficulty).toHaveBeenCalledTimes(2);
  });
});
