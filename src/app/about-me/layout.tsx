import '../globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Jorge Palacios | About me',
  description: 'a brief description about me in life',
}

export default function AboutMeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section className={inter.className}>{children}</section>
)
}
