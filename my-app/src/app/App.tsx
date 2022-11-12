import { Provider } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { store } from 'redux/store';
import DictionaryPage from '../pages/dictionaryPage/DictionaryPage';
import FormPage from 'pages/formPage/FormPage';
import AboutPage from '../pages/aboutPage/AboutPage';
import NotFoundPage from '../pages/notFoundPage/NotFoundPage';
import Layout from 'components/layout/Layout';
import WordPage from 'pages/wordPage/WordPage';

export enum Paths {
  home = '/svr-by-REACT2022Q3',
  wordId = '/svr-by-REACT2022Q3/:wordId',
  form = 'form',
  about = 'about',
  notFound = '*',
}

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path={Paths.home} element={<Layout />}>
          <Route index element={<DictionaryPage />} />
          <Route path={Paths.wordId} element={<WordPage />} />
          <Route path={Paths.form} element={<FormPage />} />
          <Route path={Paths.about} element={<AboutPage />} />
          <Route path={Paths.notFound} element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Provider>
  );
}

export default App;
