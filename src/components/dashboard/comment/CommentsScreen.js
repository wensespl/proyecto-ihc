import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography
} from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { useForm } from '../../../hooks/useForm'
import { startAddComment } from '../../../redux/actions/course'
import { CommentItem } from './CommentItem'

export const CommentsScreen = () => {
  const dispatch = useDispatch()
  const { activeCourse } = useSelector((state) => state.course)

  const [textValid, setTextValid] = useState(true)

  const [formValues, handleInputChange] = useForm({
    text: ''
  })

  const { text } = formValues

  const validateForm = () => {
    let valid = true

    if (text.trim().length < 2) {
      setTextValid(false)
      valid = valid && false
    } else setTextValid(true)

    return valid
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const isValid = validateForm()

    if (isValid) {
      dispatch(startAddComment(formValues))
    } else return
  }

  return (
    <Container sx={{ marginTop: 5 }}>
      <Typography variant="h3">Comments:</Typography>
      <Box sx={{ border: '2px', borderRadius: 5 }} marginBottom={5}>
        {activeCourse.comentarios.map((comment) => (
          <CommentItem key={comment._id} comment={comment} />
        ))}
      </Box>

      <form onSubmit={handleSubmit} noValidate autoComplete="off">
        <Grid container spacing={1}>
          <Grid item md={10}>
            <TextField
              required
              id="text"
              label="comment"
              placeholder="Write something..."
              name="text"
              value={text}
              onChange={handleInputChange}
              error={textValid ? false : true}
              fullWidth
            />
          </Grid>

          <Grid item md={2}>
            <Button type="submit" variant="contained" size="large">
              Send
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  )
}
