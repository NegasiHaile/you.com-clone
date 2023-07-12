import { icons } from "@/assets/icons";
import { Icon } from "@/components/Utils";
import React from "react";

const ChatHistory = () => {
  return (
    <div className="pt-5 relative hidden md:block">
      <button className="hover:text-opacity-90 sticky top-[8.25rem] md:top-[100px]">
        <Icon name={icons.time} className="w-6 h-6" />
      </button>
    </div>
  );
};

export default ChatHistory;
