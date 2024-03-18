import { GridRowModesModel } from "@mui/x-data-grid";
import { TFunction } from "i18next";
import { Dispatch, SetStateAction } from "react";
import { WordModel } from "../models/WordModel";

export type IndexProps = {
  t: TFunction;
};

export type GridProps = {
  words: WordModel[] | null;
  key: number;
  title: string;
  isLearned?: Boolean;
  t: TFunction;
};

export type ActionsGridProps = {
  id: string;
  setRowModesModel: Dispatch<SetStateAction<GridRowModesModel>>;
  rowModesModel: GridRowModesModel;
  t: TFunction;
};
