'use client'
import { Input, Button } from '@nextui-org/react'


export default function Form() {
  return (
    <>
      <section className="flex flex-col mt-6  flex-wrap md:flex-nowrap gap-4">
        <fieldset className='flex-col justify-center items-center'>
          <h2>Contact Form</h2>
          <form className='' action="post">
            <Input className='block m-2' type="text" label="Full name" placeholder="Enter your fullname"/>
            <Input className='block m-2' type="email" label="Email" placeholder="Enter your email"/>
            <Input className='block m-2' type="tel" label="Phone" placeholder="Enter your phone" />
            <Button className='block m-2' color='success' >Contact me</Button>
          </form>
        </fieldset>
      </section>
      
      {/* <section className="flex flex-col mt-10 mx-10 items-center justify-center">
        <h2>Contact Form</h2>

        <form method="post" action="/">
          <fieldset className="border rounded-md border-gray-300 p-5 justify-center items-center">
            <legend>Personal Info</legend>

            <label className="block mt-1 ">
              Name: &nbsp;
              <input className="rounded-md ml-1" type="text" name="name" placeholder="Type your name" required/>
            </label>
            <label className="block mt-1 ">
              Lastname: &nbsp;
              <input className="rounded-md ml-1" type="text" name="lastname" placeholder="Type your lastname" required/>
            </label>
            <label className="block mt-1 ">
              Phone: &nbsp;
              <input className="rounded-md ml-1" type="tel" name="phone" placeholder="+58 555-555-5555" pattern="[+-0-9]{12}"/>
            </label>
            <label className="block mt-1 ">
              Email: &nbsp;
              <input className="rounded-md ml-1" type="email" name="email" placeholder="some@example.com" required/>
            </label>
          </fieldset>
          <button
              className="mb-2 mt-3 block w-full rounded-lg bg-gradient-to-tr from-green-600 to-green-400 py-2 px-4 font-sans text-xs font-bold uppercase text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="submit"
              data-ripple-light="true"
            >
              <span>Send</span>
            </button>
        </form>
      </section> */}
    </>
  )
}