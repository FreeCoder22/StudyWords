import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { WordModel } from "../../models/WordModel";
import LoadingStates from "../../utils/LoadingStates";
import { RootState } from "../../utils/store";

export interface WordState {
  words: WordModel[];
  wordsRandom: WordModel[];
  word?: WordModel | null;
  wordRandom?: WordModel;
  loading: LoadingStates;
  isGameFinish?: boolean;
  error?: string;
}

const initialState: WordState = {
  loading: LoadingStates.LOADING,
  words: [],
  wordsRandom: [],
  isGameFinish: false,
};

export const wordSlice = createSlice({
  name: "word",
  initialState,
  reducers: {
    getWordsByUserIdAction: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        userId: action.payload,
        loading: LoadingStates.LOADING,
      };
    },
    getWordsByUserIdSuccess: (state, action: PayloadAction<WordModel[]>) => {
      state.words = action.payload;
      state.loading = LoadingStates.LOADED;
    },
    getWordsByUserIdFailed: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = LoadingStates.ERROR;
    },

    getWordsRandomByUserIdAction: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        userId: action.payload,
        loading: LoadingStates.LOADING,
      };
    },
    getWordsRandomByUserIdSuccess: (state, action: PayloadAction<WordModel[]>) => {
      state.wordsRandom = action.payload;
      state.loading = LoadingStates.LOADED;
    },
    getWordsRandomByUserIdFailed: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = LoadingStates.ERROR;
    },
    
    getWordRandomAction: (state) => {
      if (!state.wordsRandom || state.wordsRandom.length <= 0) return;

    // debugger
    const word =
    state.wordsRandom[
        Math.floor(Math.random() * state.wordsRandom.length)
      ];
    state.wordRandom = word;
    },
    removeWordRandomAction: (state, action: PayloadAction<string>) => {
      const index = state.wordsRandom.findIndex((w) => w.id === action.payload);
      state.wordsRandom?.splice(index, 1);
      state.wordRandom = undefined;
      if(state.wordsRandom.length === 0)
      state.isGameFinish = true;

    } ,
    WordRandomAction: (state, action: PayloadAction<string>) => {
      const index = state.wordsRandom.findIndex((w) => w.id === action.payload);
      state.wordsRandom?.splice(index, 1);
    } ,
    postWordAction: (state, action: PayloadAction<WordModel>) => {
      return { ...state, loading: LoadingStates.LOADING };
    },
    postWordSuccess: (state, action: PayloadAction<WordModel>) => {
       state.words.push(action.payload)
       state.loading = LoadingStates.LOADED 
    },
    postWordFailed: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = LoadingStates.ERROR;
    },

    putWordAction: (state) => {
      return { ...state, loading: LoadingStates.LOADING };
    },
    putWordSuccess: (state, action: PayloadAction<WordModel>) => {
      state.words = state.words.map(w => w.id === action.payload.id ? action.payload : w)
      state.loading = LoadingStates.LOADED;
    },
    putWordFailed: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = LoadingStates.ERROR;
    },

    deleteWordAction: (state, action: PayloadAction<string>) => {
      return { ...state, id: action.payload, loading: LoadingStates.LOADING };
    },
    deleteWordSuccess: (state, action: PayloadAction<string>) => {
      const index = state.words.findIndex(w => w.id === action.payload);
      state.words.splice(index, 1);
      state.loading = LoadingStates.LOADED;
    },
    deleteWordFailed: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = LoadingStates.ERROR;
    },

    cleanGameAction: (state) => {
      state.isGameFinish = false
    },
    
  },
});

// Action creators are generated for each case reducer function
export const wordActions = wordSlice.actions;

export const selectWordReducer = (state: RootState) => state.wordReducer;
export const selectWord = (state: RootState) => state.wordReducer.word;

export default wordSlice.reducer;
