"use client";
import { useState } from "react";

import Image from "next/image";
import { SearchInput, Button } from "../";
import { Icon } from "../Utils";
import { icons } from "@/assets/icons";
import Link from "next/link";

const Hero = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="hero_section">
      <Image
        src="/you-logo.svg"
        alt="You.com Logo"
        className=" text-gray-800 dark:text-white"
        width={240}
        height={150}
        priority
      />
      <h1 className="text-xl md:text-3xl my-5 text-center">
        The AI search engine you control
      </h1>
      <div className="w-full md:w-4/6 lg:w-1/2 mt-5">
        <SearchInput
          inputValue={inputValue}
          setInputValue={setInputValue}
          iconName={icons.search}
          onClickSendButton={() => alert("Searching...")}
        />
      </div>
      {/* THis empty <div> element, allows to fill the remaining 
      vertical space within the flex container */}
      <div className="flex-grow"></div>

      <div className="flex flex-col items-center">
        <Link href={"#why-you"}>
          <Icon name={icons.downward} className="w-20 h-20" strokeWidth={1.3} />
        </Link>
      </div>
    </div>
  );
};

export default Hero;
