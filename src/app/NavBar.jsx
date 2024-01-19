"use client";
import { useState } from "react";
import "./globals.css";
const NavBar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  
    const toggleMenu = () => {
      setMenuOpen(!isMenuOpen);
    };
  
  return (
    <div>
      <div className="md:flex hidden items-center justify-between mb-10 w-full">
        <img src="/logo.svg" alt="" />
        <div className="space-x-7">
          <a href="/" className="hover:text-softRed cursor-pointer">
            Home
          </a>
          <a href="/" className="hover:text-softRed cursor-pointer">
            New
          </a>
          <a href="/" className="hover:text-softRed cursor-pointer">
            Popular
          </a>
          <a href="/" className="hover:text-softRed cursor-pointer">
            Trending
          </a>
          <a href="/" className="hover:text-softRed cursor-pointer">
            Categories
          </a>
        </div>
      </div>
      <div className="flex items-center justify-between mb-10 w-full md:hidden">
        <img src="/logo.svg" alt="" />
        {/* <div className={`sidebar ${isMenuOpen ? "open" : ""}`}> */}
        <button onClick={toggleMenu} className="md:hidden flex right-7 absolute">
                <img src="/icon-menu.svg" alt="" />
        </button>
          {isMenuOpen &&
            <div className=" bg-white flex-col md:hidden flex fixed right-0 w-[70%] h-screen p-10 top-0 menuBar">
              <button onClick={toggleMenu} className="md:hidden flex right-7 absolute">
                <img src="/icon-menu-close.svg" alt="" />
              </button>
              <a
                href="/"
                className="hover:text-softRed cursor-pointer pt-16 pb-5"
              >
                Home
              </a>
              <a href="/" className="hover:text-softRed cursor-pointer py-5">
                New
              </a>
              <a href="/" className="hover:text-softRed cursor-pointer py-5">
                Popular
              </a>
              <a href="/" className="hover:text-softRed cursor-pointer py-5">
                Trending
              </a>
              <a href="/" className="hover:text-softRed cursor-pointer py-5">
                Categories
              </a>
            </div>
          }
        {/* </div> */}
      </div>
    </div>
  );
};

export default NavBar;
