import React from 'react'
import { Provider } from 'react-redux'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { Box, Button, CssBaseline, Grid, IconButton } from '@mui/material'
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
            // position="absolute"
            justifyContent="flex-end"
            alignItems="flex-end"
            // sx={{ top: 50, right: 90 }}
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
              <IconButton size="large" sx={{ fontSize: 70 }}>
                <AddCircleRoundedIcon fontSize="inherit" />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton size="large" sx={{ fontSize: 70 }}>
                <RemoveCircleRoundedIcon fontSize="inherit" />
              </IconButton>
            </Grid>
          </Grid>
        </Box>
      </Provider>
    </SpeechProvider>
  )
}
