import { assert, test } from 'vitest'
import { wordSlice, WordState } from '../pages/word/wordSlice';
import LoadingStates from '../utils/LoadingStates';
import { WordModel } from '../models/WordModel';

const initialState: WordState = {
  loading: LoadingStates.LOADING,
  words: [],
  wordsRandom: [],
  isGameFinish: false,
};

const wordTest = { id: '1', wordText: 'test', wordTranslate:"test", userId:"userId" };
const wordTestList = [{ id: '1', wordText: 'test', wordTranslate:"test", userId:"userId" }, { id: '2', wordText: 'test2', wordTranslate:"test2", userId:"userId2" }]

test('getWordsByUserIdAction', () => {
  const userId = 'testUser'
  const state = {...initialState}
  const result = wordSlice.reducer(state, wordSlice.actions.getWordsByUserIdAction(userId))
  assert(result.userId === userId)
  assert(result.loading === LoadingStates.LOADING)
})

test('getWordsByUserIdSuccess', () => {
  const words: WordModel[] = [wordTest]
  const state = {...initialState}
  const result = wordSlice.reducer(state, wordSlice.actions.getWordsByUserIdSuccess(words))
  assert(result.words === words)
  assert(result.loading === LoadingStates.LOADED)
})

test('getWordsByUserIdFailed', () => {
  const error = 'Error message'
  const state = {...initialState}
  const result = wordSlice.reducer(state, wordSlice.actions.getWordsByUserIdFailed(error))
  assert(result.error === error)
  assert(result.loading === LoadingStates.ERROR)
})

test('getWordsRandomByUserIdAction', () => {
  const userId = 'testUser'
  const state = {...initialState}
  const result = wordSlice.reducer(state, wordSlice.actions.getWordsRandomByUserIdAction(userId))
  assert(result.userId === userId)
  assert(result.loading === LoadingStates.LOADING)
})

test('getWordsRandomByUserIdSuccess', () => {
  const wordsRandom: WordModel[] = [wordTest]
  const state = {...initialState}
  const result = wordSlice.reducer(state, wordSlice.actions.getWordsRandomByUserIdSuccess(wordsRandom))
  assert(result.wordsRandom === wordsRandom)
  assert(result.loading === LoadingStates.LOADED)
})

test('getWordsRandomByUserIdFailed', () => {
  const error = 'Error message'
  const state = {...initialState}
  const result = wordSlice.reducer(state, wordSlice.actions.getWordsRandomByUserIdFailed(error))
  assert(result.error === error)
  assert(result.loading === LoadingStates.ERROR)
})

test('getWordRandomAction', () => {
  const wordsRandom: WordModel[] = wordTestList
  const state = {...initialState, wordsRandom}
  const result = wordSlice.reducer(state, wordSlice.actions.getWordRandomAction())
  assert(result.wordRandom !== undefined)
})

test('removeWordRandomAction', () => {
  const wordsRandom: WordModel[] = wordTestList
  const state = {...initialState, wordsRandom}
  const result = wordSlice.reducer(state, wordSlice.actions.removeWordRandomAction('1'))
  assert(result.wordsRandom.length === 1)
  assert(result.wordRandom === undefined)
})

test('WordRandomAction', () => {
  const wordsRandom: WordModel[] = wordTestList
  const state = {...initialState, wordsRandom}
  const result = wordSlice.reducer(state, wordSlice.actions.WordRandomAction('1'))
  assert(result.wordsRandom.length === 1)
})

test('postWordAction', () => {
  const word: WordModel = wordTest
  const state = {...initialState}
  const result = wordSlice.reducer(state, wordSlice.actions.postWordAction(word))
  assert(result.word === word)
  assert(result.loading === LoadingStates.LOADING)
})

test('postWordSuccess', () => {
  const word: WordModel = wordTest
  const state = {...initialState}
  const result = wordSlice.reducer(state, wordSlice.actions.postWordSuccess(word))
  assert(result.words.includes(word))
  assert(result.loading === LoadingStates.LOADED)
})

test('postWordFailed', () => {
  const error = 'Error message'
  const state = {...initialState}
  const result = wordSlice.reducer(state, wordSlice.actions.postWordFailed(error))
  assert(result.error === error)
  assert(result.loading === LoadingStates.ERROR)
})

test('putWordAction', () => {
  const word: WordModel = wordTest
  const state = {...initialState}
  const result = wordSlice.reducer(state, wordSlice.actions.putWordAction(word))
  assert(result.word === word)
  assert(result.loading === LoadingStates.LOADING)
})

test('putWordSuccess', () => {
  const word: WordModel = wordTest
  const state = {...initialState, words: [{ id: '1', word: 'oldTest' }]}
  const result = wordSlice.reducer(state, wordSlice.actions.putWordSuccess(word))
  assert(result.words[0] === word)
  assert(result.loading === LoadingStates.LOADED)
})

test('putWordFailed', () => {
  const error = 'Error message'
  const state = {...initialState}
  const result = wordSlice.reducer(state, wordSlice.actions.putWordFailed(error))
  assert(result.error === error)
  assert(result.loading === LoadingStates.ERROR)
})

test('deleteWordAction', () => {
  const id = '1'
  const state = {...initialState}
  const result = wordSlice.reducer(state, wordSlice.actions.deleteWordAction(id))
  assert(result.id === id)
  assert(result.loading === LoadingStates.LOADING)
})

test('deleteWordSuccess', () => {
  const id = '1'
  const state = {...initialState, words: [wordTest]}
  const result = wordSlice.reducer(state, wordSlice.actions.deleteWordSuccess(id))
  assert(!result.words.find(w => w.id === id))
  assert(result.loading === LoadingStates.LOADED)
})

test('deleteWordFailed', () => {
  const error = 'Error message'
  const state = {...initialState}
  const result = wordSlice.reducer(state, wordSlice.actions.deleteWordFailed(error))
  assert(result.error === error)
  assert(result.loading === LoadingStates.ERROR)
})
