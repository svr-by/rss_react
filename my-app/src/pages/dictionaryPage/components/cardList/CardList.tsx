import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'redux/store';
import { changePage } from 'redux/slices/dictionarySlice';
import { Link } from 'react-router-dom';
import { CircularProgress, Pagination } from '@mui/material';
import { IWord, StatusValues } from 'shared/types';
import { checkFilesPath, checkSortOrder, createListForPage } from './cardListUtils';
import { serverURL } from 'api/api';
import Card from 'components/card/Card';
import './CardList.css';

export interface ICardListProps {
  status: StatusValues;
}

function CardList(props: ICardListProps) {
  const { status } = props;
  const state = useSelector((state: RootState) => state.dictionary);
  const { words, page, wordsPerPage, sortOrder, userLogged } = state;
  const dispatch = useDispatch();

  function handleChangePage(e: React.ChangeEvent<unknown>, page: number) {
    dispatch(changePage(page));
  }

  function renderWordList(words: IWord[]) {
    const updatedWords = checkFilesPath(serverURL, words);
    const sortedWords = checkSortOrder(sortOrder, updatedWords);
    const wordsOnPage = createListForPage(sortedWords, page, wordsPerPage);
    const pageCount = Math.ceil(words.length / wordsPerPage);

    return (
      <>
        <div className="card-list" data-testid="list">
          {wordsOnPage.map((word) => (
            <Link to={word.id} key={word.id} className="card-list__link">
              <Card word={word} isUserLogged={userLogged} className="card--short" />
            </Link>
          ))}
        </div>
        <div className="pagination">
          <Pagination
            count={pageCount}
            page={page}
            size="large"
            shape="rounded"
            color="primary"
            showFirstButton
            showLastButton
            onChange={handleChangePage}
          />
        </div>
      </>
    );
  }

  function checkListStatus(status: StatusValues, words: IWord[] | undefined) {
    if (status === 'error') {
      return <h3>Sorry, unexpected error</h3>;
    }
    if (status === 'loading') {
      return <CircularProgress size={100} />;
    }
    if (!words || !words.length) {
      return <h3>Sorry, no result found</h3>;
    } else {
      return renderWordList(words);
    }
  }

  return <div className="list-wrapper">{checkListStatus(status, words)}</div>;
}

export default CardList;
