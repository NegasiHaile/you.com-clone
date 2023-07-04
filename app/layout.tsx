"use client";
import { useState } from "react";
import "./globals.css";
import "./styles/layout.css";
import "./styles/buttons.css";
import { NavBar } from "@/components";

export const metadata = {
  title: "You.com-clone",
  description: "This is the You.com clone using NextJS-13, By Negasi",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  let value = localStorage.getItem("mode") || "";

  const [darkMode, setDarkMode] = useState(() => {
    if (value === "dark") {
      return true;
    } else if (value == "light") {
      return false;
    } else {
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
  });

  return (
    <html lang="en">
      <body className={`${darkMode && "dark"} text-xs md:text-md`}>
        <NavBar darkMode={darkMode} setDarkMode={() => {}} />

        {children}
      </body>
    </html>
  );
}
