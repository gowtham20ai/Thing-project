


const Footer = () => {
  return (
    <>

      <footer className=" " id="footer">
        <div className='2xl-container mx-auto '>
          <div className='w-[95%] mx-auto  '>
            <div className='   lg:flex lg:justify-around lg:w-fit 
            grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-col-4 scroll-smooth '>

              <div className=' flex' >
                <img src="https://ik.imagekit.io/8wxvbajv2/unnamed%20(4).png?updatedAt=1759686220963" alt="logo"
                  className='w-fit h-[80px] flex rounded-2xl rounded-tl-none ml-3
                    md:w-[200px] md:h-[70%]  md:block md:rounded-[40px] md:rounded-tl-none
                    lg:w-[300px] lg:h-[200px]  ' />
              </div>
              <div className='  col-span-2 flex justify-around items-center text-center text-xl font-semibold ml-4
              lg:w-screen lg:flex lg:justify-around lg:items-center lg:text-center lg:text-xl lg:font-medium   '>


                <div className=' flex '>
                  <ul className=' md:flex md:flex-col  lg:flex lg:flex-col lg:gap-1  ' >
                    <li>Home</li>

                    <li>New Arrivals</li>
                    <li>Best Sellers</li>
                    <li>Sale</li>
                  </ul>
                </div>

                <div className=' flex   '>
                  <ul className=' md:flex flex-col lg:flex lg:flex-col lg:gap-1 '>
                    <li>Help</li>

                    <li>Contact Us</li>
                    <li>Shipping info</li>
                    <li>Returns</li>
                  </ul>
                </div>


                <div className=' flex  '>
                  <ul className='lg:flex lg:flex-col lg:gap-1 '>
                    <li>About</li>

                    <li>Our Story</li>
                    <li>Blog</li>
                    <li>Careers</li>
                  </ul>
                </div>





              </div>
            </div>


          </div>
        </div>



        <div className='flex justify-end items-center mt-8 mr-5 gap-5 scroll-smooth '>


          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
            stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-facebook-icon lucide-facebook
                  size-[30px] hover:bg-slate-500 hover:shadow-2xl hover:shadow-slate-600  hover:rounded-[10px] 
                    
                  lg:hover:bg-slate-400 lg:hover:shadow-2xl lg:hover:shadow-slate-400 lg:size-20  lg:rounded-[20px] lg:p-6    ">
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>

          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
            stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            className="lucide lucide-twitter-icon lucide-twitter 
                    size-[30px] hover:bg-slate-500 hover:shadow-2xl hover:shadow-slate-600  hover:rounded-[10px]                    
                    
                    
                    lg:hover:bg-slate-400 lg:hover:shadow-2xl lg:hover:shadow-slate-400 lg:size-20  lg:rounded-[20px] lg:p-6 
                                        
                    ">
            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3
                5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>


          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
            stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-instagram-icon lucide-instagram
                  
                    size-[30px] hover:bg-slate-500 hover:shadow-2xl hover:shadow-slate-600  hover:rounded-[10px]  

                     lg:hover:bg-slate-400 lg:hover:shadow-2xl lg:hover:shadow-slate-400 lg:size-20  lg:rounded-[20px] lg:p-6 ">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>


        </div>
        <h1 className=' flex justify-end ml-2 text-lg font-semibold mt-2 mr-3 '>THIN<span className=' font-extrabold'>G</span>To Shop..</h1>

      </footer >




    </>
  )
}



export default Footer