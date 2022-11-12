export type IWord = {
  id: string;
  group: number;
  page: number;
  word: string;
  image: string | undefined;
  audio: string | undefined;
  audioMeaning: string | undefined;
  audioExample: string | undefined;
  textMeaning: string | undefined;
  textExample: string | undefined;
  transcription: string;
  textExampleTranslate: string | undefined;
  textMeaningTranslate: string | undefined;
  wordTranslate: string;
};

type ExtendedWord = {
  _id: string;
  userWord?: {
    difficulty: string;
    optional?: {
      games?: IGamesInfo;
      date?: string;
    };
  };
};

export type IUserWord = Omit<IWord, 'id'> & ExtendedWord;

export type IGamesInfo = {
  audioCall: IGameStats;
  sprint: IGameStats;
};

export type IGameStats = {
  right: number;
  wrong: number;
};

export type DifficultyValues = 'hard' | 'learned' | '';

export type GroupValues = 0 | 1 | 2 | 3 | 4 | 5;

export type WordsPerPageValues = 10 | 20 | 30 | 40 | 50 | 60;

export type StatusValues = 'loading' | 'error' | 'ok';

export enum SortOrderValues {
  default = 'default',
  wordAsc = 'wordAsc',
  wordDes = 'wordDes',
  translAsc = 'translAsc',
  translDec = 'translDec',
}
