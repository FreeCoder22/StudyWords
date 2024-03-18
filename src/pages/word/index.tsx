import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../utils/useStore";
import { selectWordReducer, wordActions } from "./wordSlice";
import LoadingStates from "../../utils/LoadingStates";
import Grid from "../../components/Grid/Grid";

const Word = (): JSX.Element => {
  document.title = "words";
  const dispatch = useAppDispatch();
  const wordReducer = useAppSelector(selectWordReducer);

  useEffect(() => {
    dispatch(wordActions.getWordsByUserIdAction("83916b51-9c27-4285-a4b2-cb188eb9aa4d"));
  }, []);
  if(wordReducer.loading === LoadingStates.LOADING){
    return <div>Loading...</div>
  }
  
  return (
<Grid words={wordReducer.words ?? []} t={null}  key={1} title='liste'  isLearned={false}  />
  );
};

export default Word;
