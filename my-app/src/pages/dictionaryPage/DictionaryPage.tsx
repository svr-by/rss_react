import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from 'redux/store';
import { requestWords, requestSearchedWords } from 'redux/slices/dictionarySlice';
import LevelList from './components/levelList/LevelList';
import Filter from 'pages/dictionaryPage/components/filter/Filter';
import CardList from 'pages/dictionaryPage/components/cardList/CardList';
import './DictionaryPage.css';

function DictionaryPage() {
  const { group, searchedWord, loadingStatus } = useSelector(
    (state: RootState) => state.dictionary
  );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (searchedWord.length) {
      dispatch(requestSearchedWords(searchedWord));
    } else {
      dispatch(requestWords(group));
    }
  }, [dispatch, group, searchedWord]);

  return (
    <div className="wrapper main-wrapper">
      <div className="dictionary">
        <h1 className="page-title">Dictionary</h1>
        <LevelList />
        <Filter />
        <CardList status={loadingStatus} />
      </div>
    </div>
  );
}

export default DictionaryPage;
