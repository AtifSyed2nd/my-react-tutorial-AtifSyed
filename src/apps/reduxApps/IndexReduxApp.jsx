import React from 'react'
import { Provider } from 'react-redux'
import store from './app/store'
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'

const IndexReduxApp = () => {
  return (
    <Provider store={store}> {/* provider should be called in the parent component */}
      <div>Redux App
        <AddTodo />
        <Todos />
      </div>
    </Provider>
  )
}

export default IndexReduxApp