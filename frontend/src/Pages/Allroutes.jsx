import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Signup from './Signup'
import Login from './Login'
import Home from './Home'

const Allroutes = () => {
  return (
    <div>
       <Routes>
          <Route path='/' element = {<Home/>}></Route>
          <Route path='/signup' element = {<Signup/>}></Route>
          <Route path='/login' element = {<Login/>}></Route>
         </Routes>
    </div>
  )
}

export default Allroutes
