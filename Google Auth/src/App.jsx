import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Dashboard from './Dashborad'
import Login from './Login'


export default function App(){
  return (
    <div>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/dashboard' element={<Dashboard/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
    </Routes>
    </BrowserRouter>
    </div>
  )
}