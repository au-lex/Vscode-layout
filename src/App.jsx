import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Component/Header'
import Hero from './Component/Hero'
import Footer from './Component/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

<div className='border-slate-600  bg-slate-900 shadow-md  border-t  w-full h-[2rem] fixed bottom-0'>
<div className='flex justify-between pt-2 px-4'>
  <section className='flex space-x-3'>
    <li className='text-[10px] text-slate-400 capitalize font-light list-none'>share code link</li>
    <li className='text-[10px] text-slate-400 capitalize font-light list-none'>explain code </li>
    <li className='text-[10px] text-slate-400 capitalize font-light list-none'>comment code</li>
    <li className='text-[10px] text-slate-400 capitalize font-light list-none'> code chat</li>
    <li className='text-[10px] text-slate-400 capitalize font-light list-none'>search error</li>
    <li className='text-[10px] text-slate-400 capitalize font-light list-none'>share code link</li>
  </section>

  <section className='flex space-x-3'>
    <li className='text-[10px] text-slate-400 capitalize font-light list-none'>ln 27, col 90</li>
    <li className='text-[10px] text-slate-400 capitalize font-light list-none'>spaces;2 </li>
    <li className='text-[10px] text-slate-400 capitalize font-light list-none'> UFT-8</li>
    <li className='text-[10px] text-slate-400 capitalize font-light list-none'> lf</li>
    <li className='text-[10px] text-slate-400 capitalize font-light list-none'>go live</li>
    <li className='text-[10px] text-slate-400 capitalize font-light list-none'>prettier</li>
  </section>
</div>

</div>
<Header />
<Hero />
<Footer />
         <p>



 
    {/* <div className="bg-monokai-dark text-monokai-light p-4 h-screen">
      <a href="https://vitejs.dev" target="_blank">
        <img src={viteLogo} className="logo" alt="Vite logo" />
      </a>
      <a href="https://react.dev" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>

      <h1 className="text-monokai-light mt-4">Vite + React</h1>

      <div className="card bg-monokai-dark p-4 mt-4">
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
          
        >
          count is {count}
        </button>
        <p className="text-monokai-light mt-2">
          Edit <code className="text-blue-400">src/App.jsx</code> and save to test HMR
        </p>
      </div>

      <p className="read-the-docs text-monokai-light mt-4">
        Click on the Vite and React logos to learn more
      </p>
    </div> */}





         </p>
      
    </>
  )
}

export default App
