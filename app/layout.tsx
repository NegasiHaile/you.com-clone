"use client";
import { useState } from "react";
import "./globals.css";
import "./styles/layout.css";
import "./styles/buttons.css";
import "./styles/inputs.css";
import "./styles/main.css";
import "./styles/chat-page.css";

import { Inter } from "next/font/google";

import { Footer, NavBar } from "@/components";
import { usePathname } from "next/navigation";

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
      <body
        className={`${inter.className} ${
          darkMode ? "dark" : "light"
        } text-xs md:text-md`}
      >
        {/* Top navigation bar */}
        <NavBar
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          currentPath={pathname}
        />

        {/* Main content */}
        <main className="mx-4 md:mx-8">{children}</main>

        {/* Footer */}
        {pathname !== "/chat" && <Footer />}
      </body>
    </html>
  );
}
