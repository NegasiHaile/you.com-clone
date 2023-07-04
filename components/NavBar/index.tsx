"use client";
import React, { useEffect, useState } from "react";

import Link from "next/link";
import Image from "next/image";

// assets
import { icons } from "@/assets/icons";

// Types
import { DarkModeTypes } from "@/types";

// components
import IconButton from "../Buttons/IconButton";

const NavBar = ({ darkMode, setDarkMode }: DarkModeTypes) => {
  return (
    <header className="header__container">
      <div className="header_left_content">
        <div className="header_left_mobile">
          <IconButton iconName={icons.menu} onClick={() => {}} />

          <IconButton
            iconName={icons.upload}
            iconStyle="w-5 h-5"
            onClick={() => {}}
          />
        </div>

        <Link href="/">
          <Image
            src="/you-logo.svg"
            alt="You Logo"
            className=" text-gray-800 dark:text-white mr-2"
            width={112}
            height={29}
            priority
          />
        </Link>

        <div
          className="block md:hidden p-4 bg-blue-500 text-white rounded-full cursor-pointer hover:bg-blue-600 dark:hover:bg-blue-400"
          // onClick={() => setShowSidebar(!showSidebar)}
        >
          <IconButton
            iconName={icons.settings}
            className=""
            onClick={() => {}}
          />
        </div>
      </div>
    </header>
  );
};

export default NavBar;
