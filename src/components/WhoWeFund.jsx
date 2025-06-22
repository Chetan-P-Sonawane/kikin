import { GoHomeFill } from "react-icons/go";
import { HiDocumentText } from "react-icons/hi";
import { BiSolidLeaf } from "react-icons/bi";

const WhoWeFund = () => {

   let whodata = [
        {
           image: <GoHomeFill />,
           title: "uk-based small to midsize businesses"
        },
        {
            image: <HiDocumentText />,
            title: "who need to pay to suppliers around the world",
        },
        {
            image: <BiSolidLeaf />,
            title: "who can demonstrate sustainability efforts"
        }
   ]

  return (
    <div className='bg-[#73d3ec] px-4 pt-4 md:px-8 md:pt-8'>
        <div className='h-[45vw] xs:h-[40vw] p-4 md:p-8 text-white flex flex-col justify-between  bg-[url("https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")] bg-cover '>
            <div className='text-end'>
                <h3 className='text-[6vw] leading-[5vw] font-[800] tracking-tighter'>WHO WE</h3>
                <h3 className='text-[6vw] leading-[5vw] font-[800] tracking-tighter'>FUND</h3>
            </div>
            <div className='text-start'>
                <p className='text-[2vw] leading-[2vw] md:text-[1.2vw] md:leading-[1.2vw] w-[45%] md:w-[40%]'>We back companies committed to a better world with strong environmental, social, and governance ethics.</p>
            </div>
        </div>

        <div className='border-t-1 mt-4 md:mt-8 grid grid-cols-3'>
        {
            whodata.map((item,index) => {
            return(
                <div className={`h-[35vw] xs:h-[30vw] p-2 xs:p-4 sm:p-6 md:p-8 ${index == 2 ? "border-r-0" : "border-r-1"} border-black`} >
                    <span className="inline-block rounded-full p-1 md:p-1.5 text-[2.6vw] md:text-[1.2vw] text-white bg-black">
                        {item.image}
                    </span>
                    <h5 className="pt-[2.5vw] text-[2.5vw] leading-[2.5vw] sm:leading-[2.2vw] tracking-tight uppercase font-[800]">{item.title}</h5>
                </div>
                )
            })
        }
        </div>
    </div>
  )
}

export default WhoWeFund