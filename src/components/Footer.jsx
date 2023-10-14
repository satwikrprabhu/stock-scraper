
const Footer = () => {
    const links = [{
        linkname: "Home",
        url: "#home",
      },
      {
        linkname: "About",
        url: "#about",
      },
      {
        linkname:"Contact",
        url:"#contact",
      },
      ];
  return (
    <footer className='bg-gradient-to-r from-gray-800 via-slate-800 to-slate-700 font-Poppins'>
    <div className='text-center w-full py-8 font-semibold bottom-0'>
      <h1 className="text-white mb-6">SpeakStocks</h1>
      <p className="text-white mb-6">&copy;Inspirante Technologies</p>
      {/* <p className="text-white mb-6 text-center">Made with ❤️ by </p> */}
      <ul className='flex items-center justify-center space-x-20  text-white'>
        {links.map((link)=><li>{link.linkname}</li>)}
      </ul>
    </div>
    </footer>
  );
};

export default Footer;
