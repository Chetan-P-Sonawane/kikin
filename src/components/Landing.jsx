import Title from "./Title"

const Landing = () => {

  let landingdata = {
    heading: ["Financing", "The Future"],
    para: " Py suppliers faster, manage invoices, and extend cash for longer. Get access to funding without giving up equity, so that you can focus on growing your company."
  }

  return (
    <div className="text-white">
      <Title heading={landingdata.heading} para={landingdata.para} bgColor={"#122217"} color={"text-green-500"} />
    </div>
  )
}

    // <div className="min-h-[110vh] bg-[#122217] text-white">
    // <div className='min-h-[80vh]  flex flex-col items-center justify-center'>
    //     { headings }
    //     <h5 className="text-[1.1vw] leading-tight pt-5 w-[32%] text-center">
    //         Py suppliers faster, manage invoices, and extend cash for longer.
    //         Get access to funding without giving up equity, so that you can focus
    //         on growing your company.
    //     </h5>

    //     <button className="mt-8 border-1 border-green-500 px-3 py-2 rounded text-[1vw] bg-green-500 text-black">Get Finding</button>
    // </div>
    // </div>
export default Landing