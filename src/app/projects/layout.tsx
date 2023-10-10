import '../globals.css'
import { Blaka_Ink } from 'next/font/google'

const inter = Blaka_Ink({
  subsets: ['latin-ext'],
  weight: '400'
})

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
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
