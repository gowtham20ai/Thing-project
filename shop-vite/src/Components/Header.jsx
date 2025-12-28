
import { useState } from "react"
import { Link } from "react-router-dom";

const Header = () => {
  const [isopen,setIsopen] = useState(false);
  return (
    <>
      <header >
        <nav className="bg-white 2xl-container max-auto">
          <div className=" w-[80%] mx-auto top-5  scroll-smooth  ">


            <div className='flex items-center mt-4'>
              <img src="https://ik.imagekit.io/8wxvbajv2/unnamed%20(4).png?updatedAt=1759686220963" alt="THING" className='w-[100px]
            h-[80px] rounded-[30px] rounded-bl-none flex justify-start items-center lg:w-[100px] lg:h-[80px]  ' />
              <h1 className='ml-2 text-3xl font-semibold'>THIN<span className=' font-extrabold'>G</span></h1>


              {/* <input className='w-[120px] h-[40px] rounded-xl rounded-bl-none border border-b-red-500 p-2  m-8 md:w-[900px]
              md: h-[50px] md:items-center md:ml[60%]' placeholder='search '
                /> */}

              <div className='  flex  -mr-8  justify-end w-screen   '>
                
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  className=" rotate-center lucide lucide-text-align-justify-icon lucide-text-align-justify mr-[10%]  lg:hidden block "
                  
                  onClick={() => setIsopen(!isopen)}
                  
                  ><path d="M3 5h18" /><path d="M3 12h18" /><path d="M3 19h18" />
                </svg>
                {/* {isopen ? "X" : "-"} */}
                      
                <svg
                  xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}
                  strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x-icon lucide-x hidden   "
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>

              </div>





            </div>

            <div className=' hidden    lg:block    justify-between items-center  '>
              <ul className=' text-[40px] font-semibold  flex justify-between items-center gap-5 ml-5 p-2  lg:text-[20px] '>
                <li className='text-blue-800 hover:text-xl hover:scroll-smooth'>Home</li>


                <a href="#Offer">
                <li className='' >Offer</li>
                </a>
                <a href="#Product"> 
                 <li className=' '>Products</li>
                </a>
                <li className=' '>Team </li>

                
                <a href="#footer">
                  <li className=' '>Contact</li> 
                </a>
            
                <input className='w-fit h-[50px] rounded-2xl rounded-bl-none border border-b-red-500 p-1  space-y-3 ' placeholder='search '
                />
                
              </ul>

            </div >






            <div className='slide-left scroll-smooth lg:hidden     rounded-xl rounded-tl-none  h-screen absolute  top-[62px]  z-0  '>
              {isopen && (
              <ul className='  bg-slate-200 text-xl  flex flex-col   items-start  w-[90%] h-screen p-12 gap-6 m-10  '>
                <li className='  lg:text-blue-800 hover:text-xl scroll-smooth ml-3'onClick={()=>setIsopen(false)}>Home</li>

                <li className='hover:text-xl hover:bg-slate-400 p-2 rounded-lg ' >Company</li>
                <li className='hover:text-xl hover:bg-slate-400 p-2 rounded-lg  '>Marketplace</li>
                <li className='hover:text-xl hover:bg-slate-400 p-2 rounded-lg '>Team </li>
                <li className='hover:text-xl hover:bg-slate-400  p-2 rounded-lg '>contact</li>
              
              </ul>
              )}
            </div >


          </div>
        </nav>
      </header>


    </>
  )
}


















export default Header