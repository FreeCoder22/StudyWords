import { GridActionsCellItem, GridRowId, GridRowModes } from "@mui/x-data-grid";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Close';
import { ActionsGridProps } from "../../types/PropsType";
import { withTranslation } from "react-i18next";
// import { deletetWords } from "~/utils/request";
// import { useContext } from "react";
// import { Context } from "~/context";
// import { ActionsGridProps } from "~/types/PropsType";
// import { wordModel } from "~/models/word";

function ActionsGrid ({ id, setRowModesModel, rowModesModel, } : ActionsGridProps) {



  // const handleEditClick = (id: GridRowId) => () => {
  //   setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
  // };

  const handleSaveClick = (id: GridRowId) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
  };

  // const handleDeleteClick =  (id: GridRowId) => async () => {
  //   await deletetWords([id])
  //   setWords(words.filter((row) => row.id !== id));
  // };
  // const handleCancelClick = (id: GridRowId) => () => {
  //   setRowModesModel({
  //     ...rowModesModel,
  //     [id]: { mode: GridRowModes.View, ignoreModifications: true },
  //   });

  //   const editedRow = words.find((row) => row.id === id);
  //   if (editedRow!.isNew) {
  //     setWords(words.filter((row) => row.id !== id));
  //   }
  // };

const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

        if (isInEditMode) {
          return [
            <GridActionsCellItem
              icon={<SaveIcon />}
              label="Save"
              sx={{
                color: 'primary.main',
              }}
              onClick={handleSaveClick(id)}
            />,
            <GridActionsCellItem
              icon={<CancelIcon />}
              label="Cancel"
              className="textPrimary"
              // onClick={handleCancelClick(id)}
              color="inherit"
            />,
          ];
        }

        return [
          <GridActionsCellItem
            icon={<EditIcon />}
            label="Edit"
            className="textPrimary"
            // onClick={handleEditClick(id)}
            color="inherit"
          />,
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            // onClick={handleDeleteClick(id)}
            color="inherit"
          />,
        ];


}

export default withTranslation()(ActionsGrid);


