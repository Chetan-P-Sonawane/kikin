import Feature1 from "../assets/Feature1.png";
import Feature2 from "../assets/Feature2.png";
import Feature3 from "../assets/Feature3.png";


const Features = () => {

  const featuredata = [
    {
      id: "01",
      title: "grow with the flow",
      para: "We help you preserve your cash, so that you can focus on growing your business and improve cash flow.",
      img: Feature1,
    },
    {
      id: "02",
      title: "adaptable funding. endless possibilities.",
      para: "Our AL-driven funding automatically updates as you grow, so you can always get the right amount of funds.",
      img: Feature2,
    },
    {
      id: "03",
      title: "fast funds. full equity.",
      para: "Build your cash instantly without the need for dilution, and own more of your business for longer.",
      img: Feature3,
    }
  ]


  const featurecomp = featuredata.map((item, index)=>{
    return (
      <div key={index} className="pb-[6vw] pt-[6vw] flex  border-b-1">
        <div className="h-[35vw] lg:h-[30vw] w-[50%] flex flex-col justify-between">
          <div>
            <span className=' w-[5vw] h-[5vw] lg:w-[3vw] lg:h-[3vw] text-[2vw] lg:text-[1vw] rounded-full bg-green-500 flex items-center justify-center'>{item.id}</span>
            <h5 className="text-[4vw] leading-[3.5vw] lg:text-[3.5vw] lg:leading-[3.5vw] font-[800] tracking-tight uppercase pt-[2.5vw] w-[60%]">{item.title}</h5>
          </div>
          <p className="text-[2vw] leading-[2.4vw] xs:text-[2vw] xs:leading-[2.3vw] sm:text-[1.8vw] sm:leading-[2vw] md:text-[1.6vw] md:leading-[1.6vw] lg:text-[1.2vw] lg:leading-[1.6vw]  w-[75%]">{item.para}</p>
        </div>

        <div className="h-[35vw] lg:h-[30vw] w-[50%] bg-cover"
          style={{ backgroundImage: `url(${item.img})` }}
        >
        </div>
      </div>
    )
  })

  return (
    <div className='min-h-[30vw] bg-[#f4ebe2] p-4 xs:px-6 md:p-8 '>
        {featurecomp}
    </div>
  )
}

export default Features