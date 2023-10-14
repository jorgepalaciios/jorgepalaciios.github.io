import Link from "next/link"


export default function Nav () {
  return(

    <nav className="sm:sticky left-2 hidden mb-32 sm:grid text-center text-gray-900 lg:mb-0 lg:grid-cols-4 lg:text-left border-gray-500">
      <Link href={'/#experience'} className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100  hover:dark:bg-neutral-800/30">
        <h2 className="mb-3 text-2xl font-semibold">Experience <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">-&gt;</span></h2>
        <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          My most relevant experience
        </p>
      </Link>

      <Link href={'/#Skills'} className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100  hover:dark:bg-neutral-800/30">
        <h2 className="mb-3 text-2xl font-semibold"> Skills
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">-&gt;</span>
        </h2>
        <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          Find some helpful snippets
        </p>
      </Link>

      <Link href={'/#Templates'} className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100  hover:dark:bg-neutral-800/30">
        <h2 className="mb-3 text-2xl font-semibold">Templates 
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">-&gt;</span>
        </h2>
        <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          Explore useful templates
        </p>
      </Link>

      <Link href={'/#cv'} className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100  hover:dark:bg-neutral-800/30">
        <h2 className="mb-3 text-2xl font-semibold">CV 
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">-&gt;</span>
        </h2>
        <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          Here you&apos;ll find my resume
        </p>
      </Link>
    </nav>
  )
}