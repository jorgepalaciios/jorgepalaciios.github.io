import Image from "next/image"
interface Imgs {
  className: string
  src:string
  alt:string
  width:number
  height:number
  priority:boolean
}

//With this useless example for now I managed to learn passing props to components
// which will be helpful in the coming future

export default function Imgs(props: Imgs) {
  return (
    <div>
        <Image
          className={props.className}
          src={props.src}
          alt={props.alt}
          width={props.width}
          height={props.height}
          priority={props.priority}
        />
  </div>
  )
}