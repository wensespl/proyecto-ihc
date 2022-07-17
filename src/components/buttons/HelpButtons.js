import React, { useContext, useEffect, useCallback } from 'react'
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded'
import RemoveCircleRoundedIcon from '@mui/icons-material/RemoveCircleRounded'
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice'
import { Grid, IconButton } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { createSpeechlySpeechRecognition } from '@speechly/speech-recognition-polyfill'

import { ColorModeContext } from '../../App'

export const HelpButtons = () => {
  const colorMode = useContext(ColorModeContext)
  const navigate = useNavigate()
  const appId = process.env.REACT_APP_SPEECHLY_ID
  const SpeechlySpeechRecognition = createSpeechlySpeechRecognition(appId)
  const speechRecognition = new SpeechlySpeechRecognition()
  speechRecognition.continuous = true

  const handleResult = useCallback(({ results }) => {
    console.log(results[0][0].transcript)
  }, [])

  useEffect(() => {
    speechRecognition.onresult = handleResult
  }, [speechRecognition, handleResult])

  return (
    <Grid
      container
      direction="column"
      justifyContent="flex-end"
      alignItems="flex-end"
      sx={{ width: 100, position: 'fixed', top: '30%' }}
    >
      <Grid item>
        <IconButton
          onTouchStartCapture={speechRecognition.start}
          onMouseDownCapture={speechRecognition.start}
          onTouchEndCapture={speechRecognition.stop}
          onMouseUpCapture={speechRecognition.stop}
          size="large"
          sx={{ fontSize: 70 }}
        >
          <KeyboardVoiceIcon fontSize="inherit" />
        </IconButton>
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
  )
}
