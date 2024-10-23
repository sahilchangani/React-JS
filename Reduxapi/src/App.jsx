import React from 'react'
import { Provider } from 'react-redux'
import Apiredux from './redux/Apiredux'
import { store } from './app/Store'

export default function App() {
  return (
    <div>
      <Provider store={store}>
      <Apiredux/>
      </Provider>
    </div>
  )
}
