import Search from "@/components/Search"

const Home = () => {
  return (
    <div className="min-h-screen w-full flex flex-wrap md:flex-row items-center justify-center bg-slate-950">
      <div  className="md:w-1/2 min-h-screen flex flex-col justify-center">
      <div className="flex flex-col items-center">
      <h1 className="text-5xl font-semibold   text-left">Unleash the 
      </h1>
      <h1 className="text-5xl text-white font-semibold text-left">Power of Speech</h1></div>
      <Search2 />
      <div className="flex flex-row justify-between md:justify-evenly text-xl mx-4 mt-20">
        <div className="border border-white p-4 rounded-xl">Nifty50</div>
        <div className="border border-white p-4 rounded-xl">Sensex</div>
        <div className="border border-white p-4 rounded-xl">Bank Nifty</div>
      </div></div>
      <div className="md:w-1/2">
        <h1 className="text-4xl font-semibold text-center">Trending Stocks</h1>
        <div className="flex flex-col text-center mt-16 space-y-10">
          <div>Lorem ipsum dolor sit amet consectetur adipisicing.</div>
          <div>Lorem ipsum dolor sit amet consectetur adipisicing.</div>
          <div>Lorem ipsum dolor sit amet consectetur adipisicing.</div>
          <div>Lorem ipsum dolor sit amet consectetur adipisicing.</div>
          <div>Lorem ipsum dolor sit amet consectetur adipisicing.</div>
        </div>
      </div>
    </div>
  )
}

export default Home