import { Inter } from 'next/font/google'
import type { NextPage } from 'next'

const inter = Inter({ subsets: ['latin'] })

const HomePage: NextPage = () => {
  return (
    <>
      <h1> Hello World </h1>
      <h2> Hello World </h2>
    </>
  )
}

export default HomePage