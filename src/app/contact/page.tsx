//Main
import Image from 'next/image'
// components

import Header from '../components/header/header'
import Footer from '../components/footer/footer'
import Form from '../components/form/form'


export default function Contact() {
  return (
    <>
      <Header />
      <section className="flex flex-col items-center justify-between">

        <Image 
            className="mt-8 dark:drop-shadow-[0_0_0.2rem_#ffffff70] "
            src="/japc2.svg"
            alt="japc shirt"
            width={50}
            height={50}
            priority
        />
      <Form />
      </section>
      <Footer />
    </>
  )
}