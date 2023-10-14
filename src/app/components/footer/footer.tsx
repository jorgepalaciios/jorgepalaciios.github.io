import Imgs from "../images/images"
import Link from "next/link"
import Image from "next/image"
export default function Footer(){
  return (
    <footer className="w-full bg-white px-8 py-2">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-white text-center md:justify-between">
      <Link href={'/'}>
        <Image 
          className="dark:drop-shadow-[0_0_0.2rem_#ffffff70] "
          src="/japc2.svg"
          alt="japc shirt"
          width={30}
          height={30}
          priority
        />
      </Link>
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <a
              href="#"
              className="block font-sans text-sm font-normal leading-relaxed text-blue-gray-900 antialiased transition-colors hover:text-pink-600 focus:text-pink-600"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block font-sans text-sm font-normal leading-relaxed text-blue-gray-900 antialiased transition-colors hover:text-pink-600 focus:text-pink-600"
            >
              License
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block font-sans text-sm font-normal leading-relaxed text-blue-gray-900 antialiased transition-colors hover:text-pink-600 focus:text-pink-600"
            >
              Contribute
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block font-sans text-sm font-normal leading-relaxed text-blue-gray-900 antialiased transition-colors hover:text-pink-600 focus:text-pink-600"
            >
              Contact Us
            </a>
          </li>
        </ul>
      </div>
      <hr className="my-3 border-blue-gray-50" />
      <p className="block text-center text-sm font-normal leading-relaxed text-blue-gray-900 antialiased">
        © 2023 Jorge Palacios
      </p>
</footer>
  )
}