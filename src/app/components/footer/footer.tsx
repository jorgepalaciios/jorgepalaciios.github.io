
import Link from "next/link"
import { FooterLogo } from "../images/images"

//Components


export default function Footer(){
  return (
    <footer>
      <nav className="flex flex-row flex-wrap items-center px-64 dark:bg-zinc-900 bg-neutral-50 text-center md:justify-center">
        {/* <Link href={'/'}>
          <FooterLogo />
        </Link> */}
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <Link
              href="#"
              className="block font-sans text-sm font-normal leading-relaxed text-blue-gray-900 antialiased transition-colors hover:text-pink-600 focus:text-pink-600"
            >
              About me
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="block font-sans text-sm font-normal leading-relaxed text-blue-gray-900 antialiased transition-colors hover:text-pink-600 focus:text-pink-600"
            >
              Contribute
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="block font-sans text-sm font-normal leading-relaxed text-blue-gray-900 antialiased transition-colors hover:text-pink-600 focus:text-pink-600"
            >
              Contact Me
            </Link>
          </li>
        </ul>
      </nav>
      <hr className="my-2 border-blue-gray-50" />
      <p className="flex justify-center items-center text-center text-md leading-relaxed dark:text-neutral-50 text-gray-900 antialiased">
        <small> 2024 Jorge Palacios</small>
      </p>
</footer>
  )
}