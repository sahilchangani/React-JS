import React from 'react'
import Signup from './Firebase/Signup'
import Signin from './Firebase/Signin'
import Dashborad from './Firebase/Dashborad'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
    <Route path='/' Component={Signup}></Route>
    <Route path='/signin' Component={Signin} ></Route>
    <Route path='/dashborad' Component={Dashborad} ></Route>
      
      </Routes>
      </BrowserRouter>
    </div>
  )
}
