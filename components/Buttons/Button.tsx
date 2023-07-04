import React from "react";

import { ButtonProps } from "@/types";

type ButtonTypes = ButtonProps & {
  children: React.ReactNode;
};

const Button = ({ title, children, className, onClick }: ButtonTypes) => {
  return (
    <button className={`${className}`} onClick={onClick}>
      {children}
      {title}
    </button>
  );
};

export default Button;
