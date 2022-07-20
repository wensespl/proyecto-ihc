import { Box, Button, Grid, Modal, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { useForm } from '../../hooks/useForm'
import { startAddContent, startCrearCourse } from '../../redux/actions/course'
import { closeAddModal } from '../../redux/actions/ui'

export const AddModal = () => {
  const { showAdd } = useSelector((state) => state.ui)
  const dispatch = useDispatch()

  const closeAdd = () => {
    dispatch(closeAddModal())
  }

  const [nameValid, setNameValid] = useState(true)
  const [linkValid, setLinkValid] = useState(true)

  const [formValues, handleInputChange] = useForm({
    name: '',
    link: ''
  })

  const { name, link } = formValues

  const validateForm = () => {
    let valid = true

    if (name.trim().length < 2) {
      setNameValid(false)
      valid = valid && false
    } else setNameValid(true)

    if (link.trim().length < 2) {
      setLinkValid(false)
      valid = valid && false
    } else setLinkValid(true)

    return valid
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const isValid = validateForm()

    if (isValid) {
      dispatch(startAddContent(formValues))
      dispatch(closeAddModal())
    } else return
  }

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4
  }

  return (
    <Modal open={showAdd} onClose={closeAdd}>
      <Box sx={style}>
        <form onSubmit={handleSubmit} noValidate autoComplete="off">
          <Grid
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
            container
            spacing={2}
          >
            <Grid item>
              <h3>Add new content</h3>
            </Grid>

            <Grid item>
              <TextField
                required
                id="name"
                label="Name"
                placeholder="Enter name"
                name="name"
                value={name}
                onChange={handleInputChange}
                error={nameValid ? false : true}
              />
            </Grid>

            <Grid item>
              <TextField
                required
                id="link"
                label="link"
                placeholder="Enter link"
                name="link"
                value={link}
                onChange={handleInputChange}
                error={linkValid ? false : true}
              />
            </Grid>

            <Grid item>
              <Button type="submit" variant="contained" size="large">
                Add
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Modal>
  )
}
