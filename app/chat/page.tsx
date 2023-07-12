import React from "react";
import ChatHistory from "./ChatHistory";
import ChatBox from "./ChatBox";
import RelatedLinks from "./RelatedLinks";
import { BottomBar } from "@/components";

// chatHistory : array of chat lists
// conversation: array of convesation in a single chat

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

const ChatPage = () => {
  // Server function
  async function requestChat(formDara: FormData) {
    "use server";

    const prmpt = formDara.get("chat")?.valueOf();
    console.log("Prompit", prmpt);
  }

  return (
    <div className="relative">
      <div className="w-full flex min-h-[calc(100vh_-_13rem)] md:min-h-[calc(100vh_-_11.25rem)]">
        {/* Chat History  */}
        <ChatHistory />

        {/* Chat Conversation  */}
        <ChatBox />

        {/* Chat related links  */}
        <RelatedLinks />
      </div>

      <BottomBar requestChat={requestChat} />
    </div>
  );
};

export default ChatPage;
