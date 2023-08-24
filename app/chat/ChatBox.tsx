"use client";
import Link from "next/link";
import React, { useState } from "react";

// components
import { BottomBar } from "@/components";

// mock-data
import { chatHostory } from "@/mock/chat-history";
import { ChatProps } from "@/types";

export interface IChatResponse {
  id?: number;
  message: string;
  sources?: string[];
}

interface chatBOxProps {
  chatHistory: ChatProps[];
  requestChat: (formDara: FormData) => void;
}

const ChatBox = ({ requestChat, chatHistory }: chatBOxProps) => {
  const [chat, setChat] = useState(chatHistory[0].history);

  console.log("chatHistory", chatHistory);

  return (
    <div className="flex justify-center w-full bg-transparent">
      <div className={`chat_area hide-scrollbar`}>
        {chat.map((item, index) => {
          if (item.role === "assistant") {
            return (
              <div key={index} className="flex w-full">
                <ResponseMessage message={item.message} />
              </div>
            );
          } else {
            return (
              <div key={index} className="flex justify-end">
                <RequestMessage message={item.message} />
              </div>
            );
          }
        })}
      </div>
      <BottomBar requestChat={requestChat} />
    </div>
  );
};

export default ChatBox;

const ResponseMessage = ({
  apiRequesting,
  message,
  res,
}: {
  apiRequesting?: boolean;
  key?: number;
  message?: string;
  res?: IChatResponse;
}) => {
  return (
    <div className="chat_response_container">
      {/* <p>{text ? text : res?.text}</p> */}
      {/* <PrismComponent language="python"> */}
      {`${message ? message : res?.message}`}
      {/* </PrismComponent> */}

      {res?.sources?.length !== undefined && res?.sources?.length >= 1 && (
        <div className="flex mt-5 space-x-2">
          {res.sources.map((source, index) => {
            return (
              <Link
                href={""}
                key={index}
                className="flex items-center space-x-1 rounded-full px-3 py-2 border dark:border-zinc-600"
              >
                <p>{source}</p>{" "}
                <p className="text-blue-500 rounded-full px-1.5 bg-blue-100 dark:bg-zinc-600 font-thin">
                  {index + 1}
                </p>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

const RequestMessage = ({ message }: { message?: string }) => {
  return (
    <div className="chat_request_container">
      <p className="text-sm">{message}</p>
    </div>
  );
};
