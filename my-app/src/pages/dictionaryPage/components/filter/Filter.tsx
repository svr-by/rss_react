import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'redux/store';
import {
  changeSearchedWord,
  changeSortOrder,
  changeWordsPerPage,
  changePage,
} from 'redux/slices/dictionarySlice';
import { KeyboardEvent, ChangeEvent, useRef } from 'react';
import { SortOrderValues, WordsPerPageValues } from 'shared/types';
import './Filter.css';

function Filter() {
  const state = useSelector((state: RootState) => state.dictionary);
  const { words, wordsPerPage, page, searchedWord, sortOrder } = state;
  const dispatch = useDispatch();

  const wordCount = words.length;
  const minWordNumber = (page - 1) * wordsPerPage;
  const maxWordNumber =
    minWordNumber + wordsPerPage > wordCount ? wordCount : minWordNumber + wordsPerPage;
  const pageCount = Math.ceil(words.length / wordsPerPage);

  const textInput = useRef<HTMLInputElement>(null);

  function handleKeyUp(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      const text = textInput.current?.value || '';
      dispatch(changeSearchedWord(text));
      localStorage.setItem('searchedWord', text);
    }
  }

  function handleChangeSortOrder(e: ChangeEvent<HTMLSelectElement>) {
    const newValue = e.target.value as SortOrderValues;
    if (newValue !== sortOrder) {
      dispatch(changeSortOrder(newValue));
      localStorage.setItem('sortOrder', sortOrder);
    }
  }

  function handleChangeWordsPerPage(e: ChangeEvent<HTMLSelectElement>) {
    const newValue = +e.target.value as WordsPerPageValues;
    if (newValue !== wordsPerPage) {
      dispatch(changeWordsPerPage(newValue));
    }
  }

  function handleChangePage(e: ChangeEvent<HTMLSelectElement>) {
    const newPage = +e.target.value;
    if (newPage !== page) {
      dispatch(changePage(newPage));
    }
  }

  function renderPageOptions() {
    const options = [];
    for (let i = 1; i <= pageCount; i++) {
      options.push(
        <option key={i} value={i}>
          {i}
        </option>
      );
    }
    return options;
  }

  return (
    <div className="filter">
      <input
        type="search"
        placeholder="Search word ..."
        autoComplete="off"
        className="filter__search"
        onKeyUp={handleKeyUp}
        ref={textInput}
        defaultValue={searchedWord}
      />
      <div className="filter__params">
        <label className="filter__parameter">
          Sort by:
          <select className="filter__select" value={sortOrder} onChange={handleChangeSortOrder}>
            <option value={SortOrderValues.default}>None</option>
            <option value={SortOrderValues.wordAsc}>Word ascending</option>
            <option value={SortOrderValues.wordDes}>Word descending</option>
            <option value={SortOrderValues.translAsc}>Translate ascending</option>
            <option value={SortOrderValues.translDec}>Translate descending</option>
          </select>
        </label>
        <label className="filter__parameter">
          Words per page:
          <select
            className="filter__select"
            value={wordsPerPage}
            onChange={handleChangeWordsPerPage}
          >
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={40}>40</option>
            <option value={60}>60</option>
          </select>
        </label>
        <label className="filter__parameter">
          Page:
          <select className="filter__select" value={page} onChange={handleChangePage}>
            {renderPageOptions()}
          </select>
        </label>
        <div className="filter__parameter">
          Words:<span>{`(${minWordNumber}-${maxWordNumber} of ${wordCount})`}</span>
        </div>
      </div>
    </div>
  );
}

export default Filter;
