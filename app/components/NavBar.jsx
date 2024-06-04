import React from "react";
import Link from "next/link";

const NavBar = () => {
  return (
    <div className="flex justify-center w-full bg-yellow-100 h-12">
      <nav className="flex justify-between items-center  bg-yellow-300 w-5/6 px-4 ">
        <h1 className="font-semibold">
          Logo <span className="text-blue-700 font-normal">Name</span>
        </h1>
        <ul className="flex justify-centre items-center gap-6 bg-yellow-400">
          <li className="bg-yellow-500 hover:text-blue-500">
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link className="hover:text-blue-500" href="/page-two">
              Sign Up
            </Link>
          </li>
          <li>
            <Link className="hover:text-blue-500" href="/page-one">
              Badge
            </Link>
          </li>
          <li>
            <Link className="hover:text-blue-500" href="/page-three">
              FlexGrid
            </Link>
          </li>
          <li>
            <Link className="hover:text-blue-500" href="/page-four">
              Input
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
