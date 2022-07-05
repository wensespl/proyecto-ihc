import React from 'react'
import { Provider } from 'react-redux'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
import { SpeechProvider } from '@speechly/react-client'
import { PushToTalkButton, BigTranscript, IntroPopup } from '@speechly/react-ui'

import { AppRouter } from './routers/AppRouter'
import { store } from './redux/store/store'

const appId = process.env.REACT_APP_SPEECHLY_ID

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
    <SpeechProvider appId={appId} language="en-US">
      <Provider store={store}>
        <BigTranscript placement="top" />
        <PushToTalkButton placement="bottom" captureKey=" " />
        <IntroPopup />
        <CssBaseline />
        <ColorModeContext.Provider value={colorMode}>
          <ThemeProvider theme={theme}>
            <AppRouter />
          </ThemeProvider>
        </ColorModeContext.Provider>
      </Provider>
    </SpeechProvider>
  )
}
