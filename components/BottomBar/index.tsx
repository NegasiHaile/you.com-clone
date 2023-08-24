"use client";

import React, { Dispatch, SetStateAction } from "react";
import Link from "next/link";

// interfaces
import { IChatHistory } from "../../app/chat/page";
import { Icon } from "../Utils";
import { icons } from "@/assets/icons";
import { SearchInput } from "../";

interface BottomBarProps {
  setShowModal?: Dispatch<SetStateAction<boolean>>;
  setChatHistory?: Dispatch<IChatHistory[]>;
  requestChat: (formData: FormData) => void;
}

const BottomBar = ({ setShowModal, requestChat }: BottomBarProps) => {
  return (
    <div className="flex min-h-24 fixed bottom-0 left-0 right-0 z-30 bg-slate-200 dark:bg-zinc-800 w-full py-6 pl-2 md:px-6 items-center justify-between">
      <div className="hidden md:block dark:text-gray-600 rounded-full hover:bg-blue-50 dark:hover:bg-zinc-700 dark:hover:text-zinc-200 p-2">
        <Link href="https://yousearch.canny.io/">
          <Icon name={icons.feedback} className="w-5 h-5" />
        </Link>
      </div>

      <div className="w-full md:w-3/5 flex flex-row items-center space-x-2 md:space-x-5">
        <div
          className=" rounded-full bg-blue-600 p-3 cursor-pointer"
          // onClick={() => setChatHistory(initialChatHistory)}
        >
          <Icon name={icons.chat} className="w-6 h-6 text-zinc-200" />
        </div>

        <div className="w-full">
          <form action={requestChat} className="relative">
            <SearchInput iconName={icons.send} />
          </form>
        </div>

        <button
          className="  dark:text-gray-600 rounded-full hover:bg-slate-300 
          dark:hover:bg-zinc-700 dark:hover:text-zinc-200 p-2"
          // onClick={() => setShowModal && setShowModal(true)}
        >
          <Icon name={icons.upload} className=" w-5 h-5" />
        </button>
      </div>

      {/* placeholder */}
      <div></div>
    </div>
  );
};

export default BottomBar;
