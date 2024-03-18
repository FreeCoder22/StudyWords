import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../utils/useStore";
import { selectWordReducer, wordActions } from "./wordSlice";
import LoadingStates from "../../utils/LoadingStates";

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
  console.log("words", wordReducer.words);
  
  return (
<div>test</div>
  );
};

// Admin.propTypes = {};

export default Word;
