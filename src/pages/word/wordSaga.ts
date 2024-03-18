import { call, takeLatest, put } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { WordModel } from '../../models/WordModel';
import { Words } from './wordApi';
import { wordActions } from './wordSlice';
import { AxiosResponse } from 'axios';

function* getWordsByUserSaga(action: PayloadAction<string>) {
    try {
        let response: WordModel[] = yield call(Words.getWordsByUserId, action.payload);
        yield put(
            wordActions.getWordsByUserIdSuccess(response)
        );
    } catch (err: any) {
      yield put(wordActions.getWordsByUserIdFailed(err.response));
    }
  }

  function* postWordSaga(action: PayloadAction<WordModel>) {
    try {
        let response: AxiosResponse = yield call(Words.postWord, action.payload);
        yield put(
            wordActions.postWordIdSuccess(response.data)
        );
    } catch (err: any) {
      yield put(wordActions.postWordIdFailed(err.response));
    }
  }
  
  function* putWordSaga(action: PayloadAction<WordModel>) {
    try {
        let response: AxiosResponse = yield call(Words.putWord, action.payload);
        yield put(
            wordActions.putWordIdSuccess(response.data)
        );
    } catch (err: any) {
      yield put(wordActions.putWordIdFailed(err.response));
    }
  }

  export default function* wordSaga() {
    yield takeLatest(wordActions.getWordsByUserIdAction.type, getWordsByUserSaga);
    yield takeLatest(wordActions.postWordAction.type, postWordSaga);
    yield takeLatest(wordActions.putWordAction.type, putWordSaga);
  }
