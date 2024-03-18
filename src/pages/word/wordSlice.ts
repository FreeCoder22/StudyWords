import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { WordModel } from "../../models/WordModel";
import LoadingStates from "../../utils/LoadingStates";
import { RootState } from "../../utils/store";

export interface WordState {
  words: WordModel[];
  word?: WordModel | null;
  loading: LoadingStates;
  error?: string;
}

const initialState: WordState = {
  loading: LoadingStates.LOADING,
  words: [],
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

    postWordAction: (state) => {
      return { ...state, loading: LoadingStates.LOADING };
    },
    postWordIdSuccess: (state, action: PayloadAction<WordModel>) => {
       state.words.push(action.payload)
       state.loading = LoadingStates.LOADED 
    },
    postWordIdFailed: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = LoadingStates.ERROR;
    },

    putWordAction: (state, action: PayloadAction<WordModel>) => {
      return { ...state, loading: LoadingStates.LOADING };
    },
    putWordIdSuccess: (state, action: PayloadAction<WordModel>) => {
      state.words = state.words.map(w => w.id === action.payload.id ? action.payload : w)
      state.loading = LoadingStates.LOADED;
    },
    putWordIdFailed: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = LoadingStates.ERROR;
    },
  },
});

// Action creators are generated for each case reducer function
export const wordActions = wordSlice.actions;

export const selectWordReducer = (state: RootState) => state.wordReducer;
export const selectWord = (state: RootState) => state.wordReducer.word;

export default wordSlice.reducer;
