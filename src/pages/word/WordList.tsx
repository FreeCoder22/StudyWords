import { useEffect } from "react";
import { withTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "../../utils/useStore";
import LoadingStates from "../../utils/LoadingStates";
import Grid from "../../components/Grid/Grid";
import { WordProps } from "../../types/PropsType";
import { selectWordReducer, wordActions } from "./wordSlice";
import { WordModel } from "../../models/WordModel";
import useCurrentUser from "../../hooks/useCurrentUser";

const WordList = ({ t }: WordProps): JSX.Element => {
  document.title = "words";
  const dispatch = useAppDispatch();
  const wordReducer = useAppSelector(selectWordReducer);
  const currentUser = useCurrentUser()
  
  useEffect(() => {
    
    if(currentUser)
    dispatch(
      wordActions.getWordsByUserIdAction(currentUser.id)
    );
  }, [currentUser]);

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
      putWord={(word: WordModel) => dispatch(wordActions.putWordAction(word))}
      deleteWord={(id: string) => dispatch(wordActions.deleteWordAction(id))}
    />
  );
};

export default withTranslation()(WordList);
