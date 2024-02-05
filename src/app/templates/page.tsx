
// Components
import Header from "../components/header/header"
import Footer from "../components/footer/footer"


export default function Templates() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-between ">
      <Header />
      <section><h1 className="text-3xl md:text-4xl lg:text-5xl">Templates</h1></section>

      <article className="py-3">
        <p className="items-center p-2 ">
          You will find cool and useful Templates to start developing right away which I{'\''}ve used. &nbsp;
        </p>
      </article>
      <Footer />

    </section>
  )
}