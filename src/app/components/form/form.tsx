'use client'
import { Input, Button } from '@nextui-org/react'


export default function Form() {
  return (
    <>
      <section className="flex flex-col mt-2  flex-wrap md:flex-nowrap gap-4">
        <fieldset className='flex-col justify-center items-center border rounded-md p-10'>
          <h2>Contact Form</h2>
          <form className='' action="post">
            <Input className='block m-2' type="text" label="Full name" placeholder="Enter your fullname"/>
            <Input className='block m-2' type="email" label="Email" placeholder="Enter your email"/>
            <Input className='block m-2' type="tel" label="Phone" placeholder="Enter your phone" />
            <Button className='block m-2' color='success' >Contact me</Button>
          </form>
        </fieldset>
      </section>
    </>
  )
}