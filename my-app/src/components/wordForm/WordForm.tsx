import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { DifficultyValues, IUserWord } from '../../shared/types';
import { nanoid } from '@reduxjs/toolkit';
import Button from 'components/button/Button';
import Switch from './components/switch/Switch';
import FormInput from './components/formInput/FormInput';
import './WordForm.css';

enum ErrorMes {
  empty = 'required',
  minLength = 'invalid min length',
  pattern = 'invalid characters',
}

enum InputNames {
  word = 'word',
  wordTransl = 'wordTransl',
  wordTransc = 'wordTransc',
  difficulty = 'difficulty',
  example = 'example',
  exampleTransl = 'exampleTransl',
  mean = 'mean',
  meanTransl = 'meanTransl',
  img = 'img',
  audio = 'audio',
  date = 'date',
  exampleSwitch = 'exampleSwitch',
  meanSwitch = 'meanSwitch',
  dateSwitch = 'dateSwitch',
}

export interface IFormInputs {
  word: string;
  wordTransl: string;
  wordTransc: string;
  difficulty: DifficultyValues;
  example: string;
  exampleTransl: string;
  mean: string;
  meanTransl: string;
  img: FileList;
  audio: FileList;
  date: string;
  exampleSwitch: string;
  meanSwitch: string;
  dateSwitch: string;
}

interface IWordFormProps {
  onSubmit: (word: IUserWord) => void;
}

function WordForm({ onSubmit }: IWordFormProps) {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm<IFormInputs>();
  const watchImg: FileList = watch(InputNames.img);
  const watchEgSwitch: boolean = watch(InputNames.exampleSwitch);
  const watchMeanSwitch: boolean = watch(InputNames.meanSwitch);
  const watchDateSwitch: boolean = watch(InputNames.dateSwitch);
  const hasErrors = errors && Object.keys(errors).length !== 0;

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  function onFormSubmit(data: IFormInputs) {
    const newWord: IUserWord = {
      _id: nanoid(),
      group: 0,
      page: 0,
      word: data.word,
      wordTranslate: data.wordTransl,
      transcription: data.wordTransc,
      textExample: data.example,
      textExampleTranslate: data.exampleTransl,
      textMeaning: data.mean,
      textMeaningTranslate: data.meanTransl,
      image: data?.img?.[0] ? URL.createObjectURL(data?.img?.[0]) : undefined,
      audio: data?.audio?.[0] ? URL.createObjectURL(data?.audio?.[0]) : undefined,
      audioMeaning: undefined,
      audioExample: undefined,
      userWord: {
        difficulty: data.difficulty,
        optional: {
          date: data.date,
        },
      },
    };
    onSubmit(newWord);
  }

  return (
    <form className="form" onSubmit={handleSubmit(onFormSubmit)} noValidate>
      <div className="form__group">
        <FormInput
          type="text"
          label="Word:"
          name={InputNames.word}
          register={register}
          required={ErrorMes.empty}
          minLength={{ value: 2, message: ErrorMes.minLength }}
          pattern={{ value: /^[a-z_-]{2,30}$/i, message: ErrorMes.pattern }}
          errorMes={errors[InputNames.word]?.message}
          autoComplete="off"
        />
        <FormInput
          type="text"
          label="Word translate:"
          name={InputNames.wordTransl}
          register={register}
          required={ErrorMes.empty}
          minLength={{ value: 2, message: ErrorMes.minLength }}
          pattern={{ value: /^[ёа-я_-]{2,40}$/i, message: ErrorMes.pattern }}
          errorMes={errors[InputNames.wordTransl]?.message}
          autoComplete="off"
        />
        <FormInput
          type="text"
          label="Word transcription:"
          name={InputNames.wordTransc}
          register={register}
          required={ErrorMes.empty}
          minLength={{ value: 2, message: ErrorMes.minLength }}
          pattern={{ value: /^[^а-яё\s0-9]+$/iu, message: ErrorMes.pattern }}
          errorMes={errors[InputNames.wordTransc]?.message}
          autoComplete="off"
        />
      </div>
      <div className="form__group">
        <div className="form__field">
          <label className="form__label">Difficulty:</label>
          <select className="form__input" {...register(InputNames.difficulty)}>
            <option value="">None</option>
            <option value="hard">Hard</option>
            <option value="learned">Learned</option>
          </select>
        </div>
        <Switch text="Add example:" name={InputNames.exampleSwitch} register={register} />
        <Switch text="Add meaning:" name={InputNames.meanSwitch} register={register} />
      </div>
      {watchEgSwitch && (
        <fieldset title="Example" className="form__fieldset">
          <legend>Example</legend>
          <FormInput
            type="text"
            label="Text:"
            name={InputNames.example}
            register={register}
            pattern={{ value: /^[^а-яё]+$/iu, message: ErrorMes.pattern }}
            errorMes={errors[InputNames.example]?.message}
            autoComplete="off"
          />
          <FormInput
            type="text"
            label="Translate:"
            name={InputNames.exampleTransl}
            register={register}
            pattern={{ value: /^[^a-z]+$/iu, message: ErrorMes.pattern }}
            errorMes={errors[InputNames.exampleTransl]?.message}
            autoComplete="off"
          />
        </fieldset>
      )}
      {watchMeanSwitch && (
        <fieldset title="Meaning" className="form__fieldset">
          <legend>Meaning</legend>
          <FormInput
            type="text"
            label="Text:"
            name={InputNames.mean}
            register={register}
            pattern={{ value: /^[^а-яё]+$/iu, message: ErrorMes.pattern }}
            errorMes={errors[InputNames.mean]?.message}
            autoComplete="off"
          />
          <FormInput
            type="text"
            label="Translate:"
            name={InputNames.meanTransl}
            register={register}
            pattern={{ value: /^[^a-z]+$/iu, message: ErrorMes.pattern }}
            errorMes={errors[InputNames.meanTransl]?.message}
            autoComplete="off"
          />
        </fieldset>
      )}
      <div className="form__group">
        <FormInput
          type="file"
          label="Word image:"
          name={InputNames.img}
          register={register}
          required={ErrorMes.empty}
          errorMes={errors[InputNames.img]?.message}
          accept="image/*"
        />
        <FormInput
          type="file"
          label="Word audio:"
          name={InputNames.audio}
          register={register}
          errorMes={errors[InputNames.audio]?.message}
          accept="audio/*"
        />
      </div>
      {watchImg && watchImg[0] && (
        <div>
          <img src={URL.createObjectURL(watchImg[0])} className="form__img" alt="image" />
        </div>
      )}
      <div className="form__group">
        <div className="form__field">
          <Switch
            text="Save the date the word was created"
            type="checkbox"
            name={InputNames.dateSwitch}
            register={register}
          />
        </div>
        {watchDateSwitch && (
          <div className="form__group">
            <FormInput
              type="date"
              name={InputNames.date}
              register={register}
              errorMes={errors[InputNames.date]?.message}
              defaultValue={new Date().toISOString().substring(0, 10)}
            />
          </div>
        )}
      </div>
      <div className="form__group">
        <Button className="form__btn" type="submit" disabled={hasErrors}>
          Create word
        </Button>
      </div>
    </form>
  );
}

export default WordForm;
