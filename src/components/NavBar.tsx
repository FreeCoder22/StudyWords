import { Box, Tab, Tabs } from "@mui/material";
import { NavLink, matchPath, useLocation } from "@remix-run/react";
import { listTypeEnum } from "~/enums/listTypeEnum";
import Words from "../routes/words.$listType";
export default function NavBar() {

  return (
    <ul className="flex border-b">
      <li className="-mb-px mr-1">
        <a
          className="bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-700 font-semibold"
          href="#"
        >
          <NavLink to={`words/${listTypeEnum.wordStudyList}`}>list 1</NavLink>
        </a>
      </li>
      <li className="mr-1">
        <a
          className="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold"
          href="#"
        >
          <NavLink to={`words/${listTypeEnum.wordLearnedList}`}>list 1</NavLink>
        </a>
      </li>
      <li className="mr-1">
        <a
          className="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold"
          href="#"
        >
          Tab
        </a>
      </li>
      <li className="mr-1">
        <a
          className="bg-white inline-block py-2 px-4 text-gray-400 font-semibold"
          href="#"
        >
          Tab
        </a>
      </li>
    </ul>
   
  );
}
