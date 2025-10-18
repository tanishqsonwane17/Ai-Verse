import axios from 'axios';
import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router';
import '../App.css'
import { FaHome } from "react-icons/fa";
import { CgGames } from "react-icons/cg";
import { GiCrossedSabres } from "react-icons/gi";
import { GiDeadWood } from "react-icons/gi";
import { HiCodeBracket } from "react-icons/hi2";
import { CiImageOn } from "react-icons/ci";
import { MdHealthAndSafety } from "react-icons/md";
import { GiBrain } from "react-icons/gi";
import { BsMusicNoteList } from "react-icons/bs";
import { IoMegaphoneOutline } from "react-icons/io5";
import { SiMinds } from "react-icons/si";
import { GoPencil } from "react-icons/go";
import { BiCustomize } from "react-icons/bi";
const Metaverse = () => {
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:3000/api/auth/metaverse', {
      withCredentials: true
    })
    .then((res) => {
      console.log(" Metaverse Data:", res.data);
    })
    .catch((err) => {
      console.error(" Access denied:", err.response?.data || err);
       navigate('/');
       alert('Access Denied! Please login first.');
    });
  }, []); 

  return (
    <>
    <div className='h-screen w-full bg-[#050928] flex'>
     <div className='sideNav bg-gradient-to-r from-[#050928] via-[#050928] to-[#0a1d3f] flex flex-col pt-10 gap-4'>
      <div className='px-6 w-full flex flex-col gap-4 mb-4'>
         <h1 className="text-center bg-gradient-to-r from-[#a1a1a1] via-white to-[#a1a1a14f] bg-clip-text text-transparent font-mono tracking-wider">
        Solara-AI Dashboard
      </h1>
      <div className='h-[.5px] w-full bg-gradient-to-r from-[#a1a1a14f] via-[#ffff] to-[#a1a1a14f]'></div>

      </div>
<ul className='text-[#ffffffcf] w-full flex flex-col overflow-y-scroll scrollbar-hide pr-0 mr-0'>
  <li className='w-60 cursor-pointer  text-center py-4 px-7 flex hover:bg-[#0a1d3f]  font-semibold gap-4 items-center'><span className='h-8 bg-[#152236] w-8 rounded-xl  flex items-center justify-center'><FaHome className='text-xl text-blue-300 font-semibold'/></span>Dashboard</li>
  <li className='w-60 cursor-pointer   py-4 flex px-7 hover:bg-[#0a1d3f] font-semibold gap-8'><span className='h-9 w-9 rounded-xl  bg-[#152236] flex items-center justify-center'><GiCrossedSabres className='text-xl text-blue-300 font-semibold'/></span>AI Arena</li>
  <li className='w-60 cursor-pointer   py-4 flex px-7 hover:bg-[#0a1d3f] font-semibold gap-6'><span className='h-9 w-9 rounded-xl  bg-[#152236] flex items-center justify-center'><GiDeadWood className='text-xl text-blue-300 font-semibold'/></span>ThinkSync</li>
  <Link to='/auto-coder'>  <li className='w-60  cursor-pointer  py-4 flex px-7 hover:bg-[#0a1d3f] font-semibold gap-4'><span className='h-9 w-9 rounded-xl  bg-[#152236] flex items-center justify-center'><HiCodeBracket className='text-xl text-blue-300 font-semibold'/></span>AutoCoder</li></Link>
  <li className='w-60 cursor-pointer  text-center py-4 px-7 flex hover:bg-[#0a1d3f] font-semibold items-center gap-4'><span className='h-8 bg-[#152236] w-8 rounded-xl  flex items-center justify-center'><CiImageOn className='text-xl text-blue-300 font-semibold'/></span>VisionCraft</li>
  <li className='w-60 cursor-pointer  text-center py-4 px-7 flex hover:bg-[#0a1d3f] font-semibold items-center gap-7 '><span className='h-8 bg-[#152236] w-8 rounded-xl  flex items-center justify-center'><MdHealthAndSafety className='text-xl text-blue-300 font-semibold'/></span>SoulSync</li>
  <li className='w-60 cursor-pointer  text-center py-4 px-7 flex hover:bg-[#0a1d3f] font-semibold items-center gap-4'><span className='h-8 bg-[#152236] w-8 rounded-xl  flex items-center justify-center'><GiBrain className='text-xl text-blue-300 font-semibold'/></span>LogicMate</li>
  <li className='w-60 cursor-pointer  text-center py-4 px-7 flex hover:bg-[#0a1d3f] font-semibold items-center gap-4'><span className='h-8 bg-[#152236] w-8 rounded-xl  flex items-center justify-center'><BsMusicNoteList className='text-xl text-blue-300 font-semibold'/></span>EchoVerse</li>
  <li className='w-60 cursor-pointer  text-center py-4 px-7 flex hover:bg-[#0a1d3f] font-semibold items-center gap-4'><span className='h-8 bg-[#152236] w-8 rounded-xl  flex items-center justify-center'><IoMegaphoneOutline className='text-xl text-blue-300 font-semibold'/></span>ArguMind</li>
  <Link to='/script-mind'><li className='w-60 cursor-pointer  text-center py-4 px-7 flex hover:bg-[#0a1d3f] font-semibold items-center gap-4'><span className='h-8 bg-[#152236] w-8 rounded-xl  flex items-center justify-center'><BiCustomize className='text-xl text-blue-300 font-semibold'/></span>ScriptMind</li></Link>
  <li className='w-60 cursor-pointer  text-center py-4 px-7 flex font-semibold items-center gap-2'><span className='h-9 w-9 bg-[#152236] rounded-xl  flex items-center justify-center'><GoPencil className='text-xl text-blue-300 font-semibold'/></span>StoryWeave</li>
  <li className='w-60 cursor-pointer  text-center py-4 px-7 flex font-semibold items-center gap-4'><span className='h-9 w-9 bg-[#152236] rounded-xl  flex items-center justify-center'><CgGames className='text-xl text-blue-300 font-semibold'/></span> Playground</li>
  <li className='w-60 cursor-pointer  text-center py-4 px-7 flex font-semibold items-center gap-4'><span className='h-9 w-9 bg-[#152236] rounded-xl  flex items-center justify-center'><SiMinds className='text-xl text-blue-300 font-semibold'/></span> Custom AI </li>


</ul>
     </div>
     <div className='main h-full w-[90%] bg-[#050928]'></div>
    </div>
    </>
  );
}

export default Metaverse;
