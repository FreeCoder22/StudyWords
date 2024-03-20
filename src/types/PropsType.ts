import { GridRowId, GridRowModesModel } from "@mui/x-data-grid";
import { TFunction } from "i18next";
import { Dispatch, SetStateAction } from "react";
import { WordModel } from "../models/WordModel";

export interface IndexProps extends I18nProps  {
};

export interface GridProps extends I18nProps {
  words: WordModel[] | null;
  key: number;
  title: string;
  isLearned?: boolean;
  loading: boolean;
  postWord: any;
  putWord: any;
  deleteWord: any;
};

export interface ActionsGridProps extends I18nProps  {
  id: GridRowId;
  setRowModesModel: Dispatch<SetStateAction<GridRowModesModel>>;
  rowModesModel: GridRowModesModel;
  deleteWord: any;
};

export interface EditGridProps extends I18nProps {
  postWord: any;
};

export interface WordProps extends I18nProps {
};

export interface RandomWordProps extends I18nProps {
};

export interface DrawerProps extends I18nProps {
};

export interface SettingsProps extends I18nProps {
};

export interface I18nProps {
 t : TFunction;
};
