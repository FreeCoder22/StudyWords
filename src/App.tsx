import './App.css'
import ErrorPage from './pages/error-page';
import Root from './pages/root';
import WordLearnedList from './pages/word/WordLearnedList';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import WordList from './pages/word/WordList';

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
          path: "WordLearned",
          element: <WordLearnedList />,
        },
      ],
      
    },
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App
