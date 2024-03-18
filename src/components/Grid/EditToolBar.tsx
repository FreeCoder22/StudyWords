import { Button } from "@mui/material";
import { GridToolbarContainer } from "@mui/x-data-grid";
import AddIcon from "@mui/icons-material/Add";
import { withTranslation } from "react-i18next";
import { v4 as uuidv4 } from "uuid";
import { EditGridProps } from "../../types/PropsType";

function EditToolbar({ t, postWord }: EditGridProps) {
  return (
    <GridToolbarContainer>
      <Button
        onClick={() => {
          postWord({
            id: uuidv4(),
            wordText: "test1",
            wordTranslate: "",
            isLearned: false,
            userId: "83916b51-9c27-4285-a4b2-cb188eb9aa4d",
          });
        }}
        color="primary"
        startIcon={<AddIcon />}
      >
        {t("addWord")}
      </Button>
    </GridToolbarContainer>
  );
}
export default withTranslation()(EditToolbar);
