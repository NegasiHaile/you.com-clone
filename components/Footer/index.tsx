"use client";
import React, { useState } from "react";
import { footerLinks, socialMediaLinks } from "@/constants";
import Link from "next/link";

import { Button, TextInput } from "../";
import Image from "next/image";

const Footer = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="flex flex-col items-center sm:items-stretch sm:flex-row sm:justify-around border-t py-6 mt-10 border-slate-200 dark:border-zinc-700">
      <div className="flex justify-around space-x-3 p-5">
        {footerLinks.map((catagory) => (
          <div
            key={catagory.id}
            className="flex flex-col items-center sm:items-start"
          >
            <p className="text-zinc-400 font-semibold py-2">
              {catagory.header}
            </p>

            {catagory.items.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                target={link?.target}
                className="my-1 text-blue-400 text-sm"
              >
                {link.title}
              </Link>
            ))}
          </div>
        ))}
      </div>

      <div className="flex flex-col py-5 sm:pt-0 sm:mt-0 border-t sm:border-t-0 sm:border-l dark:border-zinc-700 sm:pl-10 pr-2 items-center sm:items-start">
        <p className=" landing_header text-sm"> Subscribe to our newsletter </p>
        <p className="">Get latest news and updates about you.com</p>
        <form
          className="flex space-x-2 mt-5"
          onSubmit={(e) => {
            e.preventDefault();
            setInputValue("");
            alert("You have subscribed successfully!");
          }}
        >
          <TextInput
            type="email"
            inputValue={inputValue}
            placeholder="Your email address"
            className="rounded-xl"
            onChange={(e: any) => setInputValue(e.target.value)}
          />
          <Button className="primary_button rounded-3xl" onClick={() => {}}>
            Subscribe
          </Button>
        </form>

        <div className=" flex items-center mt-5 space-x-2 ">
          {socialMediaLinks.map((social) => (
            <Link key={social.id} href={social.href}>
              <Image
                src={social.icon}
                alt={social.href}
                width={25}
                height={25}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
