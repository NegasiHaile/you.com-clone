import Image from "next/image";

import { SearchInput } from "@/components";
import { Icon } from "@/components/Utils";

import { reasonsToUseYou } from "@/constants";
import Link from "next/link";
import { icons } from "@/assets/icons";
import { redirect, useParams } from "next/navigation";

export default function Home() {
  async function requestChat(data: FormData) {
    "use server";

    const prompit = data.get("chat")?.valueOf();

    console.log("Boooom .... it works!", prompit);

    redirect(`/chat?prompit=${prompit}`);
  }
  return (
    <main className="md:mx-8">
      {/* HERO section */}
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
          <form action={requestChat} className="relative">
            <SearchInput iconName={icons.search} />
          </form>
        </div>
        {/* THis empty <div> element, allows to fill the remaining 
      vertical space within the flex container */}
        <div className="flex-grow"></div>

        <div className="flex flex-col items-center">
          <Link href={"#why-you"}>
            <Icon
              name={icons.downward}
              className="w-20 h-20"
              strokeWidth={1.3}
            />
          </Link>
        </div>
      </div>

      {/* WHY YOU.COM? Section*/}
      <div id="why-you" className="pb-10 pt-28 flex flex-col items-center ">
        <p className="landing_header text-3xl mb-5 ">Why You.com?</p>

        <div className="reason_section">
          {reasonsToUseYou.map((item) => (
            <div key={item.id} className="reason_card">
              <Icon
                name={item.iconName}
                outline={false}
                strokeWidth={1.5}
                className="w-8 h-8"
              />

              <p className="landing_header text-[22px] mt-8">{item.title}</p>

              <p className="reason_description pt-3">{item.description}</p>
              <div className=" flex-grow" />

              <img
                src={item.imageSrc}
                alt={item.title}
                className="w-full max-h-[250px] min-h-[100px] mt-5"
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
