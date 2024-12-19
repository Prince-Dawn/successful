// import React from 'react'
// import image from "../images/home4.jpeg"

export default function About() {
  return (
    <>
      <div className="h-[80vh] w-full flex flex-wrap mt-[40px] ">
        <div className="flex justify-between  h-[30%] w-full">
            <div className="w-1/2 h-1/5 pl-20 text-2xl text-opacity-30 pt-8 flex items-center"><img src="/images/homeicon.png" alt="" className="h-[50px]"/>  About Us</div>
            <div className="w-1/2 text-4xl pt-8 ">
                Trust In Excellence, Believe In Home. <br />
                Your Dream Property <br />
                Awaits With NextState. 
            </div>
        </div>
        <div className="h-[70%] flex justify-between items-end  text-2xl bg-[rgb(221,235,236)] ml-5 rounded-3xl relative">
          <img src="/images/stuffs.png" alt="" className="w-[700px] h-[650px] rounded-3xl" />
          <div className="w-3/5 flex flex-wrap justify-center items-center h-full gap-5">
          <section className="space-y-5">
            <div className="w-full flex gap-5 pr-10 justify-evenly text-3xl">
              <span>
                <span className="text-8xl font-bold">35k+</span> <br /> Customers
              </span>

              <span>
                <span className="text-8xl font-bold">40k+</span> <br /> Units Ready
              </span>

              <span>
                <span className="text-8xl font-bold">10k+</span> <br /> Units Sold
              </span>
            </div>

            <div className="w-full text-wrap ">
              At NextState, we&#39;re your dedicated partner in home ownerships. Trust our seasoned consultants 
              to personalize your journey, providing expert guidiance tailored to your unique aspirations. With valuable insights and a passion for your dreams, we&#39;re here to help you achieve your home ownership goals and turns your dream home into reality.
            </div>
            <div className="absolute bottom-[50px] right-20">
              <div className="w-[300px] h-[70px] rounded-full border bg-[rgb(35,50,53)] relative text-center flex justify-end pr-8 items-center text-white text-xl ">
                <div className="w-[60px] h-[60px] rounded-full absolute top-1 left-1 bg-white text-black text-2xl font-bold">&rarr;</div>
                Start Buying Today
              </div>
            </div>
            
          </section>
            
          </div>
        </div>
      </div>
    </>
  )
}
