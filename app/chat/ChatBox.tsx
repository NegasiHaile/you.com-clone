import Link from "next/link";
import React from "react";

import { chatHistory } from "@/constants";

export interface IChatResponse {
  id?: number;
  text: string;
  sources?: string[];
}

const Chatdiv = () => {
  return (
    <div className="flex justify-center w-full bg-transparent">
      <div
        className={`space-y-5 overflow-y-auto w-[95%]
            h-[calc(100vh_-_14.25)] md:h-[calc(100vh_-_12.5rem)] 
            hide-scrollbar transition-all py-5`}
      >
        {chatHistory.map((item, index) => {
          if (item.role === "assistant") {
            return (
              <div key={index} className="flex w-full">
                <ResponseMessage text={item.text} />
              </div>
            );
          } else {
            return (
              <div key={index} className="flex justify-end">
                <RequestMessage text={item.text} />{" "}
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Chatdiv;

const ResponseMessage = ({
  apiRequesting,
  text,
  res,
}: {
  apiRequesting?: boolean;
  key?: number;
  text?: string;
  res?: IChatResponse;
}) => {
  return (
    <div className="rounded-t-3xl flex flex-col flex-wrap whitespace-break-spaces text-sm rounded-br-3xl bg-slate-200 bg-opacity-70 leading-relaxed dark:bg-zinc-700 dark:bg-opacity-50 font-semibold py-2 px-4 mr-2 ">
      {/* <p>{text ? text : res?.text}</p> */}
      {/* <PrismComponent language="python"> */}
      {`${text ? text : res?.text}`}
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

const RequestMessage = ({ text }: { text?: string }) => {
  return (
    <div className="rounded-t-3xl whitespace-break-spaces text-slate-50 rounded-bl-3xl bg-blue-500 py-2 px-4 ml-2">
      <p className="text-sm">{text}</p>
    </div>
  );
};
