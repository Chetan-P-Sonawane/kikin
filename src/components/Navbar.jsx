
const Navbar = () => {
  return (
      <div className='px-4 xs:px-6 py-3 bg-[#122217] text-white flex items-center justify-between' >
       <h3 className='text-[5vw] xs:text-[4vw] sm:text-[3.6vw] md:text-[2.8vw] lg:text-[2.6vw] font-[700]'>kikin</h3>

        <div className='flex items-center gap-1 sm:gap-2 '>
            <button className='border-1 px-2 py-1.5 sm:px-3 sm:py-2 rounded text-[3.2vw] xs:text-[2.6vw] sm:text-[1.8vw] md:text-[1.4vw] lg:text-[1vw]'>Log in</button>
            <button className='border-1 border-green-500 px-2 py-1.5 sm:px-3 sm:py-2 rounded text-[3.2vw] xs:text-[2.6vw] sm:text-[1.8vw] md:text-[1.4vw] lg:text-[1vw] bg-green-500 text-black'>Get Funding</button>
        </div>
    </div>
  )
}

export default Navbar