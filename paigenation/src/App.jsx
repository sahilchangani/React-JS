import React from 'react'
import { Provider } from 'react-redux'
import All from './Components/All'
import Mens from './Components/Mens'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Jewelery from './Components/Jewelery'
import Electronic from './Components/Electronic'
import Women from './Components/Women'
import { store } from './App/Store'


export default function App() {
  
  return (

  <div>
  <BrowserRouter>
  <Provider store={store}>
  <Routes>
  <Route path='/' element={<All/>}></Route>
  <Route path='/Men' element={<Mens/>}></Route>
  <Route path='/Jewelery' element={<Jewelery/>}></Route>
  <Route path='/Electronic' element={<Electronic/>}></Route>
  <Route path='/Women' element={<Women/>}></Route>

  </Routes>
  </Provider>
  </BrowserRouter>

  </div>

  )
}