import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`body flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <h1>treste</h1>
    </main>
  )
}
