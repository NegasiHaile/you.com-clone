"use client";

import { icons } from "@/assets/icons";
import { IconButton } from "@/components";
import { Icon } from "@/components/Utils";
import { useState } from "react";

const ChatHistory = () => {
  const [showHistoryList, setHistoryList] = useState<boolean>();
  return (
    <div className="pt-5 relative hidden sm:flex sm:flex-col space-y-3  w-1/6 px-1">
      <div
        className="flex items-center cursor-pointer space-x-1 px-2 py-1 hover:bg-zinc-600 rounded-sm"
        onClick={() => setHistoryList(!showHistoryList)}
      >
        <Icon name={icons.time} className="w-4 h-4" />
        <p>History</p>
      </div>

      <div
        className="flex items-center cursor-pointer space-x-1 px-2 py-1 hover:bg-zinc-600 rounded-sm"
        onClick={() => setHistoryList(!showHistoryList)}
      >
        <p>1, History</p>
      </div>
    </div>
  );
};

export default ChatHistory;
