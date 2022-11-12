import { IWord, SortOrderValues } from 'shared/types';

export function checkFilesPath(serverUrl: string | undefined, words: IWord[]) {
  return serverUrl
    ? words.map((word) => ({
        ...word,
        ['image']: `${serverUrl}/${word.image}`,
        ['audio']: `${serverUrl}/${word.audio}`,
      }))
    : [...words];
}

export function checkSortOrder(sortOrder: SortOrderValues, words: IWord[]) {
  if (sortOrder === SortOrderValues.wordAsc) {
    words.sort((wordObjOne, wordObjTwo) => wordObjOne.word.localeCompare(wordObjTwo.word));
  }
  if (sortOrder === SortOrderValues.wordDes) {
    words.sort((wordObjOne, wordObjTwo) => wordObjTwo.word.localeCompare(wordObjOne.word));
  }
  if (sortOrder === SortOrderValues.translAsc) {
    words.sort((wordObjOne, wordObjTwo) =>
      wordObjOne.wordTranslate.localeCompare(wordObjTwo.wordTranslate)
    );
  }
  if (sortOrder === SortOrderValues.translDec) {
    words.sort((wordObjOne, wordObjTwo) =>
      wordObjTwo.wordTranslate.localeCompare(wordObjOne.wordTranslate)
    );
  }
  return words;
}

export function createListForPage(word: IWord[], page: number, wordsPerPage: number) {
  const startPage = (page - 1) * wordsPerPage;
  const endPage = startPage + wordsPerPage;
  return word.slice(startPage, endPage);
}
