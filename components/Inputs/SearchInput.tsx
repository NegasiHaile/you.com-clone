"use client";
import React, { useEffect, useRef, useState, ChangeEvent } from "react";
import { useSearchParams } from "next/navigation";

import { SearchInputProps } from "@/types";
import { Icon } from "../Utils";

const SearchInput = ({
  iconName,
  iconContainerStyle,
  onClickSendButton,
}: SearchInputProps) => {
  const searchParams = useSearchParams();
  const [inputValue, setInputValue] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [numLines, setNumLines] = useState<number>(1);

  useEffect(() => {
    const prmpt = searchParams.get("prompit");
    if (!!prmpt) setInputValue(prmpt);
  }, []);

  const handleInputChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    if (textareaRef.current) {
      const value = textareaRef.current.value;
      const lines = value.split("\n");
      const nLines = lines.length;

      setNumLines(nLines);
    }
    setInputValue(event.target.value);
  };

  return (
    <>
      <textarea
        ref={textareaRef}
        id="chat"
        name="chat"
        rows={numLines <= 5 ? numLines : 5}
        className="input rounded-3xl resize-none hide-scrollbar pr-12"
        placeholder="Start typing to search"
        required
        value={inputValue}
        onChange={handleInputChange}
        // onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            // do something
          }
        }}
      />

      {/* <textarea className="resize-none w-full h-40 p-2 border-4 border-red-500 focus:border-blue-800 focus:outline-none"></textarea> */}

      <button
        type="submit"
        className={`input_end_button ${
          inputValue ? "active_button" : "disabled_button"
        } ${iconContainerStyle}`}
      >
        {iconName && <Icon name={iconName} />}
      </button>
    </>
  );
};

export default SearchInput;
