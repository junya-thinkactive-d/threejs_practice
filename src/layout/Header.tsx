import React from "react";
import { menuLists } from "../constants/index";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  return (
    <>
      <div className="flex justify-center items-center w-full h-20 bg-stone-800 text-white">
        <ul className="flex justify-center items-center flex-wrap w-full h-full">
          {menuLists.map((menu, i) => (
            <li
              key={i}
              className={`flex justify-center items-center cursor-pointer h-full px-4 duration-300 hove:duration-300 ${
                location.pathname !== menu.path
                  ? " hover:bg-red-400"
                  : "bg-red-400"
              } `}
            >
              <a
                href={menu.path}
                className="flex justify-center items-center w-full h-full"
              >
                {menu.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Header;
