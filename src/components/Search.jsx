'use client'


// export const searchForm = useRef(null);
// export const searchBar = useRef(null);
import { useState,FormEvent } from "react"
// import { useRouter } from "next/navigation"

export default function Search() {
  const [search,setSearch] = useState('');
  // const router = useRouter();

  const handleSubmit = (e)=>{
    e.preventDefault();
    setSearch(e.target.value);
    // router.push(`/${search}/`)
  }

  return (
    <div  className="flex justify-center items-center mt-20">
        <form id="search-form" onSubmit={handleSubmit} className="flex justify-center md:justify-between">
        <input type="text" id="search-bar" className="px-4 py-3 text-black text-2xl rounded-lg" value={search} onChange={(e)=> setSearch(e.target.value)}
        placeholder="Search..."
        />
        <button className="p-2 text-xl rounded-xl bg-slate-300 ml-2 font-bold">🚀</button>
        </form>
        <div id="stock-details"></div>
      </div>
  )
}

