import { all } from 'redux-saga/effects';
import wordSaga from '../pages/word/wordSaga';


export default function* saga() {
  yield all([
    wordSaga()
  ]);
}
