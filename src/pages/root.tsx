import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <>
      <div id="sidebar">
        <nav>
          <ul>
            <li>
              <a href={`/Word`}>Words list</a>
            </li>
            <li>
              <a href={`/WordLearned`}>Word Learned</a>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}
