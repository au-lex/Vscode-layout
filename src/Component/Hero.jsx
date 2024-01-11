import React from 'react'
import { FaFolderClosed } from "react-icons/fa6";
import { IoIosFolderOpen } from "react-icons/io";
import { VscJson } from "react-icons/vsc";
import { MdInfoOutline } from "react-icons/md";
import { FaReact } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { SiCss3 } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { LuFilePlus2 } from "react-icons/lu";
import { FaFolderPlus } from "react-icons/fa6";
import { MdOutlineCreateNewFolder } from "react-icons/md";
import { VscDebugRestart } from "react-icons/vsc";
import { PiCopySimpleLight } from "react-icons/pi";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { FaChevronUp } from "react-icons/fa6";
import { HiDotsHorizontal } from "react-icons/hi";
import { AiTwotoneCode } from "react-icons/ai";
import Footer from './Footer';
const Hero = () => {
  return (
    <>
    <section className='flex space-x-10'>
        

   
    <div className="sidebar shadow-xl  text-slate-300 pl-4  w-[20%] min-h-[100vh]">
 <h1> Explorer  </h1>
 <div className='flex justify-between'>
    <h2 className='text-[12px] flex'>project A <RiArrowDropDownLine className='text-[22px]' /></h2>
    <span className='flex space-x-2 px-2'>
    <LuFilePlus2  className =' text-[15px] mr-1 text-red-100  ' />  
    <MdOutlineCreateNewFolder  className =' text-[15px] mr-1 text-red-100  ' />  
    <VscDebugRestart   className =' text-[15px] mr-1 text-red-100  ' />  
    <PiCopySimpleLight  className =' text-[15px] mr-1 text-red-100  ' />  
    </span>
 </div>
 <ul className='mt-[2rem]'>
    <li className='flex my-2 text-[12px] '> <FaFolderClosed className ='pt-1 text-[15px] mr-1 text-red-500  ' />Src</li>
    <li className='flex  my-2 text-[12px] '> <IoIosFolderOpen className ='pt-1 text-[15px] mr-1 text-green-500  '  />Pages</li>
    <li className='flex  my-2 text-[12px] '> <VscJson className ='pt-1 text-[15px] mr-1 text-yellow-400 '  />Json</li>
    <li className='flex  my-2 text-[12px] '> < FaReact className ='pt-1 text-[15px] text-sky-500 mr-1  '  />Home.jsx</li>
    <li className='flex  my-2 text-[12px] '> < SiTypescript className ='pt-1 text-[15px] mr-1  text-blue-400  '  />About.tsx</li>
    <li className='flex  my-2 text-[12px] '> <  TbBrandJavascript className ='pt-1 text-[15px] mr-1 text-yellow-400  text-yelow-500 '  />Config.js</li>
    <li className='flex  my-2 text-[12px] '> <  FaHtml5  className ='pt-1 text-[15px] mr-1  text-orange-500 ' />Index.html</li>
    <li className='flex  my-2 text-[12px] '> < SiCss3 className ='pt-1 text-[15px] mr-1 text-blue-500 '  />Styles.css</li>
    <li className='flex  my-2 text-[12px] '> < MdInfoOutline  className ='pt-1 text-[15px] mr-1  '  />Readme</li>
 </ul>
    </div>
    <div className="mainbar w-[80%] h-[20vh] ">
        <span className='flex  border-slate-800  border-b-[.2px] text-slate-800'>

        <li className='list-none border-slate-800 bg-slate-950  text-slate-400  border-r p-[.4rem] text-[12px]'> index.css</li>
        <li className='list-none  border-slate-800 text-slate-400 bg-slate-950  border-b p-[.4rem] border-r px-2 text-[12px]'>tailwind.config.js</li>
        <li className='list-none  border-slate-800 text-slate-400 bg-slate-950  border-b p-[.4rem] border-r px-2 text-[12px]'>Header.jsx</li>
        </span>
    <span className='border-b w-full border-slate-800 block mt-4 '></span>
        <div className='mt-4 '>

<textarea name="" id="" cols="100" rows="10" className='w-full bg-transparent outline-none 
border-none text-slate-100 h-[60vh]'></textarea>

{/* <div className='bg-red-500 w-full h-[2rem] fixed  '></div> */}
        </div>      
        <div  className='relative'>
    <div className=' border-slate-500 border-t w-full  h-[15rem] hidden  absolute top-[0rem]'>

        <div className='flex justify-between'>
        <section className='flex space-x-3 pt-4'>
    <li className='text-[10px] text-slate-400 capitalize font-light list-none'>PROBLEMS</li>
    <li className='text-[10px] text-slate-400 capitalize font-light list-none'>OUTPUT</li>
    <li className='text-[10px] text-slate-400 capitalize font-light list-none'>DEBUG CONSOLE</li>
    <li className='text-[10px] text-slate-400 capitalize font-light list-none'> TERMINAL</li>
    <li className='text-[10px] text-slate-400 capitalize font-light list-none'>PORT</li>
    <li className='text-[10px] text-slate-400 capitalize font-light list-none'>SEARCH ERROR</li>
  </section>

  <div className='border-l h-[7rem] border-slate-700 px-3 w-[20%]'>
  <span className='flex space-x-9 '>
    < FaPlus  className =' text-[15px] mr-1 text-red-100  ' />  
    <RiArrowDropDownLine   className =' text-[15px] mr-1 text-red-100  ' />  
    <HiDotsHorizontal  className =' text-[15px] mr-1 text-red-100  ' />  
    < FaChevronUp   className =' text-[15px] mr-1 text-red-100  ' /> 
    < IoCloseSharp   className =' text-[15px] mr-1 text-red-100  ' />  
    </span>
 {/* <li className='flex list-none'>  < AiTwotoneCode   className =' text-[15px] mr-1 text-red-100  ' />  bash</li> */}

  </div>
        </div>
    </div>
</div>                 

</div>
                       

</section>


    </>
  )
}

export default Hero
