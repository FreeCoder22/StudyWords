import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga';
import wordReducer from '../pages/word/wordSlice'
import saga from './saga';

let sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {wordReducer},
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(saga);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch