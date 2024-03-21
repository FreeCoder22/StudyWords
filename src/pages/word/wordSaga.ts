  /* eslint-disable  @typescript-eslint/no-explicit-any */
import { call, takeLatest, put } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { WordModel } from '../../models/WordModel';
import { Words } from './wordApi';
import { wordActions } from './wordSlice';
import { AxiosResponse } from 'axios';

function* getWordsByUserSaga(action: PayloadAction<string>) {
    try {
        const response: WordModel[] = yield call(Words.getWordsByUserId, action.payload);
        yield put(
            wordActions.getWordsByUserIdSuccess(response)
        );
    } catch (err: any) {
      yield put(wordActions.getWordsByUserIdFailed(err.response));
    }
  }

  function* getWordsRandomByUserSaga(action: PayloadAction<string>) {
    try {
      const response: WordModel[] = yield call(Words.getWordsRandomByUserId, action.payload);
        yield put(
            wordActions.getWordsRandomByUserIdSuccess(response)
        );
    } catch (err: any) {
      yield put(wordActions.getWordsRandomByUserIdFailed(err.response));
    }
  }

  function* postWordSaga(action: PayloadAction<WordModel>) {
    try {
      const response: AxiosResponse = yield call(Words.postWord, action.payload);
        yield put(
            wordActions.postWordSuccess(response.data)
        );
    } catch (err: any) {
      yield put(wordActions.postWordFailed(err.response));
    }
  }
  function* putWordSaga(action: PayloadAction<WordModel>) {
    console.log('putWordSaga action.payload', action.payload);
    
    try {
      const response: AxiosResponse = yield call(Words.putWord, action.payload);
        yield put(
            wordActions.putWordSuccess(response.data)
        );
    } catch (err: any) {
      yield put(wordActions.putWordFailed(err.response));
    }
  }

  function* deleteWordSaga(action: PayloadAction<string>) {
    try {
        const response: AxiosResponse = yield call(Words.deletetWords, action.payload);
        yield put(
            wordActions.deleteWordSuccess(response.data)
        );
    } catch (err: any) {
      yield put(wordActions.deleteWordFailed(err.response));
    }
  }

  export default function* wordSaga() {
    yield takeLatest(wordActions.getWordsByUserIdAction.type, getWordsByUserSaga);
    yield takeLatest(wordActions.getWordsRandomByUserIdAction.type, getWordsRandomByUserSaga);
    yield takeLatest(wordActions.postWordAction.type, postWordSaga);
    yield takeLatest(wordActions.putWordAction.type, putWordSaga);
    yield takeLatest(wordActions.deleteWordAction.type, deleteWordSaga);
  }
