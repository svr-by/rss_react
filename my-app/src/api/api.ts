import axios from 'axios';
import { IWord } from 'shared/types';

export const serverURL = 'https://rslang-team96.herokuapp.com';

const api = axios.create({ baseURL: serverURL });

export function getWords(group: number, page: number): Promise<IWord[]> {
  return api.get('/words', { params: { group, page } }).then((res) => res.data);
}

export function getWordById(wordId: string): Promise<IWord> {
  return api.get(`/words/${wordId}`).then((res) => res.data);
}

export function getSearchedWords(text: string): Promise<IWord[]> {
  return api
    .get('/filteredWords', {
      params: {
        filter: { word: { $regex: `^${text.toLowerCase()}`, $options: 'i' } },
      },
    })
    .then((res) => res.data);
}

export function getGroupWords(group: number): Promise<IWord[]> {
  return api
    .get('/filteredWords', {
      params: {
        filter: { group },
      },
    })
    .then((res) => res.data);
}
