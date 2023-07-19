import React from "react";
import ChatHistory from "./ChatHistory";
import ChatBox from "./ChatBox";
import RelatedLinks from "./RelatedLinks";

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
  const requestChat = async (formDara: FormData) => {
    "use server";

    const prmpt = formDara.get("chat")?.valueOf();
    console.log("Prompit", prmpt);
  };

  return (
    <div className="relative">
      <div className="chat_wrapper">
        {/* Chat History  */}
        <ChatHistory />

        {/* Chat Conversation  */}
        <ChatBox requestChat={requestChat} />

        {/* Chat related links  */}
        <RelatedLinks />
      </div>
    </div>
  );
};

export default ChatPage;
