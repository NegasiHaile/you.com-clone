import React, { useEffect, useState } from "react";
import Button from "../Buttons/Button";
import { Icon } from "../Utils";

// constants
import { Connects, QuickSettings } from "@/constants";
import { icons } from "@/assets/icons";
import Link from "next/link";
import { DarkModeTypes } from "@/types";

export const SettingLists = ({ darkMode, setDarkMode }: DarkModeTypes) => {
  const [mode, setMode] = useState("");

  useEffect(() => {
    const mode = localStorage.getItem("mode") || "system";
    setMode(mode);
  });

  const btn = {
    activeBorder: "border-blue-500 box-border",
    normalBorder: "border-slate-200 dark:border-zinc-700",
  };

  const appearanceButtons = [
    {
      name: "System",
      icon: icons.disabled,
      onClick: () => {
        localStorage.setItem("mode", "system");
        setDarkMode &&
          setDarkMode(
            window.matchMedia("(prefers-color-scheme: dark)").matches
          );
        setMode("system");
      },
      modeStyle: mode === "system" ? btn.activeBorder : btn.normalBorder,
    },
    {
      name: "Light",
      icon: icons.sun,
      onClick: () => {
        localStorage.setItem("mode", "light");
        setDarkMode && setDarkMode(false);
        setMode("light");
      },
      modeStyle: mode === "light" ? btn.activeBorder : btn.normalBorder,
    },
    {
      name: "Dark",
      icon: icons.moon,
      onClick: () => {
        localStorage.setItem("mode", "dark");
        setDarkMode && setDarkMode(true);
        setMode("dark");
      },
      modeStyle: mode === "dark" ? btn.activeBorder : btn.normalBorder,
    },
  ];

  return (
    <>
      <div className="px-2">
        <Button
          onClick={() => alert("Sign up is component comming soon!")}
          className="appearance_button border-slate-200 dark:border-zinc-700"
        >
          Sign Up
        </Button>

        {/* Appearance */}
        <div className="my-3">
          <p className="text-zinc-600">Appearance</p>
          <div className="flex justify-between items-center space-x-2 my-3">
            {appearanceButtons.map((item, index) => {
              return (
                <button
                  key={index}
                  className={`appearance_button ${item.modeStyle}`}
                  onClick={item.onClick}
                >
                  <Icon className="w-3 h-3 md:w-4 md:h-4" name={item.icon} />
                  <p>{item.name}</p>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Quick settings */}
      <div className="my-3">
        <p className=" text-zinc-600 mx-2 mb-3">Quick settings</p>

        {QuickSettings.map((item, index) => {
          return (
            <div
              key={index}
              className="border-b pb-2 mb-1 border-zinc-300 dark:text-zinc-300 dark:border-zinc-600 cursor-pointer"
              onClick={item.onClick}
            >
              <div className="flex justify-between mx-2">
                <div className="flex items-center space-x-3">
                  <Icon name={item.preIcon} className="h-5 w-5" />
                  <p>{item.name}</p>
                </div>
                <Icon name={item.postIcon} className="h-5 w-5" />
              </div>
            </div>
          );
        })}
      </div>

      {/* Connect */}
      <div className="my-3">
        <p className=" text-zinc-500 mx-2 mb-3">Connect</p>

        {Connects.map((item, index) => {
          return (
            <div
              key={index}
              className="border-b pb-2 mb-1 border-zinc-300 dark:text-zinc-300 dark:border-zinc-600 cursor-pointer"
              onClick={item.onClick}
            >
              <div className="flex justify-between mx-2">
                <div className="flex items-center space-x-3">
                  <Icon name={item.preIcon} className="h-5 w-5" />
                  <p>{item.name}</p>
                </div>
                <Icon name={item.postIcon} className="h-5 w-5" />
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex flex-col items-center text-zinc-500 hover:text-blue-500">
        <Link href={"https://jobs.lever.co/you"} target="_blank">
          Terms · We're hiring!
        </Link>
      </div>
    </>
  );
};
