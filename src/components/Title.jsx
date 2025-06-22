import React from 'react'

const Title = ({ heading , para, bgColor, color }) => {

    let headings = heading.map((item, index) => {
        return (
          <h2 key={index} className={`text-[12vw] leading-[10.5vw] xs:text-[11vw] xs:leading-[9.5vw] sm:text-[10vw] sm:leading-[8.5vw] md:text-[9vw] md:leading-[7.5vw] lg:text-[8vw] lg:leading-[6.5vw] tracking-tight font-[800] uppercase ${index == 1 && color}`}>{item}</h2>
        )
      })

  return (

          <div className={`min-h-[100vh] bg-[${bgColor}] text-${color} flex flex-col items-center justify-center`}>

              {headings}

              <h5 className="pt-[2vw] lg:pt-5 text-[2.4vw] xs:text-[2.2vw] sm:text-[1.8vw] md:text-[1.4vw] lg:text-[1.1vw] leading-tight w-[65%] xs:w-[60%] sm:w-[48%] md:w-[40%] lg:w-[32%] text-center">
                {para}
              </h5>

              <button className="mt-[3vw] lg:mt-8 px-3 py-2 text-[3.2vw] xs:text-[2.6vw] sm:text-[1.8vw] md:text-[1.4vw] lg:text-[1vw] border-1 border-green-500  rounded bg-green-500 text-black">Get Finding</button>

          </div>

  )
}

export default Title