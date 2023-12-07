import Image from "next/image"

//Logo nav bar
export function LogoImg() {
    return (
        <Image 
        className="dark:drop-shadow-[0_0_0.2rem_#ffffff70] "
        src="/japc2.svg"
        alt="japc shirt"
        width={30}
        height={30}
        priority/>     
    )
}

//footer logo
export function FooterLogo() {
  return (
    <Image
    className="dark:drop-shadow-[0_0_0.2rem_#ffffff70] "
    src="/japc2.svg"
    alt="japc shirt"
    width={20}
    height={20}
    priority/> 
  )
}


// interface Imgs {
//   className: string
//   src:string
//   alt:string
//   width:number
//   height:number
//   priority:boolean
// }

//With this useless example for now I managed to learn passing props to components
// which will be helpful in the coming future

// export default function Imgs(props: Imgs) {
//   return (
//     <div>
//         <Imgs
//           className={props.className}
//           src={props.src}
//           alt={props.alt}
//           width={props.width}
//           height={props.height}
//           priority={props.priority}
//         />
//   </div>
//   )
// }