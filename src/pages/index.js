// "use client";
import Image from "next/image";
import { Lora, Mulish } from "next/font/google";
import profile from "../../public/profile.jpg";
import putty from "../../public/putty-title-md.png";
import { GrLinkedinOption, GrTwitter, GrGithub } from "react-icons/gr";
import { PiArrowDownLight, PiArrowUpRightLight } from "react-icons/pi";
import { CiMenuFries } from "react-icons/ci";
import { TfiClose } from "react-icons/tfi";
import { SlGlobe } from "react-icons/sl";
import React, { useState, useEffect } from "react";
import circularText from "../../public/circular-text.svg";
import Typed from 'typed.js';


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
// [12, 14, 12, 12, 17, 16, 10, 13, 14, 15, 11, 11, 20, 8];

const items = [
  'There is so much left to build',
];

export default function Home() {
  const [colorIndex, setColorIndex] = useState(0);
  const el = React.useRef(null);
  const [navHidden, setNavHidden] = useState('-translate-y-full');
  useEffect(() => {
    setTimeout(() => {
      setColorIndex((colorIndex + 1) % colors.length);
    }, colors[colorIndex][2]);
  }, [colorIndex]);

  return (
    <div className="scroll-smooth	min-h-screen flex flex-col bg-slate-200 ">
      <Image
        className={`absolute m-5 w-32 sm:w-40 text-xl animate-spin animate-infinite animate-duration-[6000ms] animate-delay-[6000ms] animate-ease-linear animate-normal animate-fill-forwards`}
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
          <div className="flex justify-end md:flex-1">
            <div className="mx-2 my-6 hidden  md:flex">
              <button
                type="button"
                className="flex items-center justify-center border hover:bg-slate-950  font-medium text-sm px-3 py-1.5 mr-2 mb-2 text-dark border-gray-100 hover:border-slate-950 hover:text-blue-600"
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
                className="flex items-center justify-center border hover:bg-slate-950 font-medium text-sm px-3 py-1.5 mr-2 mb-2 text-dark border-gray-100 hover:border-slate-950  hover:text-blue-600 "
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

          {/* for mobile */}
          <button aria-label="Toggle Menu" className="md:hidden mr-8 mt-11 h-8 w-8" onClick={() => setNavHidden('-translate-y-0')}>
            <CiMenuFries size={35} />
          </button>
          <div className={`fixed left-0 top-0 z-10 h-full w-full transform bg-grey-100 duration-300 ease-in-out dark:bg-slate-200 ${navHidden}`}>
            <div className="flex justify-end">
              <button className="mr-8 mt-11 h-8 w-8" aria-label="Toggle Menu" onClick={() => setNavHidden('-translate-y-full')}>
                <TfiClose className="text-slate-950" size={25} />
              </button>
            </div>
            <nav className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
              <ul className="divide-y-4 divide-gray-200 dark:divide-slate-950">
                <li className="py-6">
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <h2 className="text-5xl font-bold leading-8 tracking-tight"><a className="text-gray-900 dark:text-gray-900" href="/blog/release-of-tailwind-nextjs-starter-blog-v2.0">WORK</a></h2>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="py-6">
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <h2 className="text-5xl font-bold leading-8 tracking-tight"><a className="text-gray-900 dark:text-gray-900" href="/blog/release-of-tailwind-nextjs-starter-blog-v2.0">ABOUT</a></h2>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="py-6">
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <h2 className="text-5xl font-bold leading-8 tracking-tight"><a className="text-gray-900 dark:text-gray-900" href="/blog/release-of-tailwind-nextjs-starter-blog-v2.0">CONTACT</a></h2>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </nav>

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

      <section className="min-h-screen ">
        <div class="mx-10 mt-10 flex justify-end"><h2 class="text-3xl font-normal text-gray-900">About me</h2></div>
        <div className="relative items-center w-full px-5 pt-12 mx-auto md:px-12 lg:px-16 max-w-7xl lg:py-24">
          <div className="gap-12 lg:grid-cols-2 lg:grid">
            <div>
              <div className="max-w-xl">
                <div>
                  <p className="text-2xl font-medium tracking-tight text-black sm:text-xl">
                    I am a Software developer based on Mumbai, I have launched an open-source
                    project that received 2000+ visits in just 2 days, and people
                    appreciated its simple UI. I led a team of 2 to complete the project
                    on time. My interests lie in front-end development, UI/UX, and
                    Machine learning. Moreover, I actively share useful content on
                    LinkedIn and Twitter to help others.
                  </p>
                </div>
              </div>
              <div className="w-56 hidden absolute bottom-8 -left-10 ... bg-orange-200 rounded-r-full p-4 md:flex items-center justify-center ...">
                <span className="mr-12 font-medium text-left	w-16 text-black bg-green-500">
                  Located in the India
                </span>
                <div className="bg-white rounded-full p-4 flex items-center justify-center ...">
                  <SlGlobe size={40} className="text-black rotate-12" />
                </div>
              </div>
              <div className="mx-auto mt-12 lg:max-w-7xl">
                <ul role="list" className="grid grid-cols-2 gap-4 list-none lg:gap-6">
                  <li>
                    <div>
                      <p className="mt-5 text-lg font-medium leading-6 text-black">
                        Easy onboarding
                      </p>
                    </div>
                    <div className="mt-2 text-base text-gray-500">
                      Plus, our platform is constantly evolving to meet the changing
                      needs.
                    </div>
                  </li>
                  <li>
                    <div>
                      <p className="mt-5 text-lg font-medium leading-6 text-black">
                        Customer support
                      </p>
                    </div>
                    <div className="mt-2 text-base text-gray-500">
                      Plus, our platform is constantly evolving to meet the changing
                      needs.
                    </div>
                  </li>
                </ul>
              </div>
            </div>


            <div className="my-2 max-w-[700px] overflow-hidden">
              <div className="max-w-[600px] max-h-[600px] overflow-hidden">
                <Image
                  className="object-cover hover:scale-105 transition duration-700 cursor-pointer object-center w-full mx-auto bg-gray-300 lg:ml-auto "
                  src={profile}
                  width={600}
                  height={600}
                  alt="Picture of the author"
                />
              </div>
            </div>
          </div>
        </div>
      </section>


      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />


      {/* projects */}


      <section class="relative min-h-screen bg-cover bg-slate-200 bg-no-repeat bg-fixed bg-center ">
        <div className="m-10"><h2 className="text-3xl font-normal text-gray-900">Latest Projects</h2></div>
        <div class="relative mx-auto w-full max-w-7xl items-center px-5 py-12 md:px-12">
          <ol class="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3" role="list">
            <li class="lgcol-span-2">
              <a href="#">
                <div class="flex items-end justify-center">
                  <div class="flex overflow-hidden">
                    <div class="border h-96 w-96 border-gray-900 p-8 ">
                      <h3 className="mt-6 font-light text-gray-900 text-[5rem]">AI FUSI ON</h3>
                    </div>
                  </div>
                </div>
              </a>
            </li>
            <li class="lgcol-span-2">
              <a href="#">
                <div class="flex items-end justify-center">
                  <div class="flex overflow-hidden">
                    <div class="border h-96 w-96 border-gray-900 p-8">
                      <h3 className="mt-6 font-light text-gray-900 text-[5rem]">CODE TRIO</h3>
                    </div>
                  </div>
                </div>
              </a>
            </li>
            <li class="lgcol-span-2">
              <a href="#">
                <div class="flex items-end justify-center">
                  <div class="flex overflow-hidden">
                    <div class="border h-96 w-96 border-gray-900 p-8 ">
                      <h3 className="mt-6 font-light text-gray-900 text-[5rem]">NEWS LETTER </h3>
                    </div>
                  </div>
                </div>
              </a>
            </li>
          </ol>
        </div>
      </section>

      <footer className="mt-32 flex-none">
        <div className="sm:px-8">
          {/* <div className="mx-auto w-full max-w-7xl lg:px-8"> */}
          <div className="mx-auto w-full">
            <div className="border-t border-zinc-100 pb-16 pt-10 dark:border-zinc-700/40">
              <div className="relative px-4 sm:px-8 lg:px-12">
                <div className="mx-auto max-w-2xl lg:max-w-5xl">
                  <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
                    <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                      <a
                        className="transition text-slate-900 dark:hover:text-teal-400"
                        href="/projects"
                      >
                        <GrLinkedinOption size={25} />
                      </a>
                      <a
                        className="transition text-slate-900 dark:hover:text-teal-400"
                        href="/speaking"
                      >
                        <GrGithub size={25} />
                      </a>
                      <a
                        className="transition text-slate-900 dark:hover:text-teal-400"
                        href="/uses"
                      >
                        <GrTwitter size={25} />
                      </a>
                    </div>
                    <p className="text-sm text-zinc-400 dark:text-zinc-500">
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
