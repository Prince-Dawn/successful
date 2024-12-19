// import React from 'react'
import './App.css'
import myBackgroundImage from '../images/post2.jpg'



export default function Nav() {
    const style = {  
        backgroundImage: `url(${myBackgroundImage})`,
    };  
    
  return (
    <>
        <div className="w-full h-[100vh]  bg-cover  relative " style={style}>
            <div className="w-full h-[70px] border-white lg:m-0 lg:justify-between lg:px-6 items-center flex  text text-white border-b-2 bg-transparent ">
                <div className="flex text-2xl items-center justify-center gap-3">
                    <img src="vite.svg" alt="" />vite
                </div>
                <div className="">
                    <ul className='flex gap-5'>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                        <li>Services</li>
                        <li><input type="search" name="" id="" className='bg-transparent border border-white rounded-2xl px-3 outline-none placeholder:text-white placeholder:align-middle align-middle' placeholder='search here...'/></li>
                    </ul>
                </div>
            </div>
            <div className="flex justify-center items-center">
                <div className="text-center text-8xl p-24 text-[rgb(23,63,73)] font-[tahoma]">
                    ELEVATE YOUR <br /> LIVING WITH <br /> 
                    <span className='font-black'>EXCEPTIONAL ESTATES </span> 
                </div>
            </div>
            <div className="absolute bottom-[200px] left-[100px]">
                <div className="w-[200px] h-[50px] rounded-full border bg-[rgb(35,50,53)] relative text-center flex justify-center items-center text-white ">
                <div className="w-[40px] h-[40px] rounded-full absolute top-1 left-1 bg-white text-black text-2xl font-bold">   
                    &rarr;
                </div>
                Play Videos
            </div>
            </div>
            
        </div>
    </>
  )
}
