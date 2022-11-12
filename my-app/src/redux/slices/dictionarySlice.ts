import { createSlice, createAsyncThunk, PayloadAction, isAnyOf } from '@reduxjs/toolkit';
import { getGroupWords, getSearchedWords } from 'api/api';
import {
  GroupValues,
  IWord,
  SortOrderValues,
  WordsPerPageValues,
  StatusValues,
} from 'shared/types';

interface IDictState {
  words: IWord[];
  userLogged: boolean;
  wordsPerPage: WordsPerPageValues;
  group: GroupValues;
  page: number;
  searchedWord: string;
  sortOrder: SortOrderValues;
  loadingStatus: StatusValues;
}

const initialState: IDictState = {
  words: [],
  userLogged: true,
  wordsPerPage: 20,
  group: 0,
  page: 1,
  searchedWord: '',
  sortOrder: SortOrderValues.default,
  loadingStatus: 'loading',
};

export const requestWords = createAsyncThunk(
  'dictionary/requestWords',
  async (group: GroupValues) => {
    const words = await getGroupWords(group);
    return words;
  }
);

export const requestSearchedWords = createAsyncThunk(
  'dictionary/requestSearchedWords',
  async (text: string) => {
    const words = await getSearchedWords(text);
    return words;
  }
);

const dictionarySlice = createSlice({
  name: 'dictionary',
  initialState,
  reducers: {
    changeSortOrder(state, action: PayloadAction<SortOrderValues>) {
      state.sortOrder = action.payload;
    },
    changeWordsPerPage(state, action: PayloadAction<WordsPerPageValues>) {
      state.wordsPerPage = action.payload;
    },
    changeSearchedWord(state, action: PayloadAction<string>) {
      state.searchedWord = action.payload;
    },
    changeGroup(state, action: PayloadAction<GroupValues>) {
      state.group = action.payload;
    },
    changePage(state, action: PayloadAction<number>) {
      state.page = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addMatcher(isAnyOf(requestWords.pending, requestSearchedWords.pending), (state) => {
        state.loadingStatus = 'loading';
      })
      .addMatcher(
        isAnyOf(requestWords.fulfilled, requestSearchedWords.fulfilled),
        (state, action) => {
          state.words = [...action.payload];
          state.loadingStatus = 'ok';
        }
      )
      .addMatcher(isAnyOf(requestWords.rejected, requestSearchedWords.rejected), (state) => {
        state.loadingStatus = 'error';
      })
      .addDefaultCase(() => {});
  },
});

export const { changeSortOrder, changeWordsPerPage, changeSearchedWord, changeGroup, changePage } =
  dictionarySlice.actions;

export default dictionarySlice.reducer;
