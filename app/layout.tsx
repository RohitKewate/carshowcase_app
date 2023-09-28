import { Footer, Navbar } from '@/components'
import './globals.css'
import type { Metadata } from 'next'




export const metadata: Metadata = {
  title: 'Car App',
  description: 'Find, book, or rent a car - quickly and easily!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
