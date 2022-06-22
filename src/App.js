import React from 'react'
import { Provider } from 'react-redux'

import { AppRouter } from './routers/AppRouter'
import { store } from './redux/store/store'

export const App = () => {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  )
}
