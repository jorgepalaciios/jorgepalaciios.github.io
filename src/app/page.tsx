//Main

// components
import Header from './components/header/header'
import { ProfilePicture } from './components/images/images'
import {Experience1, Experience2} from './components/ui/experience'
import {Skill1, Skill2, Skill3} from './components/ui/skills'
import Footer from './components/footer/footer'

export default function Home() {
  return (
    <>
      <main className='main'>
        <Header />
          <section className='intro'>
            <div className='picture-container'>
              <ProfilePicture />
            </div>
            <div className='intro-text'>
              <h1>Jorge Palacios</h1>
              <p>Soy ingeniero de sistemas, fullstack engineer.</p>
            </div>
          </section>

          <hr></hr>

          <section className='experience'>
            <h1 id='experience'>Experiencia</h1>
            <div>
              <Experience1 />
              <Experience2 />
            </div>
          </section>
          
          <div className='flex flex-col items-center justify-center'>
            <h1 id='skills' className='text-2xl'>Skills</h1>
            <div className='flex flex-row space-x-40'>
              <Skill1 />
              <Skill2 />
              <Skill3 />
            </div>
          </div>
      </main>
      <Footer />
    </>
  )
}
