import '../globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Jorge Palacios | My Projects',
  description: 'My personal projects as a developer',
}

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <section className={inter.className}>{children}</section>
  )
}
