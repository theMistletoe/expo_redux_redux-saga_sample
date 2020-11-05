import React, {Component} from 'react'
import { Provider } from 'react-redux'
import configureStore from './src/store'
import Home from './src/Todo/Home'
import rootSaga from './src/Todo/sagas'

const store = configureStore()
store.runSaga(rootSaga)

export default function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}
