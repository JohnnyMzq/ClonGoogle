import React from "react";
import { Link } from "react-router-dom";

import Search from './Search'

const Navbar = ({ darkTheme, setDarkTheme }) => {
  return (
    <div className="p-5 pb-0 flex flex-wrap sm:justify-between justify-center items-center border-b dark:border-gray-700 border-gray-200">
      <div className="flex justify-between items-center space-x-5 w-screen ">
        <Link to="/">
          <p className="text-2xl bg-blue-500 font-bold text-white py-1 px-2 rounded dark:bg-slate-50 dark:text-blue-500">
            Google 🔎
          </p>
        </Link>
        <button
          type="button"
          className="tex-xl bg-gray-800 text-slate-50 dark:bg-blue-500 dark:text-slate-50  border rounded-full px-2 py-1 font-bold hover:shadow-lg"
          onClick={() => setDarkTheme(!darkTheme)}
        >
          {darkTheme ? "Light 💡 " : "Dark 🌙"}
        </button>
      </div>
      <Search />
    </div>
  );
};

export default Navbar;
