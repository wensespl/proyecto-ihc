import React, { useState } from 'react'
import validator from 'validator'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { useForm } from '../../hooks/useForm'
import { startRegister } from '../../redux/actions/auth'
import { Button, Container, Grid, MenuItem, TextField } from '@mui/material'

export const RegisterScreen = () => {
  const dispatch = useDispatch()
  const [nameValid, setNameValid] = useState(true)
  const [emailValid, setEmailValid] = useState(true)
  const [passwordValid, setPasswordValid] = useState(true)
  const [formValues, handleInputChange] = useForm({
    name: '',
    email: '',
    password: '',
    password2: '',
    role: 'ALUMNO_ROLE'
  })

  const { name, email, password, password2, role } = formValues

  const validateForm = () => {
    let valid = true

    if (name.trim().length < 2) {
      setNameValid(false)
      valid = valid && false
    } else setNameValid(true)

    if (!validator.isEmail(email)) {
      setEmailValid(false)
      valid = valid && false
    } else setEmailValid(true)

    if (password !== password2 || password.length < 6) {
      setPasswordValid(false)
      valid = valid && false
    } else setPasswordValid(true)

    return valid
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const isValid = validateForm()
    console.log(formValues)
    if (isValid) {
      dispatch(startRegister(formValues))
    } else return
  }

  return (
    <Container>
      <Grid
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <Grid item>
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
                <h3>Registro</h3>
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
                  id="email"
                  label="Email"
                  placeholder="Enter email"
                  name="email"
                  value={email}
                  onChange={handleInputChange}
                  error={emailValid ? false : true}
                />
              </Grid>

              <Grid item>
                <TextField
                  required
                  id="password"
                  label="Password"
                  placeholder="Enter password"
                  name="password"
                  value={password}
                  onChange={handleInputChange}
                  error={passwordValid ? false : true}
                  helperText="Must be 6 characters long"
                />
              </Grid>

              <Grid item>
                <TextField
                  required
                  type="password"
                  id="password2"
                  label="Confirm password"
                  placeholder="Confirm password"
                  name="password2"
                  value={password2}
                  onChange={handleInputChange}
                  error={passwordValid ? false : true}
                  helperText="Must be 6 characters long"
                />
              </Grid>

              <Grid item>
                <TextField
                  fullWidth
                  select
                  id="role"
                  label="Type of user"
                  name="role"
                  defaultValue={role}
                  onChange={handleInputChange}
                >
                  <MenuItem key="alumno" value="ALUMNO_ROLE">
                    Alumno
                  </MenuItem>
                  <MenuItem key="profesor" value="PROFESOR_ROLE">
                    Profesor
                  </MenuItem>
                </TextField>
              </Grid>

              <Grid item>
                <Button type="submit" variant="contained" size="large">
                  Registrarse
                </Button>
              </Grid>

              <p className="text-end">
                Ya registrado{' '}
                <Link className="a-link" to="/auth/login">
                  login?
                </Link>
              </p>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </Container>
  )
}
