import Link from "next/link"
import { NavBarLogo } from "../images/images"
import { ThemeSwitcher } from "../ThemeSwitcher"
// add a theme changer button in the nav bar

export default function Header() {
  return(
    <header className="header">
      <nav className="flex items-center justify-between">
        <Link href="/" className="hidden cursor-pointer py-1.5 "
        rel="noreferrer ">
          <NavBarLogo />
        </Link>
        <div className="text-2xl dark:text-slate-100">
          <ThemeSwitcher />
        </div>
        <button
          className="hidden rounded-lg bg-gradient-to-tr from-cyan-600 to-green-300 py-2 px-4 font-sans text-xs font-bold hover:uppercase text-neutral-50 shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block"
          type="button"
          data-ripple-light="true"
        >
          <span>Hire me</span>
        </button>
        <button
          className="middle none relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] rounded-lg text-center font-sans text-xs font-medium uppercase text-blue-gray-500 transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden"
          data-collapse-target="sticky-navar"
        >
          <span className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transform">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </span>
        </button>
      </nav>
      {/* <nav
        className="block h-0 w-full basis-full overflow-hidden text-blue-gray-900 transition-all duration-300 ease-in lg:hidden"
        data-collapse="sticky-navar"
      >
        <ul className="mt-2 mb-4 flex flex-col gap-2 pb-2">
          <li className="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased">
          <Link href="/learn" className="flex items-center"
          rel="noreferrer ">
              Learn
          </Link>
          </li>
          <li className="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased">
          <Link href="/templates" className="flex items-center"
          rel="noreferrer ">
              Templates
          </Link>
          </li>
          <li className="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased">
          <Link href="/snippets" className="flex items-center"
          rel="noreferrer ">
              Snippets
          </Link>
          </li>
          <li className="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased">
          <Link href="/#rename it" className="flex items-center"
          rel="noreferrer ">
              rename it
          </Link>
          </li>
          <button
            className="mb-2 block w-full rounded-lg bg-gradient-to-tr from-green-600 to-green-400 py-2 px-4 font-sans text-xs font-bold uppercase text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            data-ripple-light="true"
          >
            <span>Hire me</span>
          </button>
        </ul>
      </nav> */}
  </header>
  )
}