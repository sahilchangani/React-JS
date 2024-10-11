import React from 'react'
import { store } from './app/Store'
import Redux from './redux/Redux'
import { Provider } from 'react-redux'

export default function App() {
  return (
    <div>
      <Provider store={store}>
      <Redux/>
      </Provider>
    </div>
  )
}