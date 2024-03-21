  /* eslint-disable  @typescript-eslint/no-explicit-any */

import { GridRowId, GridRowModesModel } from "@mui/x-data-grid";
import { TFunction } from "i18next";
import { Dispatch, SetStateAction } from "react";
import { WordModel } from "../models/WordModel";

export type IndexProps = {} & I18nProps

export type GridProps = {
  words: WordModel[] | null;
  key: number;
  title: string;
  isLearned?: boolean;
  loading: boolean;
  postWord: any
  putWord: any;
  deleteWord: any;
} & I18nProps

export type ActionsGridProps = {
  id: GridRowId;
  setRowModesModel: Dispatch<SetStateAction<GridRowModesModel>>;
  rowModesModel: GridRowModesModel;
  deleteWord: any;
} & I18nProps

export type EditGridProps =  {
  postWord: any;
} & I18nProps

export type WordProps =  {} & I18nProps

export type RandomWordProps =  {} & I18nProps

export type DrawerProps = {} & I18nProps

export type SettingsProps = {} & I18nProps

export interface I18nProps {
  t: TFunction;
}
