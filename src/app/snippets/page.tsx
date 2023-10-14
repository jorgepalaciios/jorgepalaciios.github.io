
import Header from "../components/header/header"


export default function Snippets() {
  return (
    <div className="flex w-full min-h-screen flex-col items-center justify-between">
      <Header></Header>
      <section><h1 className="text-4xl">Snippets</h1></section>
      <div className="z-10 w-full max-w-6xl items-center justify-center  text-lg lg:flex">
        <p>
          Cool snippets for you
        </p>
      </div>


    </div>
  )
}