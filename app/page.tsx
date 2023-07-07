import Image from "next/image";

import { Hero, Footer } from "@/components";
import { Icon } from "@/components/Utils";

import { reasonsToUseYou } from "@/constants";

export default function Home() {
  return (
    <main className="">
      {/* HERO section */}
      <Hero />
      {/* Why You.com? */}

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

              <p className="landing_header text-[22px] mt-6">{item.title}</p>

              <p className="reason_description pt-2">{item.description}</p>
              <div className=" flex-grow" />

              <Image
                src={item.imageSrc}
                alt={item.title}
                width={300}
                height={200}
                priority
                className="w-full max-h-[250px] min-h-[100px] mt-3"
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
