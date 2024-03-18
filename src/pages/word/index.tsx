import { useEffect } from "react";
import { withTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "../../utils/useStore";
import LoadingStates from "../../utils/LoadingStates";
import Grid from "../../components/Grid/Grid";
import { WordProps } from "../../types/PropsType";
import { selectWordReducer, wordActions } from "./wordSlice";
import { WordModel } from "../../models/WordModel";

const Word = ({ t }: WordProps): JSX.Element => {
  document.title = "words";
  const dispatch = useAppDispatch();
  const wordReducer = useAppSelector(selectWordReducer);

  useEffect(() => {
    dispatch(
      wordActions.getWordsByUserIdAction("83916b51-9c27-4285-a4b2-cb188eb9aa4d")
    );
  }, []);

  useEffect(() => {
    if(wordReducer.loading === LoadingStates.LOADING)
    dispatch(
      wordActions.getWordsByUserIdAction("83916b51-9c27-4285-a4b2-cb188eb9aa4d")
    );
  }, [wordReducer.loading]);

  if(wordReducer.error){
    // page 404
    return <div>{wordReducer.error}</div>
  }

  return (
    <Grid
      words={wordReducer.words ?? []}
      key={1}
      title={t("wordStudyList")}
      isLearned={false}
      loading={wordReducer.loading === LoadingStates.LOADING}
      postWord={(word: WordModel) => dispatch(wordActions.postWordAction(word))}
    />
  );
};

export default withTranslation()(Word);
