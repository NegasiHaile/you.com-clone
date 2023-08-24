import React from "react";
import ChatHistory from "./ChatHistory";
import ChatBox from "./ChatBox";
import RelatedLinks from "./RelatedLinks";

// chatHistory : array of chat lists
// conversation: array of convesation in a single chat

import { chatHostory } from "@/mock/chat-history";
import { getChatHistory } from "../api";

export interface IChatResponse {
  id?: number;
  text: string;
  sources?: string[];
}

export interface IChatHistory {
  text?: string;
  role?: string;
  res?: IChatResponse;
}

const ChatPage = async () => {
  // Server function

  const requestChat = async (formDara: FormData) => {
    "use server";

    const prmpt = formDara.get("chat")?.valueOf().toString();
    console.log("prmpt:" + prmpt);
    let history = [];

    if (prmpt) {
      const da = {
        id: "sfadsj",
        role: "user",
        message: prmpt,
      };
      history.push(da);
    }

    console.log("history:" + history);
    return history;
  };

  const saveResponse = async () => {
    "use server";

    console.log("");
  };

  const cHistory = await getChatHistory();
  console.log(cHistory);
  return (
    <div className="relative">
      <div className="chat_page_wrapper">
        {/* Chat History  */}
        <ChatHistory />

        {/* Chat Conversation  */}
        <ChatBox requestChat={requestChat} chatHistory={cHistory} />

        {/* Chat related links  */}
        <RelatedLinks />
      </div>
    </div>
  );
};

export default ChatPage;
