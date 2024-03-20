import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { withTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../utils/useStore";
import { selectWordReducer, wordActions } from "../word/wordSlice";
import Loader from "../../components/Loader";
import LoadingStates from "../../utils/LoadingStates";
import { WordModel } from "../../models/WordModel";
import { RandomWordProps } from "../../types/PropsType";
import InfoIcon from "@mui/icons-material/Info";
import CloseIcon from "@mui/icons-material/Close";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";

const RandomWord = ({ t }: RandomWordProps) => {
  const dispatch = useAppDispatch();

  const wordReducer = useAppSelector(selectWordReducer);
  const [response, setResponse] = useState("");
  const [IsCorrect, setIsCorrect] = useState(false);
  const [correction, setCorrection] = useState<WordModel | null>(null);
  const [wordCount, setWordCount] = useState(0);
  const [correctWordCounter, setCorrectWordCounter] = useState(0);

  useEffect(() => {
    dispatch(
      wordActions.getWordsRandomByUserIdAction(
        "83916b51-9c27-4285-a4b2-cb188eb9aa4d"
      )
    );
    return () => {
      dispatch(wordActions.cleanGameAction())
    }
  }, []);
  
  useEffect(() => {
    if (
      wordCount === 0
    )
      setWordCount(wordReducer.wordsRandom.length);
  }, [wordReducer.wordsRandom]);

  useEffect(() => {
    dispatch(wordActions.getWordRandomAction());
  }, [wordReducer.wordsRandom || wordReducer.wordRandom]);

  const checkResponse = (id: string) => {
    const realValue = wordReducer.wordsRandom.find((w) => w.id === id);
    if (
      response.trim().toUpperCase() ===
      realValue?.wordTranslate.trim().toUpperCase()
    ) {
      setResponse("");
      setIsCorrect(true);
      setCorrection(realValue);
      setCorrectWordCounter(correctWordCounter + 1);
      return;
    }
    setCorrection(realValue ?? null);
    setIsCorrect(false);
  };

  function GameFinishRender() {
    return (
      <>
        <Typography variant="h3">{t("randomWord.gameFinish")}</Typography>
        <Typography variant="h4">
          {correctWordCounter} / {wordCount}
        </Typography>
        <Button onClick={() => window.document.location.reload()} >{t("randomWord.restart")}</Button>
      </>
    );
  }

  if (wordReducer.isGameFinish) return GameFinishRender();
  if (wordReducer.loading === LoadingStates.LOADING || !wordReducer.wordRandom)
    return <Loader />;

  function CardRender() {
    if (correction) {
      return (
        <>
          <Typography variant="h4" color="green">
            {correction.wordTranslate}
          </Typography>
          <Typography variant="h4" color={IsCorrect ? "blue" : "red"}>
            {response}{" "}
            {IsCorrect ? <ThumbUpOffAltIcon color="success" /> : <CloseIcon />}
          </Typography>
          <Button
            onClick={() => {
              dispatch(wordActions.removeWordRandomAction(correction.id));
              setCorrection(null);
              setResponse("");
            }}
          >
            {t("randomWord.nextWord")}
          </Button>
        </>
      );
    }
    return (
      <>
        <Stack>
          <TextField onChange={(e) => setResponse(e.target.value)} />
          <Stack direction="row" spacing={2}>
            <InfoIcon />
            <Typography>Traduite le texte en français</Typography>
          </Stack>
          <Button
            onClick={() => checkResponse(wordReducer.wordRandom?.id as string)}
          >
            {t("randomWord.submit")}
          </Button>
        </Stack>
      </>
    );
  }

  return (
    <Card>
      <CardHeader>
        <Typography>{t("randomWord.title")}</Typography>
      </CardHeader>
      <CardContent>
        <Stack alignItems="center">
          <Typography variant="h3" color="blue">
            {wordReducer.wordRandom?.wordText}
          </Typography>
          {CardRender()}
        </Stack>
      </CardContent>
    </Card>
  );
};

export default withTranslation()(RandomWord);
