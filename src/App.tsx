import './App.css'
import ErrorPage from './pages/error-page';
import WordLearnedList from './pages/word/WordLearnedList';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import WordList from './pages/word/WordList';
import Root from './pages/root';
import Settings from './pages/settings/settings';
import RandomWord from './pages/game/randomWord';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
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

  return (
    <RouterProvider router={router} />
  )
}

export default App
