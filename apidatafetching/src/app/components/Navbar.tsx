"use client";
import React from "react";
import Link from "next/link";
import { DiCodeigniter } from "react-icons/di";
import { IoIosHome } from "react-icons/io";
import { FaLaptop } from "react-icons/fa";
import { HiMiniAdjustmentsHorizontal } from "react-icons/hi2";

const Navbar = () => {
  return (
    <header className="bg-slate-400 text-black">
      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center px-4 py-2 gap-4">
        <div className="font-serif text-15px font-bold">
          <h1 className="hover:underline">Data Fetching</h1>
        </div>
        <div className="flex justify-end items-center gap-4 font-serif">
          <p className="text-sm text-black hover:underline">Help</p>
          <span className="hidden sm:block border-l border-black h-5">|</span>
          <p className="text-sm text-black hover:underline">Join Us</p>
          <span className="hidden sm:block border-l border-black h-5">|</span>
          <p className="text-sm text-black hover:underline">Sign In</p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] items-center bg-slate-200 px-4 py-2 gap-4">
        {/* Logo Section */}
        <div className="flex items-center">
          <DiCodeigniter className="mr-2" />
        </div>

        {/* Navigation Section */}
        <nav className="grid grid-flow-col auto-cols-max gap-4 justify-self-end font-serif text-lg">
          <Link
            href="/"
            aria-label="Home"
            className="flex items-center px-4 hover:underline"
          >
            <IoIosHome className="mr-2" />
            <span>Home</span>
          </Link>
          <Link
            href="/client"
            aria-label="Client Side"
            className="flex items-center px-4 hover:underline"
          >
            <FaLaptop className="mr-2" />
            <span>Client Side</span>
          </Link>
          <Link
            href="/server"
            aria-label="Server Side"
            className="flex items-center px-4 hover:underline"
          >
            <HiMiniAdjustmentsHorizontal className="mr-2" />
            <span>Server Side</span>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
