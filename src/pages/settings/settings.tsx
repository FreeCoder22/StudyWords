import { Button, ButtonGroup } from "@mui/material";
import { withTranslation } from "react-i18next";
import i18n from "../../utils/i18n";

const Settings = ({ t }) => {
  return (
    <>
      <div>{t("settings.changeLanguage")}</div>
      <ButtonGroup variant="contained" aria-label="Basic button group">
        {i18n.languages.sort().map((lang: string) => (
          <Button onClick={() => i18n.changeLanguage(lang)}>
            {t(`settings.${lang}`)}
          </Button>
        ))}
      </ButtonGroup>
    </>
  );
};

export default withTranslation()(Settings);
