
const Good = () => {

    let headings = ["Good for the", "planet. and", "your business."].map((item, index) => {
        return (
          <h2 key={index} className="text-[10vw] leading-[9vw] xs:text-[9vw] xs:leading-[8vw] sm:text-[8vw] sm:leading-[7vw] md:text-[7vw] md:leading-[6vw] lg:text-[7vw] lg:leading-[6vw] tracking-tight font-[800] uppercase" >{item}</h2>
        )
      })

  return (
      <div className='min-h-[100vh] bg-[#f4ebe2] flex flex-col items-center justify-center'>
        {headings}
         <h5 className="pt-[2vw] lg:pt-5 text-[2.4vw] xs:text-[2.2vw] sm:text-[1.8vw] md:text-[1.4vw] lg:text-[1.1vw] leading-tight w-[65%] xs:w-[60%] sm:w-[48%] md:w-[40%] lg:w-[32%] text-center">
            We are on a mission to help good businesses grow.
            This is why reward sustainable businesses with lower fees, freeing up even more of
            your cash.
            Get started and access funding in 5 minutes.
          </h5>
      <button className="mt-[3vw] lg:mt-8 px-3 py-2 text-[3.2vw] xs:text-[2.6vw] sm:text-[1.8vw] md:text-[1.4vw] lg:text-[1vw] border-1 border-green-500  rounded bg-green-500 text-black">Get Finding</button>
          </div>
  )
}

export default Good