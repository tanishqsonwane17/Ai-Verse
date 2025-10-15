import React from 'react'
import bg from '../../public/images/bg.png'
import Nav from '../components/Nav'
import { GoArrowUpRight } from "react-icons/go";

const Home = () => {
  return (
    <div 
      className="h-screen w-full bg-cover bg-center relative" 
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Navbar */}
      <Nav />
      {/* Main content */}
      <div className=" text-white flex flex-col  mx-40 mt-20 p-6 rounded-2xl">
        
        {/* Heading */}
         <h1 className="text-8xl mb-9 font-semibold bg-gradient-to-r from-white via-blue-400 to-blue-600 text-transparent bg-clip-text">
           Explore
         </h1>

        {/* Overlapping avatars */}
       <div className='flex items-end'>
         <span className="py-2 h-14 px-4 flex bg-[#000934] rounded-4xl mb-9 ml-10">
          <img 
            className="h-10 w-10 rounded-full object-cover -mr-3 border-1 border-black" 
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=880" 
            alt="" 
          />
          <img 
            className="h-10 w-10 rounded-full object-cover -mr-3 border-1 border-black" 
            src="https://images.unsplash.com/photo-1623184663110-89ba5b565eb6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1112" 
            alt="" 
          />
          <img 
            className="h-10 w-10 rounded-full object-cover -mr-3 border-1 border-black" 
            src="https://images.unsplash.com/photo-1706123288181-cd67c4e200de?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=686" 
            alt="" 
          />
          <img 
            className="h-10 w-10 rounded-full object-cover border-1 border-black" 
            src="https://images.unsplash.com/photo-1590086782957-93c06ef21604?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687" 
            alt="" 
          />

          {/* Last icon circle */}
          <div className="h-10 w-10 rounded-full bg-[#000f523f] flex justify-center items-center text-sm font-semibold border-1 border-black -ml-2">
            <GoArrowUpRight className="text-xl text-[#002df7]" />
          </div>
        </span>
        <h1 className="text-8xl mb-9 font-semibold bg-gradient-to-r from-white via-blue-400 to-blue-700    text-transparent bg-clip-text">
          Infinite&nbsp;
        </h1>
       </div>

        {/* Second Heading */}
        

        {/* Third Heading */}
       <h1 className="text-8xl mb-15 font-semibold bg-gradient-to-r from-white via-blue-400 to-blue-600 text-transparent bg-clip-text">
         AiVerse
       </h1>
       <div className='h-full w-full '>
           <button className="h-full px-6 py-3 cursor-pointer bg-[#0679c5] text-white font-semibold text-xl rounded-2xl
                   shadow-lg ring-4 ring-blue-300/40 backdrop-blur-md transition-all duration-300 hover:scale-105">
             Get Started
           </button>
       </div>
      </div>
      <div className='h-32 w-[50%] flex justify-around items-end'>
        <div>
            <h1 className='text-4xl text-white mb-2'>250M<span className='text-5xl text-[#1a79b8]'>+</span> </h1> 
            <p className='text-lg text-[#3FB3FE]'>user</p>
        </div>
   
        <div>
            <h1 className='text-4xl text-white mb-2'>2<span className='text-5xl text-[#1a79b8]'>y</span> </h1> 
            <p className='text-lg text-[#3FB3FE]'>Experience</p>
        </div>
   
        <div>
            <h1 className='text-4xl text-white mb-2'>98M<span className='text-5xl text-[#1a79b8]'>+</span> </h1> 
            <p className='text-lg text-[#3FB3FE]'>Asset</p>
        </div>
   
      </div>
    </div>
  )
}

export default Home
