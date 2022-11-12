import { IWord, IUserWord } from 'shared/types';

export function searchWords(words: IWord[], text: string) {
  if (text.length === 0) return words;
  return words.filter((wordObj) => wordObj.word.toLowerCase().includes(text.toLowerCase()));
}

export function filterWords(words: IUserWord[], filter: string) {
  if (filter.length === 0) return words;
  return words.filter((wordObj) => wordObj.userWord?.difficulty === filter);
}
