/*
  create  a custom 404 page
*/


export default function NotFound() {
  return (
    <>
      <section className='flex justify-center flex-col gap-4 mt-80 items-center m-md h-md'>
        <h1 className=' text-4xl text-[#242424]'> Cannot reach this address</h1>
        <span> The url does not exist</span>
      </section>
    </>
  )
}

