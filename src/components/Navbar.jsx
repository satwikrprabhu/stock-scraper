import Link from "next/link"


const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-20  text-center md:text-left border-b border-gray-400/20 bg-gray-600 bg-opacity-5 backdrop-blur-lg backdrop-filter p-4 flex justify-between drop-shadow-xl">
        <h1 className="md:px-12 font-bold text-4xl">
          <Link href='/'>SpeakStocks</Link>
          </h1>
    </nav>
  )
}

export default Navbar