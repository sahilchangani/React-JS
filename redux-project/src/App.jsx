import React from 'react'
import Task from './redux/Task'
import { Provider } from 'react-redux'
import { store } from './app/Store'

export default function App() {
  return (
    <div>
       <Provider store={store}>
      <Task/>
      </Provider>
    </div>
  )
}
