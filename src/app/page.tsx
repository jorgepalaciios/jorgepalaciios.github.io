//Main

// components
import Header from './components/header/header'
import Nav from './components/nav/nav'
import Footer from './components/footer/footer'

export default function Home() {
  return (
    <>
      <Header />
      <main className='relative z-0 container mx-auto max-w-7xl px-6 min-h-[calc(100vh_-_64px_-_108px)] mb-12 flex-grow'>
        
        <div className='grid grid-cols-12'>
          <div className='fixed overflow-visible lg:block lg:col-span-2 mt-8 pr-4'>
          <Nav />
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
