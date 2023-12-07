import Link from "next/link"


export default function Nav () {

  const navElements = ['Experience', 'Skills', 'Several']

  // const content = (
  //   <aside>
  //     <nav className="sticky z-0 left-2 flex-wrap flex-col ">
  //       <Link href={}>

  //       </Link>

  //     </nav>
  //   </aside>
  // )

  return(
    <aside>
      
          <nav className="sticky z-0 left-2 flex-wrap flex-col ">
            <Link href={'/#experience'} className="">
              <h2 className="mb-3 text-2xl font-semibold">Experience </h2>
      
            </Link>
      
            <Link href={'/#Skills'} className="">
              <h2 className="mb-3 text-2xl font-semibold"> Skills
              </h2>
      
            </Link>
      
            <Link href={'/#Templates'} className="">
              <h2 className="mb-3 text-2xl font-semibold"> Something
              </h2>
      
            </Link>
      
            <Link download id="cv" href={'../resume-jp.pdf'} className=""
            target="_blank">
              <h2 className="mb-3 text-2xl font-semibold">CV
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">-&gt;</span>
              </h2>
              <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                Click to download my resume
              {/* make this text to appear when hover only */}
              </p>
            </Link>
          </nav>
    </aside>
  )
}