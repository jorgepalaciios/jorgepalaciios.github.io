//Main
import Image from 'next/image'
// components
import Header from './components/header/header'
import Nav from "./components/nav/nav"
import Footer from './components/footer/footer'


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />

      <Image 
          className="dark:drop-shadow-[0_0_0.2rem_#ffffff70] "
          src="/japc2.svg"
          alt="japc shirt"
          width={150}
          height={150}
          priority
      />
      <Nav />
      <Footer />
    </main>
  )
}
