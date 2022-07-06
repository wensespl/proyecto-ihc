import { Box, Button, Grid, Modal, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useForm } from '../../hooks/useForm'
import { startCrearCourse } from '../../redux/actions/course'
import { closeCrearModal } from '../../redux/actions/ui'

export const CrearModal = () => {
  const { showCrear } = useSelector((state) => state.ui)
  const dispatch = useDispatch()

  const closeCrear = () => {
    dispatch(closeCrearModal())
  }

  const [nameValid, setNameValid] = useState(true)
  const [temaValid, setTemaValid] = useState(true)

  const [formValues, handleInputChange] = useForm({
    name: '',
    tema: ''
  })

  const { name, tema } = formValues

  const validateForm = () => {
    let valid = true

    if (name.trim().length < 2) {
      setNameValid(false)
      valid = valid && false
    } else setNameValid(true)

    if (tema.trim().length < 2) {
      setTemaValid(false)
      valid = valid && false
    } else setNameValid(true)

    return valid
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const isValid = validateForm()

    if (isValid) {
      dispatch(startCrearCourse(formValues))
      dispatch(closeCrearModal())
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
    <Modal open={showCrear} onClose={closeCrear}>
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
              <h3>Crear curso</h3>
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
                id="tema"
                label="Tema"
                placeholder="Enter tema"
                name="tema"
                value={tema}
                onChange={handleInputChange}
                error={temaValid ? false : true}
              />
            </Grid>

            <Grid item>
              <Button type="submit" variant="contained" size="large">
                Crear
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Modal>
  )
}
