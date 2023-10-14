import Image from "next/image"
// Components
import Header from "../components/header/header"
import Footer from "../components/footer/footer"


export default function Learn() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-between ">
      <Header />
      {/* <div className="z-10 w-full items-center lg:justify-between font-mono text-sm lg:flex">
        <div className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl  dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30  hover:bg-neutral-600/30">
            <Link href="/">Home</Link>
        </div>
      </div> */}
      <section><h1 className="text-3xl md:text-4xl lg:text-7xl">Learn</h1></section>
      <Image 
        className="dark:drop-shadow-[0_0_0.2rem_#ffffff70] "
        src="/japc2.svg"
        alt="japc shirt"
        width={150}
        height={150}
        priority
      />
      <article className="py-3">
        <p className="items-center p-2 ">
          You will find cool and useful Snippets which I{'\''}ve used ,&nbsp;
        </p>
      </article>
      <Footer />

    </section>
  )
}