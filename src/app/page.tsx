

/** TO-DO  { 
 * use only components to show content
 * use cards to show experience and skills
 * check out this page template to take inspiration from https://astrolinkt.pages.dev/
}
*/
import About  from '@/app/ui/about'
import { Footer } from './ui/footer';

export default function Home() {
  return (
    <main className="flex min-h-screen max-w-screen flex-col items-center justify-center p-24 bg-[#d9d9d9]">
      <About />
      <Footer />
    </main>
  );
}
// 