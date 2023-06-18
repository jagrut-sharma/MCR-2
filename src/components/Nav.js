import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="flex justify-between shadow-md items-center">
      <Link
        to={"/"}
        className="text-3xl font-bold p-4 font-Merriweather hover:bg-black hover:text-white"
      >
        Habit Tracker
      </Link>
      <Link
        to={"/archive"}
        className="text-2xl p-4 pr-2 font-Libre font-bold hover:bg-black hover:text-white"
      >
        Archived
      </Link>
    </nav>
  );
}
