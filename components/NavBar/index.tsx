"use client";
import React, { useEffect, useRef, useState } from "react";

import Link from "next/link";

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
import { SettingLists } from "./SettingList";

type NavBarProps = DarkModeTypes & { currentPath: string };

const NavBar = ({ darkMode, setDarkMode, currentPath }: NavBarProps) => {
  const [showSidebar, setShowSidebar] = useState<boolean>(false);

  const settingDropdownRef = useRef<HTMLDivElement>(null);
  const settingSideBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!showSidebar) return;
    function handleClickOutside(event: MouseEvent) {
      if (
        settingDropdownRef.current &&
        !settingDropdownRef.current.contains(event.target as Node) &&
        settingSideBarRef.current &&
        !settingSideBarRef.current.contains(event.target as Node)
      ) {
        setShowSidebar(false);
      }
    }
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [showSidebar]);

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
          <img src="/you-logo.svg" alt="You Logo" className="navbar_logo" />
        </Link>

        <div className="flex space-x-1 md:hidden">
          <Button
            onClick={() => alert("Sign in is component comming soon!")}
            className="primary_button rounded-full flex "
          >
            Sign In
          </Button>

          <Button
            className="primary_icon_button rounded-full flex"
            onClick={() => setShowSidebar(!showSidebar)}
          >
            <Icon
              name={showSidebar ? icons.close : icons.settings}
              className={"w-4 h-4"}
            />
          </Button>
        </div>
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
          onClick={() => alert("Sign in is component comming soon!")}
          className="primary_button rounded-full font-bold"
        >
          Sign In
        </Button>
        <div className="relative inline-block text-left">
          <Button
            className="primary_icon_button rounded-full flex"
            onClick={() => setShowSidebar(!showSidebar)}
          >
            <Icon
              name={showSidebar ? icons.close : icons.settings}
              className={"w-6 h-6"}
            />
          </Button>

          {/* SETTING-BAR on large screens */}
          {showSidebar && (
            <>
              <div ref={settingDropdownRef} className={`setting_container`}>
                <SettingLists darkMode={darkMode} setDarkMode={setDarkMode} />
              </div>
            </>
          )}
        </div>
      </div>

      {/* SETTING-BAR on mobile */}
      <aside
        ref={settingSideBarRef}
        id="default-sidebar"
        className={`setting_mobile_wrapper ${
          showSidebar ? "" : "-translate-x-full"
        } md:-translate-x-full`}
      >
        <div className="setting_mobile_container">
          <SettingLists darkMode={darkMode} setDarkMode={setDarkMode} />
        </div>
      </aside>
    </header>
  );
};

export default NavBar;
