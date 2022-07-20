import React, { useContext, useEffect, useCallback } from 'react'
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded'
import RemoveCircleRoundedIcon from '@mui/icons-material/RemoveCircleRounded'
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice'
import { Grid, IconButton } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { createSpeechlySpeechRecognition } from '@speechly/speech-recognition-polyfill'

import { ColorModeContext } from '../../App'
import { startLogout } from '../../redux/actions/auth'
import { openCrearModal } from '../../redux/actions/ui'

export const HelpButtons = () => {
  const colorMode = useContext(ColorModeContext)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const appId = process.env.REACT_APP_SPEECHLY_ID
  const SpeechlySpeechRecognition = createSpeechlySpeechRecognition(appId)
  const speechRecognition = new SpeechlySpeechRecognition()
  speechRecognition.continuous = true
  speechRecognition.interimResults = true

  const handleResult = useCallback(
    ({ results }) => {
      const transcript = results[0][0].transcript.toLowerCase()
      console.log(transcript)
      const commands = [
        {
          text: 'login',
          callback: () => {
            navigate('/auth/login')
          }
        },
        {
          text: 'register',
          callback: () => {
            navigate('/auth/register')
          }
        },
        {
          text: 'home',
          callback: () => {
            navigate('/home')
          }
        },
        {
          text: 'log out',
          callback: () => {
            dispatch(startLogout())
          }
        },
        {
          text: 'create new course',
          callback: () => {
            dispatch(openCrearModal)
          }
        },
        {
          text: 'my courses',
          callback: () => {
            navigate('/')
          }
        },
        {
          text: 'course content',
          callback: () => {
            navigate('/course')
          }
        },
        {
          text: 'course comments',
          callback: () => {
            navigate('/comments')
          }
        },
        {
          text: 'search courses',
          callback: () => {
            navigate('/search')
          }
        }
      ]

      commands.forEach((command) => {
        if (transcript.includes(command.text)) command.callback()
      })
    },
    [navigate, dispatch]
  )

  useEffect(() => {
    speechRecognition.onresult = handleResult
  }, [speechRecognition, handleResult])

  return (
    <Grid
      container
      direction="column"
      justifyContent="flex-start"
      alignItems="flex-start"
      sx={{ width: 80, position: 'fixed', top: '30%' }}
    >
      <Grid item>
        <IconButton
          onTouchStartCapture={speechRecognition.start}
          onMouseDownCapture={speechRecognition.start}
          onTouchEndCapture={speechRecognition.stop}
          onMouseUpCapture={speechRecognition.stop}
          size="large"
          color="inherit"
          sx={{ fontSize: 70 }}
        >
          <KeyboardVoiceIcon fontSize="inherit" />
        </IconButton>
      </Grid>
      <Grid item>
        <IconButton
          onClick={colorMode.addFontSize}
          size="large"
          color="inherit"
          sx={{ fontSize: 70 }}
        >
          <AddCircleRoundedIcon fontSize="inherit" />
        </IconButton>
      </Grid>
      <Grid item>
        <IconButton
          onClick={colorMode.subFontSize}
          size="large"
          color="inherit"
          sx={{ fontSize: 70 }}
        >
          <RemoveCircleRoundedIcon fontSize="inherit" />
        </IconButton>
      </Grid>
    </Grid>
  )
}
