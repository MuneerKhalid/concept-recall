"use client"

import React, { useState } from "react";
import Logo from "./Logo";
import Links from "./Links";
import ContactButtons from "./ContactButtons";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-black text-white flex items-center justify-between pr-12 pl-12 py-4 sm:px-24 md:px-36 lg:px-38 max-w-full">
      <Logo />

      <div className="hidden xl:flex items-center space-x-6">
        <Links />
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md">
          Speak to an Expert
        </button>
      </div>

      <div className="hidden xl:flex">
        <ContactButtons />
      </div>

      <div className="xl:hidden">
        <button onClick={toggleMenu} aria-label="Toggle Menu">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {isOpen && <MobileMenu onClose={toggleMenu} />}
    </nav>
  );
};

export default Navbar;
