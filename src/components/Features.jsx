
const Features = () => {

  const featuredata = [
    {
      id: "01",
      title: "grow with the flow",
      para: "We help you preserve your cash, so that you can focus on growing your business and improve cash flow."
    },
    {
      id: "02",
      title: "adaptable funding. endless possibilities.",
      para: "Our AL-driven funding automatically updates as you grow, so you can always get the right amount of funds."
    },
    {
      id: "03",
      title: "fast funds. full equity.",
      para: "Build your cash instantly without the need for dilution, and own more of your business for longer."
    }
  ]


  const featurecomp = featuredata.map((item, index)=>{
    return (
      <div key={index} className="pb-8 pt-10 flex border-b-1">
        <div className="h-[30vw] w-[50%] flex flex-col justify-between">
          <div>
            <span className='py-3 px-3.5 rounded-full bg-green-500 text-[1vw]'>{item.id}</span>
            <h5 className="text-[3.5vw] leading-[3.5vw] font-[800] tracking-tight uppercase pt-[2.5vw] w-[60%]">{item.title}</h5>
          </div>
          <p className="text-[1.2vw] leading-[1.6vw]  w-[75%]">{item.para}</p>
        </div>

        <div className="h-[30vw] w-[50%] bg-blue-400">
        </div>
      </div>
    )
  })

  return (
    <div className='min-h-[30vw] bg-[#f4ebe2] p-8 '>
        {featurecomp}
    </div>
  )
}

export default Features