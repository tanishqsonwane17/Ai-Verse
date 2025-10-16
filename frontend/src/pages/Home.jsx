import React, { useState } from 'react';
import bg from '../../public/images/bg.png';
import Nav from '../components/Nav';
import { GoArrowUpRight } from "react-icons/go";
import Register from './Register';
import Login from './Login';

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState('register'); // 'register' or 'login'

  const toggleModalType = () => {
    setModalType(modalType === 'register' ? 'login' : 'register');
  };

  return (
    <>
      <div 
        className="h-screen w-full bg-cover bg-center relative" 
        style={{ backgroundImage: `url(${bg})` }}
      >
        <Nav />

        <div className="text-white flex flex-col mx-40 mt-20 p-6 rounded-2xl">
          <h1 className="text-8xl mx-28 mb-9 tracking-wide font-light bg-gradient-to-r from-white via-blue-400 to-blue-600 text-transparent bg-clip-text">
            Explore
          </h1>

          <div className='flex items-end'>
            <span className="py-2 h-14 px-4 flex bg-[#000934] rounded-4xl mb-9">
              <img className="h-10 w-10 rounded-full object-cover -mr-3 border-1 border-black" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=880" alt="" />
              <img className="h-10 w-10 rounded-full object-cover -mr-3 border-1 border-black" src="https://images.unsplash.com/photo-1623184663110-89ba5b565eb6?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1112" alt="" />
              <img className="h-10 w-10 rounded-full object-cover -mr-3 border-1 border-black" src="https://images.unsplash.com/photo-1706123288181-cd67c4e200de?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=686" alt="" />
              <img className="h-10 w-10 rounded-full object-cover border-1 border-black" src="https://images.unsplash.com/photo-1590086782957-93c06ef21604?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=687" alt="" />
              <div className="h-10 w-10 rounded-full bg-[#000f523f] flex justify-center items-center text-sm tracking-wide font-light border-1 border-black -ml-2">
                <GoArrowUpRight className="text-xl text-[#002df7]" />
              </div>
            </span>

            <h1 className="text-8xl mb-9 tracking-wide font-light bg-gradient-to-r from-white via-blue-400 to-blue-700 text-transparent bg-clip-text">
              Infinite&nbsp;
            </h1>
          </div>

          <h1 className="text-8xl mb-15 tracking-wide font-light bg-gradient-to-r from-white via-blue-400 to-blue-600 text-transparent bg-clip-text">
            Metaverse
          </h1>

          <div className='h-full w-full'>
            <button 
              onClick={() => { setIsModalOpen(true); setModalType('register'); }}
              className="h-full px-6 py-3 cursor-pointer bg-[#0679c5] text-white font-semibold text-xl rounded-2xl
                         shadow-lg ring-4 ring-blue-300/40 backdrop-blur-md transition-all duration-300 hover:scale-105"
            >
              Get Started
            </button>
          </div>
        </div>

        <div className='h-32 w-[50%] flex justify-around px-40 items-end'>
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

     {isModalOpen && (
  <div
    className="fixed inset-0 flex justify-center items-center bg-black/50 backdrop-blur-sm z-50 transition-opacity duration-300 ease-in-out opacity-100"
    onClick={() => setIsModalOpen(false)}
  >
    <div
      className="bg-[#000934c7] rounded-2xl p-8 w-116  relative transform transition-transform duration-300 ease-in-out scale-100"
      onClick={(e) => e.stopPropagation()}
    >
 

      {modalType === 'register' && <Register />}
      {modalType === 'login' && <Login onClose={() => setIsModalOpen(false)} />}

      <p className="text-sm text-gray-500 mt-4 text-center">
        {modalType === 'register' ? (
          <>
            Already have an account? <span className="text-blue-600 cursor-pointer" onClick={toggleModalType}>Login</span>
          </>
        ) : (
          <>
            Don't have an account? <span className="text-blue-600 cursor-pointer" onClick={toggleModalType}>Register</span>
          </>
        )}
      </p>
    </div>
  </div>
)}

    </>
  );
};

export default Home;
