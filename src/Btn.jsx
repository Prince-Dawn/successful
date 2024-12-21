


export default function Buttons1() {
  return (
    <>
        <div className="w-[200px] h-[50px] rounded-full border bg-slate-600 relative text-center flex justify-center items-center text-white ">
            <div className="w-[40px] h-[40px] rounded-full absolute top-1 left-1 bg-white text-black text-2xl font-bold">&rarr;</div>
            Play Videos
        </div>
        {/* rgb(221 235 236) */}
        {/* rgb(128 151 157) */}
        {/* rgb(132 156 160) button color */}
    </>
  )
}


export function Buttons2() {
  return (
    <>
        <div className="w-[150px] h-[30px] rounded-full border border-[rgb(35,50,53)] relative text-center flex justify-center items-center text-[rgb(35,50,53)] text-xl font-normal">
            {/* <div className="w-[40px] h-[40px] rounded-full absolute top-1 left-1 bg-white text-black text-2xl font-bold">&rarr;</div> */}
            View more
        </div>
    </>
  )
}

export function Buttons3() {
  return (
    <>
    <div className=" flex justify-center items-center my-[30px]">
      <input type="search" name="" id="" placeholder="Your Email..." className="w-[500px] h-[50px] text-xl translate-x-[65px] rounded-[25px] pl-[15px] font-normal placeholder:text-stone-700 text-stone-700 pr-[110px]"/>
      <button type="submit" className="w-[100px] text-xl -translate-x-[40px] h-[40px] rounded-[25px] bg-[rgb(35,50,53)] font-normal">
        Subscribe
      </button>
    </div>
    </>
  )
}
