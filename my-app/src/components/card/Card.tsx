import { useState } from 'react';
import { CircularProgress } from '@mui/material';
import Button from 'components/button/Button';
import { IWord, IUserWord, DifficultyValues } from 'shared/types';
import { generateGamesStats, generateDifficultyLabel, generateClassName } from './cardUtils';
import './Card.css';

interface ICardProps {
  word: IWord | IUserWord;
  className?: string;
  isUserLogged?: boolean;
  fullView?: boolean;
  onClick?: (word: IWord | IUserWord) => void;
  onDelete?: (id: string) => void;
  onChangeDifficulty?: (id: string, diff: DifficultyValues) => void;
}

function Card(props: ICardProps) {
  const [imgLoaded, setImgLoaded] = useState(false);
  const [audioLoaded, setAudioLoaded] = useState(false);

  const { className, isUserLogged, fullView, onClick, onDelete, onChangeDifficulty } = props;
  const {
    image,
    audio,
    word,
    wordTranslate,
    transcription,
    textMeaning,
    textMeaningTranslate,
    textExample,
    textExampleTranslate,
  } = props.word;
  const wordDifficulty = (props.word as IUserWord).userWord?.difficulty;
  const stats = (props.word as IUserWord).userWord?.optional?.games;
  const date = (props.word as IUserWord).userWord?.optional?.date;
  const id = (props.word as IWord).id || (props.word as IUserWord)._id;

  function playSound(audio: string) {
    setAudioLoaded(true);
    const audioFile = new Audio(audio);
    audioFile.addEventListener('loadeddata', () => {
      setAudioLoaded(false);
    });
    audioFile.play();
  }

  function handleCardClick() {
    onClick?.(props.word);
  }

  function handleImgLoad() {
    setImgLoaded(true);
  }

  return (
    <div className={generateClassName(fullView, className)} onClick={handleCardClick}>
      <div className="card__img-wrap">
        {isUserLogged && (
          <>
            {wordDifficulty && (
              <div className="card__labels">
                <div className={generateDifficultyLabel(wordDifficulty)}></div>
              </div>
            )}
            {stats && <div className="card__stats">{generateGamesStats(stats)}</div>}
            {date && <div className="card__date">{date}</div>}
          </>
        )}
        {!imgLoaded && (
          <div className="card__preloader">
            <CircularProgress color="inherit" />
          </div>
        )}
        <img src={image} className="card__img" onLoad={handleImgLoad} />
      </div>
      <div className="card__descp">
        <div className="card__header">
          <h4 className="card__title">
            <span className="card__word">{word}</span>
            <span className="card__translate">{` / ${wordTranslate}`}</span>
            {fullView && (
              <div className="card__sub-title">
                <span className="card__transcription">{`[${transcription}]`}</span>
              </div>
            )}
          </h4>
          {fullView && audio && (
            <Button className={'button card__audio'} onClick={() => playSound(audio)}>
              {!audioLoaded ? (
                <div className="play-icon"></div>
              ) : (
                <CircularProgress color="inherit" size={30} />
              )}
            </Button>
          )}
        </div>
        {fullView && textMeaning && (
          <p className="card__text-meaning">
            <span className="card__text--eng" dangerouslySetInnerHTML={{ __html: textMeaning }} />
            <span className="card__text--rus">{' - ' + textMeaningTranslate}</span>
          </p>
        )}
        {fullView && textExample && (
          <p className="card__text-example">
            <span className="card__text--eng" dangerouslySetInnerHTML={{ __html: textExample }} />
            <span className="card__text--rus">{' - ' + textExampleTranslate}</span>
          </p>
        )}
        {fullView && isUserLogged && onChangeDifficulty && (
          <div className="card__buttons">
            <Button
              className="card__btn"
              active={wordDifficulty === 'hard'}
              onClick={() => onChangeDifficulty(id, 'hard')}
            >
              Hard
            </Button>
            <Button
              className="card__btn"
              active={wordDifficulty === 'learned'}
              onClick={() => onChangeDifficulty(id, 'learned')}
            >
              Learned
            </Button>
            {onDelete && (
              <Button className="card__btn" onClick={() => onDelete(id)}>
                Delete
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Card;
