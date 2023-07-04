import React, { useEffect, useState } from "react";

import Link from "next/link";
import Image from "next/image";

// assets
import { icons } from "@/assets/icons";

// constants
import { leftNavItems, rightNavItems } from "@/constants";

// Types
import { DarkModeTypes } from "@/types";

// components
import NavItem from "./NavItem";
import { IconButton } from "../";
import { Button } from "../";
import { Icon } from "../Utils";

type NavBarProps = DarkModeTypes & { currentPath: string };

const NavBar = ({ darkMode, setDarkMode, currentPath }: NavBarProps) => {
  return (
    <header className="header__container">
      {/* Left part nav items */}
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
          <img
            src="/you-logo.svg"
            alt="You Logo"
            className="mr-3 w-[90px] h-[40px] md:w-[160px] md:h-[70px]"
          />
        </Link>
        <Button
          className="primary_icon_button rounded-full flex md:hidden"
          onClick={() => {}}
        >
          <Icon name={icons.settings} className={"w-5 h-5 md:w-6 md:h-6"} />
        </Button>
      </div>

      {/* Center side elements */}
      <div className="header_center_contents hide-scrollbar">
        {leftNavItems.map((item, index) => {
          return (
            <NavItem
              key={index}
              href={item.href}
              title={item.title}
              icon={item.icon}
              className={
                currentPath === item.href ? "active_navitem" : "normal_nav"
              }
              // navItemStyle={
              //   currentPath === item.href ? "active_navitem rounded-full" : ""
              // }
            />
          );
        })}
      </div>

      {/* Right side elements */}
      <div className={`header_right_content`}>
        {rightNavItems.map((item, index) => {
          return (
            <NavItem
              key={index}
              href={item.href}
              title={item.title}
              icon={item.icon}
            />
          );
        })}

        <Button
          onClick={() => alert("done!")}
          className="primary_button rounded-3xl whitespace-nowrap"
        >
          Sign In
        </Button>

        {/* Right side elements */}
        <div className="relative inline-block text-left">
          <Button
            className="primary_icon_button rounded-full flex"
            onClick={() => {}}
          >
            <Icon name={icons.settings} className={"w-6 h-6"} />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
