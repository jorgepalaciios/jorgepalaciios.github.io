import Image from "next/image";

export default function LogoImage () {
  return (
    
    <Image 
      src={'/logo-jp.png'}
      alt="logo brand for Jorge Palacios"
      width={500}
      height={500}
    />
  )
}