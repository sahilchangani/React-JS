import React from 'react'
import { Provider } from 'react-redux'
import Moneymanager from './redux/Moneymanager'
import { store } from './app/Store'

export default function App() {
  return (
    <div>
      <Provider store={store}>
        <Moneymanager/>
      </Provider>
    </div>
  )
}
