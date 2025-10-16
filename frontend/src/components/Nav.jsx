import React from 'react'

const Nav = () => {
  return (
    <>
    <div className='Nav h-20 w-full  px-20 flex items-center'>
        <h1 className='text-white font-semibold text-5xl font-mono'>Vireon.</h1>
        <div className='h-full w-full flex justify-end items-center '>
           <ul className='text-lg text-white flex gap-5'>
            <li className='py-1 px-8 bg-[#000f5279] cursor-pointer hover:bg-[#000F52] rounded-3xl'>Platform</li>
            <li className='py-1 px-8 bg-[#000f5279] cursor-pointer hover:bg-[#000F52] rounded-3xl'>About Us</li>
            <li className='py-1 px-8 bg-[#000F5279] cursor-pointer hover:bg-[#000F52] rounded-3xl'>Services</li>
            <li className='py-1 px-8 bg-[#000F5279] cursor-pointer hover:bg-[#000F52] rounded-3xl'>Metaverse</li>
            <li className='py-1 px-8 bg-[#000F5279] cursor-pointer hover:bg-[#000F52] rounded-3xl'>Contact</li>
           </ul>
        </div>
    </div>
    </>
  )
}

export default Nav