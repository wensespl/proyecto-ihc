import React from 'react'
import { Provider } from 'react-redux'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'

import { AppRouter } from './routers/AppRouter'
import { store } from './redux/store/store'

export const ColorModeContext = React.createContext({
  toggleColorMode: () => {}
})

export const App = () => {
  const [mode, setMode] = React.useState('light')
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
      }
    }),
    []
  )

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode
        }
      }),
    [mode]
  )

  return (
    <Provider store={store}>
      <CssBaseline />
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <AppRouter />
        </ThemeProvider>
      </ColorModeContext.Provider>
    </Provider>
  )
}
