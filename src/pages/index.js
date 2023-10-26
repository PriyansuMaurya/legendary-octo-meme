// "use client";
import Image from "next/image";
import { Lora, Mulish } from "next/font/google";
import profile from "../../public/profile.jpg";
import { GrLinkedinOption, GrTwitter, GrGithub } from "react-icons/gr";
import { PiArrowDownLight, PiArrowUpRightLight } from "react-icons/pi";
import { SlGlobe } from "react-icons/sl";
import React, { useState, useEffect } from "react";
import circularText from "../../public/circular-text.svg";
const inter = Lora({ subsets: ["latin"] });
const mulish = Mulish({ subsets: ["latin"] });

const colors = [
  ["bg-[#005454]", "FFFFDB", 4240], // 12  3500
  ["bg-[#343322]", "FFFFDB", 3500], // 14  4220
  ["bg-[#28044A]", "FFC1FF", 4220], // 12  3500
  ["bg-[#00002E]", "FCDAFF", 3500], // 12  3500
  ["bg-[#28044A]", "CAFFFF", 3500], // 17  4250
  ["bg-[#193718]", "FFC1FF", 4250], // 16  4000
  ["bg-[#00002E]", "CAFFFF", 4000], // 10  4440
  ["bg-[#FFFFDB]", "005454", 4440], // 13  4170
  ["bg-[#CADFEB]", "3C46FF", 4170], // 14  4220
  ["bg-[#CAFFFF]", "B161FD", 4220], // 15  3960
  ["bg-[#D9FFD8]", "B161FD", 3960], // 11  4405
  ["bg-[#FFFFDB]", "FE7600", 4405], // 11  4405
  ["bg-[#FFD7FF]", "0404AC", 4405], // 20  4200
  ["bg-[#FFFFDB]", "005454", 4200], // 8   4240
];
[12, 14, 12, 12, 17, 16, 10, 13, 14, 15, 11, 11, 20, 8];
export default function Home() {
  const [colorIndex, setColorIndex] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setColorIndex((colorIndex + 1) % colors.length);
    }, colors[colorIndex][2]);
  }, [colorIndex]);

  return (
    <div className="scroll-smooth	min-h-screen flex flex-col">
      <Image
        className={`absolute  m-5 w-40 text-xl animate-spin animate-infinite animate-duration-[6000ms] animate-delay-[6000ms] animate-ease-linear animate-normal animate-fill-forwards`}
        // className={`absolute  m-5 w-40 text-xl animate-spin delay-500	`}
        src={circularText}
        width={100}
        height={100}
        alt="Picture of the author"
      />
      <div
        className={`flex items-center justify-center min-h-screen bg-cover bg-no-repeat bg-fixed bg-center bg-blue-500`}
      >
        <header className="... absolute top-0 right-2 bg-black-100">
          <div class="flex justify-end md:flex-1">
            <div className="mx-2 my-6 flex">

              <button
                type="button"
                className="flex items-center justify-center border-2 hover:bg-slate-950  font-medium text-sm px-3 py-1.5 mr-2 mb-2 text-dark border-gray-100 hover:border-slate-950 hover:text-blue-600"
              >
                <div className="">
                  <span>Resume</span>
                </div>
                <div className="pl-1 ">
                  {/* <BsArrowDown size={20} /> */}
                  <PiArrowDownLight size={20} />
                </div>
              </button>
              <button
                type="button"
                className="flex items-center justify-center border-2 hover:bg-slate-950 font-medium text-sm px-3 py-1.5 mr-2 mb-2 text-dark border-gray-100 hover:border-slate-950  hover:text-blue-600 "
              >
                <div className="">
                  <span>GitHub</span>
                </div>
                <div className="pl-1">
                  <PiArrowUpRightLight size={20} />
                </div>
              </button>
            </div>
          </div>
        </header>
        {/* ${colors[colorIndex][0]} */}
        {/* <div className="bg-red-100 w-20 h-10"></div> */}
        {/* ${colors[colorIndex][1]} */}
        {/* <img src="https://readme-typing-svg.demolab.com?font=Playfair+Display&weight=600&size=84&duration=3500&pause=1000&color=${colors[colorIndex][1]}&center=true&vCenter=true&random=false&width=800&height=150&lines=Let%E2%80%99s+invent;Let%E2%80%99s+discover;Let%E2%80%99s+design;Let%E2%80%99s+create;Let%E2%80%99s+collaborate;Let%E2%80%99s+experiment;Let%E2%80%99s+fail;Let%E2%80%99s+iterate;Let%E2%80%99s+innovate;Let%E2%80%99s+prototype;Let%E2%80%99s+learn;Let%E2%80%99s+adapt;Let%E2%80%99s+make+an+impact;Let%E2%80%99s+go" alt="Typing SVG" /> */}

        <img
          className="fill-red-500"
          src={`https://readme-typing-svg.demolab.com?font=Playfair+Display&weight=600&size=84&duration=3500&pause=1000&center=true&vCenter=true&random=false&width=800&height=150&lines=Let%E2%80%99s+invent;Let%E2%80%99s+discover;Let%E2%80%99s+design;Let%E2%80%99s+create;Let%E2%80%99s+collaborate;Let%E2%80%99s+experiment;Let%E2%80%99s+fail;Let%E2%80%99s+iterate;Let%E2%80%99s+innovate;Let%E2%80%99s+prototype;Let%E2%80%99s+learn;Let%E2%80%99s+adapt;Let%E2%80%99s+make+an+impact;Let%E2%80%99s+go`}
          alt="Typing SVG"
        />
      </div>
      <main
        className={`mx-10 my-20 flex flex-col lg:flex-row xl:text-7xl md:text-6xl justify-around`}
      >
        <div>
          <h1
            className={`text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl p-0 my-5 ${inter.className}`}
          >
            {" "}
            Hello there!{" "}
          </h1>
          <p
            className={`mx-0 w-80 md:w-[400px] lg:w-[450px] xl:w-[500px] 2xl:w-[550px] text-xl  ${mulish.className}`}
          >
            I am Priyanshu Maurya, 4th year B.E Student in computer science.
            Here are some of my accomplisment, I have launched an open-source
            project that received 2000+ visits in just 2 days, and people
            appreciated its simple UI. I led a team of 2 to complete the project
            on time. My interests lie in front-end development, UI/UX, and
            Machine learning. Moreover, I actively share useful content on
            LinkedIn and Twitter to help others.
          </p>
        </div>

        <Image
          className={`my-5 w-[400px] md:w-[450px] lg:w-[500px] 2xl:w-[550px] text-xl`}
          src={profile}
          width={500}
          height={500}
          alt="Picture of the author"
        />
      </main>

      <div className="relative min-h-screen bg-cover bg-no-repeat bg-fixed bg-center">
        <div className="w-56 absolute bottom-0 right-0 ... bg-orange-200 rounded-l-full p-4 flex items-center justify-center ...">
          <div className="bg-white rounded-full p-4 flex items-center justify-center ...">
            <SlGlobe size={40} className="text-black rotate-12" />
          </div>
          <span className="ml-12 font-medium text-right	w-16 text-black bg-green-500">
            Located in the India
          </span>
        </div>
      </div>

      <footer class="mt-32 flex-none">
        <div class="sm:px-8">
          {/* <div class="mx-auto w-full max-w-7xl lg:px-8"> */}
          <div class="mx-auto w-full">
            <div class="border-t border-zinc-100 pb-16 pt-10 dark:border-zinc-700/40">
              <div class="relative px-4 sm:px-8 lg:px-12">
                <div class="mx-auto max-w-2xl lg:max-w-5xl">
                  <div class="flex flex-col items-center justify-between gap-6 sm:flex-row">
                    <div class="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                      <a
                        class="transition hover:text-teal-500 dark:hover:text-teal-400"
                        href="/projects"
                      >
                        <GrLinkedinOption size={25} />
                      </a>
                      <a
                        class="transition hover:text-teal-500 dark:hover:text-teal-400"
                        href="/speaking"
                      >
                        <GrGithub size={25} />
                      </a>
                      <a
                        class="transition hover:text-teal-500 dark:hover:text-teal-400"
                        href="/uses"
                      >
                        <GrTwitter size={25} />
                      </a>
                    </div>
                    <p class="text-sm text-zinc-400 dark:text-zinc-500">
                      © Priyanshu Maurya. All rights reserved.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// 'md': '768px',

// 'lg': '1024px',

// 'xl': '1280px',

// '2xl': '1536px',
