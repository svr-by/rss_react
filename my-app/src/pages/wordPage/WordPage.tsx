import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import { useParams, useNavigate, Navigate } from 'react-router-dom';
import { serverURL } from 'api/api';
import { Paths } from 'app/App';
import Card from 'components/card/Card';
import Button from 'components/button/Button';
import './WordPage.css';

function WordPage() {
  const { words } = useSelector((state: RootState) => state.dictionary);
  const { wordId } = useParams();
  const navigate = useNavigate();

  const wordFromState = words.find((word) => word.id === wordId);
  const word = wordFromState
    ? {
        ...wordFromState,
        image: `${serverURL}/${wordFromState.image}`,
        audio: `${serverURL}/${wordFromState.audio}`,
      }
    : null;

  function goBack() {
    navigate(-1);
  }

  return word ? (
    <div className="wrapper word-wrapper">
      <Button className="btn-back" onClick={goBack}>
        &larr; Go back
      </Button>
      <h1 className="page-title page-title--word">{word.word}</h1>
      <div className="content">
        <Card word={word} isUserLogged fullView />
      </div>
    </div>
  ) : (
    <Navigate to={Paths.home} />
  );
}

export default WordPage;
