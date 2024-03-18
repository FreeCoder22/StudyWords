import { Button } from "@mui/material";
import { GridToolbarContainer } from "@mui/x-data-grid";
import AddIcon from "@mui/icons-material/Add";
import { withTranslation } from "react-i18next";
import { EditGridProps } from "../../types/PropsType";
import i18n from "../../utils/i18n";
function EditToolbar({ t }: EditGridProps) {
  console.log('t', i18n.t('addWord'));
  console.log('i18n', i18n);
  
  return (
    <GridToolbarContainer>
      <Button type="submit" color="primary" startIcon={<AddIcon />}>
        {i18n.t("addWord")}
      </Button>
    </GridToolbarContainer>
  );
}
export default withTranslation()(EditToolbar);
