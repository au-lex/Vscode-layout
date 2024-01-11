import React from 'react'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { FaRegWindowMaximize } from "react-icons/fa6";
import { FaWindowMaximize } from "react-icons/fa";
import { RiWindow2Line } from "react-icons/ri";
import { TiMinus } from "react-icons/ti";
import { FaTimes } from "react-icons/fa";
import { LuLayoutDashboard } from "react-icons/lu";
import { PiCopySimple } from "react-icons/pi";

const Header = () => {
  return (
    <>
<div className='bg-slate-900 shadow-md  py-[.8rem]  px-4 flex justify-between pace-x-48'> 

<nav className='flex pt-2 '>
    <li className='text-slate-200 font-normal text-[12px] capitalize list-none mr-4'>file</li>
    <li className='text-slate-200 font-normal text-[12px] capitalize list-none mr-4'>edit</li>
    <li className='text-slate-200 font-normal text-[12px] capitalize list-none mr-4'>selection</li>
    <li className='text-slate-200 font-normal text-[12px] capitalize list-none mr-4'>view</li>
    <li className='text-slate-200 font-normal text-[12px] capitalize list-none mr-4'>go</li>
    <li className='text-slate-200 font-normal text-[12px] capitalize list-none mr-4'>run</li>
    {/* <li className='text-slate-200 font-normal text-[12px] capitalize list-none mr-2'>...</li> */}
</nav>
<div className="search ml-[6rem]  pt-1 flex w-full">
    <div className='flex pt-1 space-x-3 text-slate-200'>
    <FaArrowLeft />
    <FaArrowRight />
    </div>
    <input type="text" className='bg-transparent w-[80%]  border rounded shadow-sm ml-2 border-slate-600' />
</div>
<div className="menuIcon text-slate-200 h-[1rem] flex pt-2">
<span className='flex space-x-4 '>

{/* w-[80%] */}
<FaRegWindowMaximize />
<FaWindowMaximize />
<RiWindow2Line />
<LuLayoutDashboard />
</span>
<span className='flex space-x-8 mx-[2rem]'>
<TiMinus />
<PiCopySimple />
<FaTimes />
</span>
</div>
</div>

    </>
  )
}

export default Header