
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './Firebase/Dsahborad'
import Signin from './Firebase/Signin'
import Signup from './Firebase/Signup'



export default function App() {
  return (
    <div>

    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Signup/>}></Route>
      <Route path='/dashboard' element={<Dashboard/>}></Route>
      <Route path='/signin' element={<Signin/>}></Route>
    </Routes>
    </BrowserRouter>
    
    </div>
  )
}