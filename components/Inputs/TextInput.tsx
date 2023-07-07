import { TextInputProps } from "@/types";
import React from "react";

const TextInput = ({
  inputValue,
  onChange,
  type,
  placeholder,
  className,
}: TextInputProps) => {
  return (
    <input
      type={`${type ?? "text"}`}
      id="search"
      value={inputValue}
      className={`input ${className}`}
      placeholder={`${placeholder ?? "Type something!"}`}
      required
      onChange={onChange}
    />
  );
};

export default TextInput;
