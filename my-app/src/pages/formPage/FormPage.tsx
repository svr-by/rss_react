import { IUserWord, DifficultyValues } from 'shared/types';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'redux/store';
import { addFormWord, changeDifWord, delFormWords } from 'redux/slices/formSlice';
import WordForm from 'components/wordForm/WordForm';
import Card from 'components/card/Card';

function FormPage() {
  const { words } = useSelector((state: RootState) => state.form);
  const dispatch = useDispatch();

  function submitForm(word: IUserWord) {
    dispatch(addFormWord(word));
  }

  function changeDifficulty(id: string, diff: DifficultyValues) {
    dispatch(changeDifWord(id, diff));
  }

  function deleteCard(id: string) {
    dispatch(delFormWords(id));
  }

  return (
    <div className="wrapper">
      <h1 className="page-title page-title--form">Create new word</h1>
      <WordForm onSubmit={submitForm} />
      <div className="card-list" role="list">
        {words.length !== 0
          ? words.map((word, ind) => (
              <Card
                key={ind}
                word={word}
                fullView
                isUserLogged
                className="card--bordered"
                onChangeDifficulty={changeDifficulty}
                onDelete={deleteCard}
              />
            ))
          : null}
      </div>
    </div>
  );
}

export default FormPage;
