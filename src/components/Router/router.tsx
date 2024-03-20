import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../../pages/error-page";
import RandomWord from "../../pages/game/randomWord";
import Settings from "../../pages/settings/settings";
import WordLearnedList from "../../pages/word/WordLearnedList";
import WordList from "../../pages/word/WordList";
import DrawerRoot from "./DrawerRoot";

export default createBrowserRouter([
    {
      path: "/",
      element: <DrawerRoot />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <WordList />,
        },
        {
          path: "word",
          element: <WordList />,
        },
        {
          path: "wordLearned",
          element: <WordLearnedList />,
        },
        {
          path: "randomWord",
          element: <RandomWord />,
        },
        {
          path: "settings",
          element: <Settings />,
        },
      ],
      
    },
  ]);