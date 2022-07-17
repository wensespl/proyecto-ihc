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
  const [fontSize, setFontSize] = React.useState(14)
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
      },
      addFontSize: () => {
        setFontSize((prevSize) => prevSize + 2)
      },
      subFontSize: () => {
        setFontSize((prevSize) => prevSize - 2)
      }
    }),
    []
  )

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode
        },
        typography: {
          fontSize
        }
      }),
    [mode, fontSize]
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
