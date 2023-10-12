import Image from 'next/image'
import { Lora, Mulish } from 'next/font/google'
import profile from '../../public/profile.jpg'
const inter = Lora({ subsets: ['latin'] })
const mulish = Mulish({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`mx-10 my-20 flex flex-col lg:flex-row xl:text-7xl md:text-6xl justify-around`}
    >
      <div>
        <h1 className={`text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl p-0 my-5 ${inter.className}`}> Hello there! </h1>
        <p className={`mx-0 w-80 md:w-[400px] lg:w-[450px] xl:w-[500px] 2xl:w-[550px] text-xl  ${mulish.className}`}>
          I am Priyanshu Maurya, 4th year B.E Student in computer science. Here are some of my accomplisment, I have launched an open-source project that received 2000+ visits in just 2 days, and people appreciated its simple UI. I led a team of 2 to complete the project on time. My interests lie in front-end development, UI/UX, and Machine learning. Moreover, I actively share useful content on LinkedIn and Twitter to help others.
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
  )
}

// 'md': '768px',

// 'lg': '1024px',

// 'xl': '1280px',

// '2xl': '1536px',