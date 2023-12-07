
import Link from "next/link"
import { FooterLogo } from "../images/images"

//Components


export default function Footer(){
  return (
    <footer className="fixed bottom-0 h-[80px] w-full z-30 bg-white px-8 py-2">
      <nav className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-white text-center md:justify-between">
        <Link href={'/'}>
          <FooterLogo />
        </Link>
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
      <hr className="my-3 border-blue-gray-50" />
      <p className="block text-center text-sm leading-relaxed text-gray-900 antialiased">
        <small>© 2023 Jorge Palacios</small>
      </p>
</footer>
  )
}