import React from 'react'
import { Provider } from 'react-redux'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { Box, CssBaseline, Grid, IconButton } from '@mui/material'
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded'
import RemoveCircleRoundedIcon from '@mui/icons-material/RemoveCircleRounded'
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
    <SpeechProvider appId={appId} language="en-US">
      <Provider store={store}>
        <CssBaseline />
        <ColorModeContext.Provider value={colorMode}>
          <ThemeProvider theme={theme}>
            <BigTranscript placement="top" />
            <IntroPopup />
            <AppRouter />
          </ThemeProvider>
        </ColorModeContext.Provider>
        <Box position="relative">
          <Grid
            container
            direction="column"
            justifyContent="flex-end"
            alignItems="flex-end"
            sx={{ position: 'absolute', top: '40%' }}
          >
            <Grid item>
              <PushToTalkButton
                placement="bottom"
                // hide="false"
                size="70px"
                // placement="end"
                captureKey=" "
              />
            </Grid>
            <Grid item>
              <IconButton
                onClick={colorMode.addFontSize}
                size="large"
                sx={{ fontSize: 70 }}
              >
                <AddCircleRoundedIcon fontSize="inherit" />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton
                onClick={colorMode.subFontSize}
                size="large"
                sx={{ fontSize: 70 }}
              >
                <RemoveCircleRoundedIcon fontSize="inherit" />
              </IconButton>
            </Grid>
          </Grid>
        </Box>
      </Provider>
    </SpeechProvider>
  )
}
