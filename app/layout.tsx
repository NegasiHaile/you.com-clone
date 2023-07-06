"use client";
import { useState } from "react";
import "./globals.css";
import "./styles/layout.css";
import "./styles/buttons.css";

import { Inter } from "next/font/google";

import { NavBar } from "@/components";
import { usePathname, useSearchParams } from "next/navigation";

export const metadata = {
  title: "You.com-clone",
  description: "This is the You.com clone using NextJS-13, By Negasi",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  // const searchParams = useSearchParams();

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
      <body className={`${darkMode ? "dark" : "light"} text-xs md:text-md`}>
        {/* Top navigation bar */}
        <NavBar
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          currentPath={pathname}
        />

        {/* Main content */}
        <main className="mx-3 md:mx-8">{children}</main>
      </body>
    </html>
  );
}
