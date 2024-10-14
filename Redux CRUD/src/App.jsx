import React from 'react'
import { Provider } from 'react-redux'
import { store } from './store/Store'
import Reduxcrud from './redux/Reduxcrud'

export default function App() {
  return (
    <div>
      <Provider store={store}>
       <Reduxcrud/>
      </Provider>
    </div>
  )
}