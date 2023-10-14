import '../globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Jorge Palacios | Learn',
  description: 'Useful courses to start Developing',
}

export default function LearnLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <section className={inter.className}>{children}</section>
  )
}
