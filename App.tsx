import React, {Component} from 'react'
import { Provider } from 'react-redux'
import { store } from './redux'
import Home from './home'

export default function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}
