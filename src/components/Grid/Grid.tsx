import { Checkbox } from "@mui/material";
import {
  DataGrid,
  GridColDef,
  GridRenderCellParams,
  GridRowModesModel,
  GridValidRowModel,
} from "@mui/x-data-grid";
import { withTranslation } from "react-i18next";
import ActionsGrid from "./ActionsGrid";
import { useState } from "react";
import EditToolBar from "./EditToolBar";
import { GridProps } from "../../types/PropsType";
import { WordModel } from "../../models/WordModel";

function Grid({ words,t, key, title, isLearned = false, loading, postWord, putWord, deleteWord }: GridProps) {
  const [rowModesModel, setRowModesModel] = useState<GridRowModesModel>({});

  const getWords = () =>
    words?.filter((word: WordModel) => word.isLearned === isLearned);

  const columns: GridColDef[] = [
    { field: "wordText", headerName: t("dataGrid.word"), width: 150, editable: true },
    { field: "wordTranslate", headerName: t("dataGrid.wordTranlate"), width: 150 },
    {
      field: "isLearned",
      headerName: t("dataGrid.isLearned"),
      width: 150,
      type: "boolean",
      editable: true,
      renderCell: (params: GridRenderCellParams<GridValidRowModel, boolean>) => {
        return <Checkbox checked={params?.value} />;
      },
    },
    {
      field: "actions",
      type: "actions",
      headerName: t("dataGrid.actions"),
      width: 100,
      cellClassName: "actions",
      getActions: ({ id }) => {
        return [
          <ActionsGrid
            setRowModesModel={setRowModesModel}
            rowModesModel={rowModesModel}
            id={id}
            deleteWord={deleteWord}
          />,
        ];
      },
    },
  ];

  return (
    <>
      <div>{title}</div>
      <DataGrid
        key={key}
        rows={getWords() ?? []}
        columns={columns}
        slots={{ toolbar: !isLearned ? EditToolBar: null }}
        slotProps={{
          toolbar: { setRowModesModel, postWord },
        }}
        editMode="row"
        rowModesModel={rowModesModel}
        processRowUpdate={(value) => putWord(value)}
        onProcessRowUpdateError={(error) => console.error(error)}
        loading={loading}
      />
    </>
  );
}

export default withTranslation()(Grid);
