import '../globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Jorge Palacios | Templates',
  description: 'Useful templates to start developing right away',
}

export default function TemplatesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <section className={inter.className}>{children}</section>
  )
}
