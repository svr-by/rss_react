import { IUserWord } from 'shared/types';

interface IResponce {
  paginatedResults: IUserWord[];
  totalCount: {
    count: number;
  }[];
}

export const response: IResponce[] = [
  {
    paginatedResults: [
      {
        _id: '5e9f5ee35eb9e72bc21af4b4',
        group: 0,
        page: 1,
        word: 'adventure',
        image: 'files/02_0021.jpg',
        audio: 'files/02_0021.mp3',
        audioMeaning: 'files/02_0021_meaning.mp3',
        audioExample: 'files/02_0021_example.mp3',
        textMeaning: 'An <i>adventure</i> is a fun or exciting thing that you do.',
        textExample: 'Riding in the rough water was an <b>adventure</b>.',
        transcription: '[ədvéntʃər]',
        textExampleTranslate: 'Езда в бурной воде была приключением',
        textMeaningTranslate:
          'Приключение - это забавная или захватывающая вещь, которую ты делаешь',
        wordTranslate: 'приключение',
        userWord: {
          difficulty: 'learned',
          optional: {
            games: {
              audioCall: {
                right: 1,
                wrong: 1,
              },
              sprint: {
                right: 6,
                wrong: 2,
              },
            },
          },
        },
      },
      {
        _id: '5e9f5ee35eb9e72bc21af4b5',
        group: 0,
        page: 1,
        word: 'approach',
        image: 'files/02_0022.jpg',
        audio: 'files/02_0022.mp3',
        audioMeaning: 'files/02_0022_meaning.mp3',
        audioExample: 'files/02_0022_example.mp3',
        textMeaning: 'To <i>approach</i> something means to move close to it.',
        textExample: 'The boy <b>approached</b> his school.',
        transcription: '[əpróutʃ]',
        textExampleTranslate: 'Мальчик приблизился к своей школе',
        textMeaningTranslate: 'Подойти к чему-то - значит приблизиться к нему',
        wordTranslate: 'подходить',
        userWord: {
          difficulty: 'learned',
        },
      },
      {
        _id: '5e9f5ee35eb9e72bc21af4b6',
        group: 0,
        page: 1,
        word: 'chemical',
        image: 'files/02_0024.jpg',
        audio: 'files/02_0024.mp3',
        audioMeaning: 'files/02_0024_meaning.mp3',
        audioExample: 'files/02_0024_example.mp3',
        textMeaning: 'A <i>chemical</i> is something that scientists use in chemistry.',
        textExample: 'The scientist mixed the <b>chemicals</b>.',
        transcription: '[kémikəl]',
        textExampleTranslate: 'Ученый смешал химикаты',
        textMeaningTranslate: 'Химическое вещество - это то, что ученые используют в химии',
        wordTranslate: 'химический',
        userWord: {
          difficulty: 'learned',
          optional: {
            games: {
              audioCall: {
                right: 0,
                wrong: 1,
              },
              sprint: {
                right: 7,
                wrong: 3,
              },
            },
          },
        },
      },
      {
        _id: '5e9f5ee35eb9e72bc21af4b7',
        group: 0,
        page: 1,
        word: 'carefully',
        image: 'files/02_0023.jpg',
        audio: 'files/02_0023.mp3',
        audioMeaning: 'files/02_0023_meaning.mp3',
        audioExample: 'files/02_0023_example.mp3',
        textMeaning: '<i>Carefully</i> means with great attention, especially to detail or safety.',
        textExample: 'The baby <b>carefully</b> climbed down the stairs.',
        transcription: '[kɛ́ərfəli]',
        textExampleTranslate: 'Малыш осторожно спускался по лестнице',
        textMeaningTranslate:
          'Осторожно означает с большим вниманием, особенно к деталям или безопасности',
        wordTranslate: 'внимательно',
        userWord: {
          difficulty: 'learned',
          optional: {
            games: {
              audioCall: {
                right: 0,
                wrong: 1,
              },
              sprint: {
                right: 4,
                wrong: 5,
              },
            },
          },
        },
      },
      {
        _id: '5e9f5ee35eb9e72bc21af4b8',
        group: 0,
        page: 1,
        word: 'create',
        image: 'files/02_0025.jpg',
        audio: 'files/02_0025.mp3',
        audioMeaning: 'files/02_0025_meaning.mp3',
        audioExample: 'files/02_0025_example.mp3',
        textMeaning: 'To <i>create</i> means to make something new.',
        textExample: 'She <b>created</b> an igloo from blocks of snow.',
        transcription: '[kriéit]',
        textExampleTranslate: 'Она создала иглу из снежных глыб',
        textMeaningTranslate: 'Создать значит создать что-то новое',
        wordTranslate: 'создайте',
        userWord: {
          difficulty: 'hard',
          optional: {
            games: {
              audioCall: {
                right: 0,
                wrong: 2,
              },
              sprint: {
                right: 8,
                wrong: 2,
              },
            },
          },
        },
      },
      {
        _id: '5e9f5ee35eb9e72bc21af4b9',
        group: 0,
        page: 1,
        word: 'evil',
        image: 'files/02_0026.jpg',
        audio: 'files/02_0026.mp3',
        audioMeaning: 'files/02_0026_meaning.mp3',
        audioExample: 'files/02_0026_example.mp3',
        textMeaning: '<i>Evil</i> describes something or someone bad or cruel, not good.',
        textExample: 'They felt a strange, <b>evil</b> presence as they got closer to the house.',
        transcription: '[íːvəl]',
        textExampleTranslate:
          'Они почувствовали странное злое присутствие, когда приблизились к дому',
        textMeaningTranslate:
          'Зло описывает что-то или кого-то плохого или жестокого, а не хорошего',
        wordTranslate: 'злой',
        userWord: {
          difficulty: 'learned',
          optional: {
            games: {
              audioCall: {
                right: 0,
                wrong: 2,
              },
              sprint: {
                right: 8,
                wrong: 2,
              },
            },
          },
        },
      },
      {
        _id: '5e9f5ee35eb9e72bc21af4ba',
        group: 0,
        page: 1,
        word: 'experiment',
        image: 'files/02_0027.jpg',
        audio: 'files/02_0027.mp3',
        audioMeaning: 'files/02_0027_meaning.mp3',
        audioExample: 'files/02_0027_example.mp3',
        textMeaning: 'An <i>experiment</i> is a test that you do to see what will happen.',
        textExample: 'The student did an <b>experiment</b> in science class.',
        transcription: '[ikspérəmənt]',
        textExampleTranslate: 'Студент сделал эксперимент в классе науки',
        textMeaningTranslate:
          'Эксперимент - это тест, который вы проводите, чтобы увидеть, что произойдет',
        wordTranslate: 'эксперимент',
        userWord: {
          difficulty: 'easy',
          optional: {
            games: {
              audioCall: {
                right: 0,
                wrong: 1,
              },
              sprint: {
                right: 7,
                wrong: 4,
              },
            },
          },
        },
      },
      {
        _id: '5e9f5ee35eb9e72bc21af4bb',
        group: 0,
        page: 1,
        word: 'laboratory',
        image: 'files/02_0029.jpg',
        audio: 'files/02_0029.mp3',
        audioMeaning: 'files/02_0029_meaning.mp3',
        audioExample: 'files/02_0029_example.mp3',
        textMeaning: 'A <i>laboratory</i> is a room where a scientist works.',
        textExample: 'My mother works in a <b>laboratory</b>.',
        transcription: '[lǽbərətɔ̀ːri]',
        textExampleTranslate: 'Моя мама работает в лаборатории',
        textMeaningTranslate: 'Лаборатория - это комната, где работает ученый',
        wordTranslate: 'лаборатория',
        userWord: {
          difficulty: 'learned',
        },
      },
      {
        _id: '5e9f5ee35eb9e72bc21af4bc',
        group: 0,
        page: 1,
        word: 'kill',
        image: 'files/02_0028.jpg',
        audio: 'files/02_0028.mp3',
        audioMeaning: 'files/02_0028_meaning.mp3',
        audioExample: 'files/02_0028_example.mp3',
        textMeaning: 'To <i>kill</i> someone or something is to make them die.',
        textExample: 'I <b>killed</b> the fly.',
        transcription: '[kil]',
        textExampleTranslate: 'Я убил муху',
        textMeaningTranslate: 'Убить кого-то или что-то значит заставить их умереть',
        wordTranslate: 'убийство',
        userWord: {
          difficulty: 'learned',
        },
      },
      {
        _id: '5e9f5ee35eb9e72bc21af4bd',
        group: 0,
        page: 1,
        word: 'laugh',
        image: 'files/02_0030.jpg',
        audio: 'files/02_0030.mp3',
        audioMeaning: 'files/02_0030_meaning.mp3',
        audioExample: 'files/02_0030_example.mp3',
        textMeaning:
          '<i>Laugh</i> is the sound made when someone is happy or a funny thing occurs.',
        textExample: 'The sound of her <b>laugh</b> filled the room.',
        transcription: '[læf]',
        textExampleTranslate: 'Звук ее смеха заполнил комнату',
        textMeaningTranslate:
          'Смех - это звук, который звучит, когда кто-то счастлив или происходит смешная вещь',
        wordTranslate: 'смех',
        userWord: {
          difficulty: 'learned',
        },
      },
      {
        _id: '5e9f5ee35eb9e72bc21af4be',
        group: 0,
        page: 1,
        word: 'loud',
        image: 'files/02_0031.jpg',
        audio: 'files/02_0031.mp3',
        audioMeaning: 'files/02_0031_meaning.mp3',
        audioExample: 'files/02_0031_example.mp3',
        textMeaning: 'If a sound is <i>loud</i>, it is strong and very easy to hear.',
        textExample: 'The man’s voice was so <b>loud</b> that we all could hear him.',
        transcription: '[laud]',
        textExampleTranslate:
          'Голос этого человека был настолько громким, что мы все могли слышать его',
        textMeaningTranslate: 'Если звук громкий, он сильный и очень легко слышимый',
        wordTranslate: 'громкий',
        userWord: {
          difficulty: 'easy',
          optional: {
            games: {
              audioCall: {
                right: 1,
                wrong: 1,
              },
              sprint: {
                right: 9,
                wrong: 2,
              },
            },
          },
        },
      },
      {
        _id: '5e9f5ee35eb9e72bc21af4bf',
        group: 0,
        page: 1,
        word: 'nervous',
        image: 'files/02_0032.jpg',
        audio: 'files/02_0032.mp3',
        audioMeaning: 'files/02_0032_meaning.mp3',
        audioExample: 'files/02_0032_example.mp3',
        textMeaning: 'When a person is <i>nervous</i>, they think something bad will happen.',
        textExample: 'The boy became <b>nervous</b> when he heard the news.',
        transcription: '[nə́ːrvəs]',
        textExampleTranslate: 'Мальчик стал нервным, когда услышал новости',
        textMeaningTranslate: 'Когда человек нервничает, он думает, что случится что-то плохое',
        wordTranslate: 'нервная',
        userWord: {
          difficulty: 'learned',
          optional: {
            games: {
              audioCall: {
                right: 0,
                wrong: 2,
              },
              sprint: {
                right: 11,
                wrong: 0,
              },
            },
          },
        },
      },
      {
        _id: '5e9f5ee35eb9e72bc21af4c0',
        group: 0,
        page: 1,
        word: 'noise',
        image: 'files/02_0033.jpg',
        audio: 'files/02_0033.mp3',
        audioMeaning: 'files/02_0033_meaning.mp3',
        audioExample: 'files/02_0033_example.mp3',
        textMeaning: 'A <i>noise</i> is an unpleasant sound.',
        textExample: 'The crying baby made a loud <b>noise</b>.',
        transcription: '[nɔiz]',
        textExampleTranslate: 'Плачущий ребенок издал громкий шум',
        textMeaningTranslate: 'Шум - это неприятный звук',
        wordTranslate: 'шум',
      },
      {
        _id: '5e9f5ee35eb9e72bc21af4c1',
        group: 0,
        page: 1,
        word: 'scare',
        image: 'files/02_0035.jpg',
        audio: 'files/02_0035.mp3',
        audioMeaning: 'files/02_0035_meaning.mp3',
        audioExample: 'files/02_0035_example.mp3',
        textMeaning: 'To <i>scare</i> someone is to make them feel afraid.',
        textExample: 'My uncle was <b>scared</b> by what he saw in the room.',
        transcription: '[skɛəːr]',
        textExampleTranslate: 'Мой дядя испугался увиденного в комнате',
        textMeaningTranslate: 'Напугать кого-то - значит заставить его бояться',
        wordTranslate: 'попугать',
        userWord: {
          difficulty: 'easy',
          optional: {
            games: {
              audioCall: {
                right: 1,
                wrong: 0,
              },
              sprint: {
                right: 8,
                wrong: 1,
              },
            },
          },
        },
      },
      {
        _id: '5e9f5ee35eb9e72bc21af4c2',
        group: 0,
        page: 1,
        word: 'project',
        image: 'files/02_0034.jpg',
        audio: 'files/02_0034.mp3',
        audioMeaning: 'files/02_0034_meaning.mp3',
        audioExample: 'files/02_0034_example.mp3',
        textMeaning: 'A <i>project</i> is a type of work that you do for school or a job.',
        textExample: 'His afternoon work <b>project</b> was to paint the room green.',
        transcription: '[prάdʒekt]',
        textExampleTranslate:
          'Его дневной рабочий проект должен был покрасить комнату в зеленый цвет',
        textMeaningTranslate: 'Проект - это вид работы, которую вы делаете для школы или работы',
        wordTranslate: 'проект',
        userWord: {
          difficulty: 'easy',
          optional: {
            games: {
              audioCall: {
                right: 1,
                wrong: 0,
              },
              sprint: {
                right: 6,
                wrong: 2,
              },
            },
          },
        },
      },
      {
        _id: '5e9f5ee35eb9e72bc21af4c3',
        group: 0,
        page: 1,
        word: 'secret',
        image: 'files/02_0036.jpg',
        audio: 'files/02_0036.mp3',
        audioMeaning: 'files/02_0036_meaning.mp3',
        audioExample: 'files/02_0036_example.mp3',
        textMeaning: 'A <i>secret</i> is something that you do not tell other people.',
        textExample: 'The two boys were sharing a <b>secret</b>.',
        transcription: '[síːkrit]',
        textExampleTranslate: 'Два мальчика делились секретом',
        textMeaningTranslate: 'Секрет это то, что вы не говорите другим людям',
        wordTranslate: 'секрет',
        userWord: {
          difficulty: 'easy',
          optional: {
            games: {
              audioCall: {
                right: 0,
                wrong: 0,
              },
              sprint: {
                right: 7,
                wrong: 2,
              },
            },
          },
        },
      },
      {
        _id: '5e9f5ee35eb9e72bc21af4c4',
        group: 0,
        page: 1,
        word: 'shout',
        image: 'files/02_0037.jpg',
        audio: 'files/02_0037.mp3',
        audioMeaning: 'files/02_0037_meaning.mp3',
        audioExample: 'files/02_0037_example.mp3',
        textMeaning: 'To <i>shout</i> is to say something loudly.',
        textExample: 'My boss <b>shouted</b> at me because I was late for work.',
        transcription: '[ʃaut]',
        textExampleTranslate: 'Мой начальник кричал на меня, потому что я опоздал на работу',
        textMeaningTranslate: 'Кричать - это говорить что-то громко',
        wordTranslate: 'кричать',
        userWord: {
          difficulty: 'easy',
          optional: {
            games: {
              audioCall: {
                right: 0,
                wrong: 1,
              },
              sprint: {
                right: 7,
                wrong: 2,
              },
            },
          },
        },
      },
      {
        _id: '5e9f5ee35eb9e72bc21af4c5',
        group: 0,
        page: 1,
        word: 'smell',
        image: 'files/02_0038.jpg',
        audio: 'files/02_0038.mp3',
        audioMeaning: 'files/02_0038_meaning.mp3',
        audioExample: 'files/02_0038_example.mp3',
        textMeaning: 'To <i>smell</i> something means to use your nose to sense it.',
        textExample: 'The two friends <b>smelled</b> the flower.',
        transcription: '[smel]',
        textExampleTranslate: 'Два друга понюхали цветок',
        textMeaningTranslate:
          'Обонять что-то значит использовать свой нос, чтобы почувствовать это',
        wordTranslate: 'запах',
        userWord: {
          difficulty: 'easy',
          optional: {
            games: {
              audioCall: {
                right: 1,
                wrong: 0,
              },
              sprint: {
                right: 8,
                wrong: 2,
              },
            },
          },
        },
      },
      {
        _id: '5e9f5ee35eb9e72bc21af4c6',
        group: 0,
        page: 1,
        word: 'terrible',
        image: 'files/02_0039.jpg',
        audio: 'files/02_0039.mp3',
        audioMeaning: 'files/02_0039_meaning.mp3',
        audioExample: 'files/02_0039_example.mp3',
        textMeaning: 'If something is <i>terrible</i>, it is very bad.',
        textExample: 'The way he treated his classmate was <b>terrible</b>.',
        transcription: '[térəbəl]',
        textExampleTranslate: 'То, как он относился к своему однокласснику, было ужасно',
        textMeaningTranslate: 'Если что-то ужасно, это очень плохо',
        wordTranslate: 'ужасный',
        userWord: {
          difficulty: 'easy',
          optional: {
            games: {
              audioCall: {
                right: 0,
                wrong: 0,
              },
              sprint: {
                right: 8,
                wrong: 1,
              },
            },
          },
        },
      },
      {
        _id: '5e9f5ee35eb9e72bc21af4c7',
        group: 0,
        page: 1,
        word: 'worse',
        image: 'files/02_0040.jpg',
        audio: 'files/02_0040.mp3',
        audioMeaning: 'files/02_0040_meaning.mp3',
        audioExample: 'files/02_0040_example.mp3',
        textMeaning: 'If something is <i>worse</i>, it is of poorer quality than another thing.',
        textExample: 'Business was <b>worse</b> this month than last month.',
        transcription: '[wəːrs]',
        textExampleTranslate: 'Бизнес был хуже в этом месяце, чем в прошлом месяце',
        textMeaningTranslate: 'Если что-то хуже, это хуже, чем что-то другое',
        wordTranslate: 'хуже',
        userWord: {
          difficulty: 'easy',
          optional: {
            games: {
              audioCall: {
                right: 1,
                wrong: 1,
              },
              sprint: {
                right: 7,
                wrong: 4,
              },
            },
          },
        },
      },
    ],
    totalCount: [
      {
        count: 20,
      },
    ],
  },
];
