// import React from 'react'
import BackgroundImage from '../images/house3.jpeg'
import { Buttons2 } from './Btn'
import home from '../images/home2.jpeg'
import house from '../images/house2.jpeg'


export default function Direct() {
    const style = {
        backgroundImage:`url(${BackgroundImage})`
    }
    const mother = {
        backgroundImage:`url(${home})`
    }
    const father = {
        backgroundImage:`url(${house})`
        // background-Size:`cover`
    }
    
    

  return (
    <>
        <div className="h-[150vh] relative flex flex-wrap justify-center items-end mt-[400px] bg-[rgb(221,235,236)] rounded-[40px]">
            <div className="absolute -top-[250px] w-4/5 h-[500px] border border-[bg-[rgb(221,235,236)]] bg-white rounded-3xl flex overflow-hidden">
                <div className="w-[70%] text-2xl pl-10 flex flex-wrap pt-[40px]">
                    Direct Inquiry <br />
                    <span className="w-full text-4xl font-bold ">
                        Your Dream home Awaits! <br />
                        Chat With Our Experts For Free Guidiance Today.
                    </span>

                    <span className="w-[75%]">
                        Here at NextState, we stand as your unwavering partner on your journey to home ownership. Trust us to deliver not just properties, but a personalized experience crafted just for you. our team of seasoned consultants committed to providing the utmost best.
                    </span>
                    <div className="">
                        <div className="w-[300px] h-[70px] rounded-full border bg-slate-600 relative text-center flex justify-end pr-8 items-center text-white text-xl ">
                            <div className="w-[60px] h-[60px] rounded-full absolute top-1 left-1 bg-white text-black text-2xl font-bold">
                            &rarr;
                            </div>
                            Contact Us Today
                        </div>
                    </div>
                </div>
                <div className="w-[30%]">
                    <img src="/images/man.jpg" alt="" className="h-full" />
                </div>
            </div>


            <div className="pt-300px w-[90%] ">
                <div className="w-full relative">
                    <section className="text-6xl my-10">
                        <span className="font-bold">NextState</span> Where Dreams Find A Global Address. <br />
                        Explore Properties Crafted For <span className="font-bold">Everyone, Everywhere.</span>
                    </section>
                    <section className="w-[1100px] text-2xl">
                        At NextState Homes, we believe in the uniqueness of your vision for the ideal property. Our dedicated team of real estate experts takes the time to understand your preferences, budget, and desired location, We are committed to presenting you with tailored options that align perfectly with your aspirations. Gain access to exclusive feelings and hidden gems that may not be available elsewhere. Explore our vast selection today and let us bring your dream home to life.
                    </section>
                    <div className="absolute bottom-[0px] right-[0px]">
                        <div className="w-[300px] h-[70px] rounded-full border bg-[rgb(35,50,53)] relative text-center flex justify-end pr-8 items-center text-white text-xl ">
                            <div className="w-[60px] h-[60px] rounded-full absolute top-1 left-1 bg-white text-black text-2xl font-bold">
                            &rarr;
                            </div>
                            Contact Us Today
                        </div>
                    </div>
                </div>

                <div className="w-full my-[100px] flex justify-evenly items-center" >
                    <div className="w-1/4 h-[600px] border border-blue-700 bg-cover rounded-3xl" style={style}>

                    </div>

                    <div className="w-1/4 h-[600px] text-2xl">
                        <section className="h-[90%] border border-blue-700 rounded-3xl overflow-hidden bg-cover " style={father} >
                            
                        </section>
                        <section className="pl-3 flex items-center h-[10%] justify-evenly text-[rgb(35,50,53)]">
                            Blissful Gardens
                            <Buttons2/>
                        </section>
                    </div>

                    <div className="w-1/4 h-[600px] text-2xl">
                        <section className="h-[90%] border border-blue-700 rounded-3xl overflow-hidden bg-cover" style={mother}>
                            {/* <img src="../images/house2.jpeg" alt="" className="h-full w-[500px] " /> */}
                        </section>
                        <section className="pl-3 flex items-center h-[10%] justify-evenly text-[rgb(35,50,53)]">
                            Tranquill Heights
                            <Buttons2/>
                        </section>                        
                    </div>

                </div>
            </div>
        </div>
    </>
  )
}
