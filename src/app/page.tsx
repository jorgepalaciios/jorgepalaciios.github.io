/** TO-DO  { 
 * use only components to show content
 * add a NAVBAR as you planned
 * add light/dark mode button
 * use cards to show experience and skills
 * check out this page template to take inspiration from https://astrolinkt.pages.dev/
}
*/
import About from "@/app/ui/about";
import ExperienceCard from "@/app/ui/cards/experience-cards";
import { Footer } from "./ui/footer";

export default function Home() {
  return (
    <main className="antialiased flex min-h-screen max-w-2xl mx-auto mt-10 xl:mt-12 p-4 flex-col items-center justify-center">
      <About />
      <ExperienceCard />
      <Footer />
    </main>
  );
}
