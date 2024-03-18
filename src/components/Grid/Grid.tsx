import { Checkbox } from "@mui/material";
import {
  DataGrid,
  GridColDef,
  GridEventListener,
  GridRenderCellParams,
  GridRowEditStopReasons,
  GridRowModesModel,
} from "@mui/x-data-grid";
import { withTranslation } from "react-i18next";
import ActionsGrid from "./ActionsGrid";
import { useState } from "react";
import EditToolBar from "./EditToolBar";
import { GridProps } from "../../types/PropsType";
import { WordModel } from "../../models/WordModel";

function Grid({ words,t, key, title, postWord, loading, isLearned = false }: GridProps) {
  // const [loading, setLoading] = useState(false);
  const [rowModesModel, setRowModesModel] = useState<GridRowModesModel>({});

  // useEffect(() => {
  //   // if (!words) return;
  //   // setWords(words);
  // }, [words]);

  // const processRowUpdate = async (newRow: WordModel) => {
  //   setLoading(true);
  //   // const updatedRow = await putWord(newRow);
  //   // setWords(
  //   //   words.map((row: wordModel) =>
  //   //     row.id === newRow.id ? updatedRow.data : row
  //   //   )
  //   // );
  //   setLoading(false);
  //   return [];
  // };

  const handleRowModesModelChange = (newRowModesModel: GridRowModesModel) => {
    setRowModesModel(newRowModesModel);
  };

  const handleRowEditStop: GridEventListener<"rowEditStop"> = (
    params,
    event
  ) => {
    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      event.defaultMuiPrevented = true;
    }
  };

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
      renderCell: (params: GridRenderCellParams<any, boolean>) => {
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
        onRowModesModelChange={handleRowModesModelChange}
        onRowEditStop={handleRowEditStop}
        // processRowUpdate={processRowUpdate}
        onProcessRowUpdateError={(error) => console.error(error)}
        loading={loading}
      />
    </>
  );
}

export default withTranslation()(Grid);
