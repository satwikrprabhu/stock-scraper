'use client'
import Link from "next/link"


const Navbar = () => {

  return (
    <nav className="fixed bg-white top-0 w-full z-20 text-center md:text-left border-b border-gray-400/20 dark:bg-gray-600 bg-opacity-5 backdrop-blur-lg backdrop-filter p-4 flex justify-between items-center drop-shadow-xl">
        <h1 className="md:px-12 font-bold text-4xl text-white">
          <Link href='/'>SpeakStocks</Link>
          </h1>
    </nav>
  )
}

export default Navbar