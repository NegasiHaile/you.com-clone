"use client";
import React, { useState } from "react";
import { icons } from "@/assets/icons";
import { Icon } from "@/components/Utils";
import Image from "next/image";
import Link from "next/link";
import { IconButton } from "@/components";

const RelatedLinks = () => {
  const [showRelatedLinks, setShowRelatedLinks] = useState<boolean>(false);

  return (
    <>
      {/* Slide Right and Left button */}
      <div className={`pt-5 relative`}>
        <IconButton
          iconName={showRelatedLinks ? icons.right : icons.left}
          onClick={() => setShowRelatedLinks(!showRelatedLinks)}
          iconStyle="w-4 h-4"
          className="rounded-full"
        />
      </div>

      <div
        className={`border-l border-zinc-200 dark:border-zinc-800
        h-[calc(100vh_-_13.35rem)] md:h-[calc(100vh_-_11.65rem)]
          light-bg dark:dark-bg
          ${
            showRelatedLinks
              ? `fixed w-4/6 top-28 right-0 z-30 md:static md:block md:z-0 md:w-[52%]`
              : `w-0 hidden`
          } transition-transform delay-1000`}
      >
        <div className="flex float-left w-auto bg-slate-300 mt-4 items-start bg-transparent -ml-8">
          <IconButton
            iconName={icons.right}
            onClick={() => setShowRelatedLinks(false)}
            iconStyle="w-4 h-4"
            className=" bg-zinc-50 dark:dark-bg rounded-l-lg border-l border-y border-zinc-200 dark:border-zinc-800"
          />
        </div>

        {/* Links */}
        <div className="px-3 pt-4 md:mt-0 md:py-3 overflow-auto h-full hide-scrollbar pb-2">
          <p className="md:my-2 text-lg">Related web results</p>
          <div className="space-y-1">
            <RelateResult />
            <RelateResult />
            <RelateResult />
            <RelateResult />
            <RelateResult />
            <RelateResult />
          </div>
        </div>
      </div>
    </>
  );
};

export default RelatedLinks;

const RelateResult = () => {
  return (
    <div className="flex md:px-2 py-3 space-x-1 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-700">
      {/* Source logo */}
      <div>
        <Image
          src="/favicon-placeholder-dark.svg"
          alt="Vercel Logo"
          className=" text-gray-800 dark:text-white mr-2"
          width={30}
          height={30}
          priority
        />
      </div>
      <div className="w-full">
        <Link
          href={`https://stackoverflow.com/`}
          target="_blank"
          className="text-blue-400 font-bold text-md"
        >
          What is ChatGPT and why does it matter? Here's what you need to know
        </Link>
        <p className="my-1">stackoverflow.com</p>
        <div className="w-full">
          <img
            src="/openai.jfif"
            alt="Vercel Logo"
            className="float-right text-gray-800 dark:text-white m-1 rounded-lg w-[80px] md:w-[100px] h-[50px] md:h-[60px]"
          />
          <p>
            4 days ago ... ChatGPT is an artificial-intelligence chatbot
            developed by AI research company OpenAI. Released in November 2022,
            it can have conversations on ...
          </p>
        </div>
      </div>
    </div>
  );
};
