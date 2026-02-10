import React from "react";
import { GoHeartFill } from "react-icons/go";
import { HiShoppingBag } from "react-icons/hi2";
import { IoSearchOutline } from "react-icons/io5";

function Navbar() {
  return (
    <header className="bg-white">
      {/* NavBar Section */}
      {/* max-w-[1400px] mx-auto px-10 ye properties sab sections me rahenge kyuki isse hamare website ko alignment milega. */}
      <nav className="max-w-[1400px] mx-auto px-10 h-[14vh] items-center flex justify-between">
        {/* LOGO  */}
        <a href="#" className="text-3xl font-bold">
          Gr<span className="text-orange-500 uppercase">o</span>cery
        </a>

        {/* Desktop */}
        <ul className="flex items-center gap-x-15">
          <li>
            <a
              href="#"
              className="font-semibold tracking-wider text-orange-500"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500"
            >
              About us
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500"
            >
              Contact us
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500"
            >
              Courses
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500"
            >
              Visit
            </a>
          </li>
        </ul>

        {/* Nav Action  */}
        <div className="flex items-center gap-x-5">
          {/* input field */}
          <div className="flex items-center border-2 p-1 border-orange-500 rounded-full">
            <input
            className="flex-1 px-3 h-[5vh] focus-visible:outline-none"
              type="text"
              name="text"
              id="text"
              placeholder="search..."
              autoComplete="off"
            />
            <button className="bg-gradient-to-b from-red-600 to-orange-200 text-white w-10 h-10 flex justify-center rounded-full items-center text-xl">
              <IoSearchOutline />
            </button>
          </div>
          <a href="#" className="text-2xl text-zinc-800 hover:text-orange-500">
            <GoHeartFill />
          </a>
          <a href="#" className="text-2xl text-zinc-800 hover:text-orange-500">
            <HiShoppingBag />
          </a>
        </div>
      </nav>
    </header>
  );
}
export default Navbar;
