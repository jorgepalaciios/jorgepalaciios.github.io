

export default function Projects() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 ">
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
      <section><h1 className="text-4xl">My Projects</h1></section>
      <article>
        <p className="items-center p-2 ">
          You will probably find detailed explanation of projects in which I{'\''}ve worked on,&nbsp;
          or I have experience with!
        </p>
      </article>


    </main>
  )
}