import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUserWord, DifficultyValues } from 'shared/types';

interface IAddWordPayload {
  word: IUserWord;
}

interface IChangeDifPayload {
  id: string;
  difficulty: DifficultyValues;
}

interface IFormState {
  words: IUserWord[];
}

const initialState: IFormState = {
  words: [],
};

function changeDifficulty(word: IUserWord, payload: { id: string; difficulty: DifficultyValues }) {
  if (word._id === payload.id) {
    const oldDifficulty = word.userWord?.difficulty;
    const difficultyBtn = payload.difficulty;
    let newDiffculty: DifficultyValues = '';
    switch (difficultyBtn) {
      case 'hard':
        newDiffculty = oldDifficulty === 'hard' ? newDiffculty : 'hard';
        break;
      case 'learned':
        newDiffculty = oldDifficulty === 'learned' ? newDiffculty : 'learned';
        break;
    }
    const newUserWord = word.userWord
      ? { ...word.userWord, difficulty: newDiffculty }
      : { difficulty: newDiffculty };
    const newWord = { ...word, userWord: newUserWord };
    return newWord;
  }
  return word;
}

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    addFormWord: {
      reducer: (state, action: PayloadAction<IAddWordPayload>) => {
        state.words.push(action.payload.word);
      },
      prepare: (word: IUserWord) => ({
        payload: { word },
      }),
    },
    changeDifWord: {
      reducer: (state, action: PayloadAction<IChangeDifPayload>) => {
        state.words = state.words.map((word) => changeDifficulty(word, action.payload));
      },
      prepare: (id: string, difficulty: DifficultyValues) => ({
        payload: { id, difficulty },
      }),
    },
    delFormWords(state, action: PayloadAction<string>) {
      state.words = state.words.filter((word) => word._id !== action.payload);
    },
  },
});

export const { addFormWord, delFormWords, changeDifWord } = formSlice.actions;
export default formSlice.reducer;
