"use client";
import React, { useRef, useState, ChangeEvent } from "react";

import { SearchInputProps } from "@/types";
import { Icon } from "../Utils";

type InputProps = SearchInputProps & {
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
};

const SearchInput = ({
  inputValue,
  setInputValue,
  iconName,
  className,
  iconContainerStyle,
  onClickSendButton,
}: InputProps) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [numLines, setNumLines] = useState<number>(1);

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
    <div className="relative">
      <textarea
        ref={textareaRef}
        id="chat"
        rows={numLines <= 5 ? numLines : 5}
        className="input rounded-3xl resize-none no-scrollbar pr-12"
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
        className={`input_end_button ${
          inputValue ? "active_button" : "disabled_button"
        } ${iconContainerStyle}`}
        onClick={!!inputValue ? onClickSendButton : () => {}}
      >
        {iconName && <Icon name={iconName} />}
      </button>
    </div>
  );
};

export default SearchInput;
