// "use client";
import Image from "next/image";
import { Lora, Mulish } from "next/font/google";
import profile from "../../public/profile.jpg";
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
            <div className="mx-2 my-6 hidden  md:flex">
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

          {/* for mobile */}
          <button aria-label="Toggle Menu" class="md:hidden mr-8 mt-11 h-8 w-8" onClick={() => setNavHidden('-translate-y-0')}>
            <CiMenuFries size={35} />
          </button>
          <div class={`fixed left-0 top-0 z-10 h-full w-full transform bg-grey-100 duration-300 ease-in-out dark:bg-slate-200 ${navHidden}`}>
            <div class="flex justify-end">
              <button class="mr-8 mt-11 h-8 w-8" aria-label="Toggle Menu" onClick={() => setNavHidden('-translate-y-full')}>
                <TfiClose className="text-slate-950" size={25} />
              </button>
            </div>
            <nav class="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
              <ul class="divide-y-4 divide-gray-200 dark:divide-slate-950">
                <li class="py-6">
                  <div class="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <div class="space-y-5 xl:col-span-3">
                      <div class="space-y-6">
                        <h2 class="text-5xl font-bold leading-8 tracking-tight"><a class="text-gray-900 dark:text-gray-900" href="/blog/release-of-tailwind-nextjs-starter-blog-v2.0">WORK</a></h2>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="py-6">
                  <div class="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <div class="space-y-5 xl:col-span-3">
                      <div class="space-y-6">
                        <h2 class="text-5xl font-bold leading-8 tracking-tight"><a class="text-gray-900 dark:text-gray-900" href="/blog/release-of-tailwind-nextjs-starter-blog-v2.0">ABOUT</a></h2>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="py-6">
                  <div class="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <div class="space-y-5 xl:col-span-3">
                      <div class="space-y-6">
                        <h2 class="text-5xl font-bold leading-8 tracking-tight"><a class="text-gray-900 dark:text-gray-900" href="/blog/release-of-tailwind-nextjs-starter-blog-v2.0">CONTACT</a></h2>
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

      <section>
        <div class="relative items-center w-full px-5 pt-24 mx-auto md:px-12 lg:px-16 max-w-7xl lg:py-24">
          <div class="gap-12 lg:grid-cols-2 lg:grid">
            <div>
              <div class="max-w-xl">
                <div>
                  <p class="text-2xl font-medium tracking-tight text-black sm:text-2xl">
                    I am a Software developer based on Mumbai, I have launched an open-source
                    project that received 2000+ visits in just 2 days, and people
                    appreciated its simple UI. I led a team of 2 to complete the project
                    on time. My interests lie in front-end development, UI/UX, and
                    Machine learning. Moreover, I actively share useful content on
                    LinkedIn and Twitter to help others.
                  </p>
                </div>
              </div>
              <div class="mx-auto mt-12 lg:max-w-7xl">
                <ul role="list" class="grid grid-cols-2 gap-4 list-none lg:gap-6">
                  <li>
                    <div>
                      <p class="mt-5 text-lg font-medium leading-6 text-black">
                        Easy onboarding
                      </p>
                    </div>
                    <div class="mt-2 text-base text-gray-500">
                      Plus, our platform is constantly evolving to meet the changing
                      needs.
                    </div>
                  </li>
                  <li>
                    <div>
                      <p class="mt-5 text-lg font-medium leading-6 text-black">
                        Customer support
                      </p>
                    </div>
                    <div class="mt-2 text-base text-gray-500">
                      Plus, our platform is constantly evolving to meet the changing
                      needs.
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div class="order-first block w-full mt-12 aspect-square lg:mt-0">
              <Image
                class="object-cover object-center w-full mx-auto bg-gray-300 lg:ml-auto "
                src={profile}
                width={500}
                height={500}
                alt="Picture of the author"
              />
            </div>
          </div>
        </div>
      </section>

      {/* <div className="relative min-h-screen bg-cover bg-no-repeat bg-fixed bg-center">
        <div className="w-56 absolute bottom-0 right-0 ... bg-orange-200 rounded-l-full p-4 flex items-center justify-center ...">
          <div className="bg-white rounded-full p-4 flex items-center justify-center ...">
            <SlGlobe size={40} className="text-black rotate-12" />
          </div>
          <span className="ml-12 font-medium text-right	w-16 text-black bg-green-500">
            Located in the India
          </span>
        </div>
      </div> */}
      <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />


      {/* projects */}

      <section class="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
        <div class="flex h-screen flex-col justify-between font-sans">
          <main class="mb-auto">
            <div class="divide-y-4 divide-gray-200 dark:divide-gray-700">
              <div class="space-y-2 pb-8 pt-6 md:space-y-5">
                <h1 class="md:leading-14 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl">Latest</h1>
              </div>
              <ul class="divide-y-4 divide-gray-200 dark:divide-gray-700">
                <li class="py-12">
                  <article>
                    <div class="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                      <dl>
                        <dt class="sr-only">Published on</dt>
                        <dd class="text-base font-medium leading-6 text-gray-500 dark:text-gray-400"><time datetime="2023-08-05T00:00:00.000Z">August 5, 2023</time></dd>
                      </dl>
                      <div class="space-y-5 xl:col-span-3">
                        <div class="space-y-6">
                          <div>
                            <h2 class="text-2xl font-bold leading-8 tracking-tight"><a class="text-gray-900 dark:text-gray-900" href="/blog/release-of-tailwind-nextjs-starter-blog-v2.0">Release of Tailwind Nextjs Starter Blog v2.0</a></h2>
                            <div class="flex flex-wrap"><a class="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 mr-3 text-sm font-medium uppercase" href="/tags/next-js">next-js</a><a class="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 mr-3 text-sm font-medium uppercase" href="/tags/tailwind">tailwind</a><a class="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 mr-3 text-sm font-medium uppercase" href="/tags/guide">guide</a><a class="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 mr-3 text-sm font-medium uppercase" href="/tags/feature">feature</a></div>
                          </div>
                          <div class="prose max-w-none text-gray-500 dark:text-gray-400">Release of Tailwind Nextjs Starter Blog template v2.0, refactored with Nextjs App directory and React Server Components setup.Discover the new features and how to migrate from V1.</div>
                        </div>
                        <div class="text-base font-medium leading-6"><a class="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400" aria-label='Read "Release of Tailwind Nextjs Starter Blog v2.0"' href="/blog/release-of-tailwind-nextjs-starter-blog-v2.0">Read more →</a></div>
                      </div>
                    </div>
                  </article>
                </li>
                <li class="py-12">
                  <article>
                    <div class="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                      <dl>
                        <dt class="sr-only">Published on</dt>
                        <dd class="text-base font-medium leading-6 text-gray-500 dark:text-gray-400"><time datetime="2021-08-07T15:32:14.000Z">August 7, 2021</time></dd>
                      </dl>
                      <div class="space-y-5 xl:col-span-3">
                        <div class="space-y-6">
                          <div>
                            <h2 class="text-2xl font-bold leading-8 tracking-tight"><a class="text-gray-900 dark:text-gray-900" href="/blog/new-features-in-v1">New features in v1</a></h2>
                            <div class="flex flex-wrap"><a class="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 mr-3 text-sm font-medium uppercase" href="/tags/next-js">next-js</a><a class="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 mr-3 text-sm font-medium uppercase" href="/tags/tailwind">tailwind</a><a class="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 mr-3 text-sm font-medium uppercase" href="/tags/guide">guide</a></div>
                          </div>
                          <div class="prose max-w-none text-gray-500 dark:text-gray-400">An overview of the new features released in v1 - code block copy, multiple authors, frontmatter layout and more</div>
                        </div>
                        <div class="text-base font-medium leading-6"><a class="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400" aria-label='Read "New features in v1"' href="/blog/new-features-in-v1">Read more →</a></div>
                      </div>
                    </div>
                  </article>
                </li>
              </ul>
            </div>
          </main>
        </div>
      </section>


      {/* <div className="relative min-h-screen bg-cover bg-slate-200 bg-no-repeat bg-fixed bg-center ">
        <div class="m-10"><h2 class="text-3xl font-normal text-gray-900">Latest Projects</h2></div>

        <ul role="list" class="mx-10 mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 sm:grid-cols-2 md:gap-y-10 lg:max-w-none lg:grid-cols-3 ">
          <li class="border h-96 w-96 border-gray-900 p-8 ">
            <h3 class="mt-6 font-light text-gray-900 text-[5rem]">AI FUSI ON</h3>
          </li>
          <li class="border h-96 w-96 border-gray-900 p-8 ">
            <h3 class="mt-6 font-light text-gray-900 text-[5rem]">CODE TRIO</h3>
          </li>
          <li class="border h-96 w-96 border-gray-900 p-8 ">
            <h3 class="mt-6 font-light text-gray-900 text-[5rem]">NEWS LETTER </h3>
          </li>
        </ul>
      </div> */}


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
                        class="transition text-slate-900 dark:hover:text-teal-400"
                        href="/projects"
                      >
                        <GrLinkedinOption size={25} />
                      </a>
                      <a
                        class="transition text-slate-900 dark:hover:text-teal-400"
                        href="/speaking"
                      >
                        <GrGithub size={25} />
                      </a>
                      <a
                        class="transition text-slate-900 dark:hover:text-teal-400"
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
