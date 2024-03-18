import { call, takeLatest, put } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { WordModel } from '../../models/WordModel';
import { wordActions } from './wordSlice';
import { Words } from './wordApi';

function* getWordSaga(action: PayloadAction<string>) {
    console.log("getWordSaga", action.payload);
    
    try {
        let response: WordModel[] = yield call(Words.getWordsByUserId, action.payload);
        yield put(
            wordActions.getWordsByUserIdSuccess(response)
        );
    } catch (err: any) {
      yield put(wordActions.getWordsByUserIdFailed(err.response.statusText));
    }
  }
  
  export default function* wordSaga() {
    yield takeLatest(wordActions.getWordsByUserIdAction.type, getWordSaga);
  }
