import { Button } from "@mui/material";
import { GridToolbarContainer } from "@mui/x-data-grid";
import AddIcon from "@mui/icons-material/Add";
import { withTranslation } from "react-i18next";

function EditToolbar({ t }) {
  return (
    <GridToolbarContainer>
      <Button type="submit" color="primary" startIcon={<AddIcon />}>
        {t("addWord")}
      </Button>
    </GridToolbarContainer>
  );
}
export default withTranslation()(EditToolbar);
