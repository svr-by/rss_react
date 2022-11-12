import { rest } from 'msw';
import { serverURL } from 'api/api';

export const getWordsHandler = rest.get(`${serverURL}/filteredWords`, (req, res, ctx) => {
  req.url.searchParams.set('filter', '{"group": 0}');
  return res(
    ctx.json([
      {
        audio: 'files/01_0005.mp3',
        audioExample: 'files/01_0005_example.mp3',
        audioMeaning: 'files/01_0005_meaning.mp3',
        group: 0,
        id: '5e9f5ee35eb9e72bc21af4a2',
        image: 'files/01_0005.jpg',
        page: 0,
        textExample: 'There is a small <b>boat</b> on the lake.',
        textExampleTranslate: 'На озере есть маленькая лодка',
        textMeaning: 'A <i>boat</i> is a vehicle that moves across water.',
        textMeaningTranslate: 'Лодка - это транспортное средство, которое движется по воде',
        transcription: '[bout]',
        word: 'boat',
        wordTranslate: 'лодка',
      },
      {
        audio: 'files/01_0007.mp3',
        audioExample: 'files/01_0007_example.mp3',
        audioMeaning: 'files/01_0007_meaning.mp3',
        group: 0,
        id: '5e9f5ee35eb9e72bc21af4a6',
        image: 'files/01_0007.jpg',
        page: 0,
        textExample: 'I brought my <b>camera</b> on my vacation.',
        textExampleTranslate: 'Я принес свою камеру в отпуск',
        textMeaning: 'A <i>camera</i> is a piece of equipment that takes pictures.',
        textMeaningTranslate: 'Камера - это часть оборудования, которая делает снимки',
        transcription: '[kǽmərə]',
        word: 'camera',
        wordTranslate: 'камера',
      },
      {
        audio: 'files/01_0002.mp3',
        audioExample: 'files/01_0002_example.mp3',
        audioMeaning: 'files/01_0002_meaning.mp3',
        group: 0,
        id: '5e9f5ee35eb9e72bc21af4a0',
        image: 'files/01_0002.jpg',
        page: 0,
        textExample:
          'A person should not drive a car after he or she has been drinking <b>alcohol</b>.',
        textExampleTranslate: 'Человек не должен водить машину после того, как он выпил алкоголь',
        textMeaning: '<i>Alcohol</i> is a type of drink that can make people drunk.',
        textMeaningTranslate: 'Алкоголь - это тип напитка, который может сделать людей пьяными',
        transcription: '[ǽlkəhɔ̀ːl]',
        word: 'alcohol',
        wordTranslate: 'алкоголь',
      },
    ])
  );
});

export const searchWordHandler = rest.get(`${serverURL}/filteredWords`, (req, res, ctx) => {
  req.url.searchParams.set('filter', '{"word":{"$regex":"^boat","$options":"i"}}');
  return res(
    ctx.json([
      {
        audio: 'files/01_0005.mp3',
        audioExample: 'files/01_0005_example.mp3',
        audioMeaning: 'files/01_0005_meaning.mp3',
        group: 0,
        id: '5e9f5ee35eb9e72bc21af4a2',
        image: 'files/01_0005.jpg',
        page: 0,
        textExample: 'There is a small <b>boat</b> on the lake.',
        textExampleTranslate: 'На озере есть маленькая лодка',
        textMeaning: 'A <i>boat</i> is a vehicle that moves across water.',
        textMeaningTranslate: 'Лодка - это транспортное средство, которое движется по воде',
        transcription: '[bout]',
        word: 'boat',
        wordTranslate: 'лодка',
      },
    ])
  );
});
