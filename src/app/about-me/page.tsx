
export default function AboutMe() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <div className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl  dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30  hover:bg-neutral-600/30">
          <a
            className="pointer-events-auto flex place-items-center gap-2 p-8 lg:pointer-events-auto xl:pointer-events-auto lg:p-1 "
            href="/"
            // target="_blank" <<-- this target property makes links to open in another tab
            rel="noopener noreferrer"
          >
            Home{' '}
          </a>
        </div>
      </div>
      <section><h1 className="text-4xl">About me section</h1></section>
      <div className="z-10 w-full max-w-6xl items-center justify-center  text-lg lg:flex">
        <p>
          This is a short description of my professional career
        </p>
      </div>


    </main>
  )
}