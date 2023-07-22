import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './navbar/page'
import Head from 'next/head'
import { Roboto} from 'next/font/google'


const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: 'Learn_NextJS',
  description: 'Exploring next JS',

}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Navbar />
        {children}
        

      </body>
    </html>
  )
}
