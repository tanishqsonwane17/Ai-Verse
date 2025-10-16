import React from 'react'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Metaverse from './pages/Metaverse'
import Logout from './pages/Logout'

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/metaverse' element={<Metaverse/>}/>
      <Route path='/logout' element={<Logout/>}/>
    </Routes>
    </>
  )
}

export default App