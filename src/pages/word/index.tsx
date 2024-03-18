import { useEffect } from "react";
import { withTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "../../utils/useStore";
import { selectWordReducer, wordActions } from "./wordSlice";
import LoadingStates from "../../utils/LoadingStates";
import Grid from "../../components/Grid/Grid";
import { WordProps } from "../../types/PropsType";
import Loader from "../../components/Loader";

const Word = ({ t }: WordProps): JSX.Element => {
  document.title = "words";
  const dispatch = useAppDispatch();
  const wordReducer = useAppSelector(selectWordReducer);

  useEffect(() => {
    dispatch(wordActions.getWordsByUserIdAction("83916b51-9c27-4285-a4b2-cb188eb9aa4d"));
  }, []);
  if(wordReducer.loading === LoadingStates.LOADING){
    return <Loader/>
  }
  
  return (
<Grid words={wordReducer.words ?? []} key={1} title={t('wordStudyList')}  isLearned={false}  />
  );
};

export default  withTranslation()(Word);
