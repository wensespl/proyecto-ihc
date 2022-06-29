import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import validator from 'validator'

import { startLogin } from '../../redux/actions/auth'
import { useForm } from '../../hooks/useForm'
import { Button, Container, Grid, TextField } from '@mui/material'

export const LoginScreen = () => {
  const dispatch = useDispatch()
  const [emailValid, setEmailValid] = useState(true)
  const [passwordValid, setPasswordValid] = useState(true)
  const [formValues, handleInputChange] = useForm({ email: '', password: '' })

  const { email, password } = formValues

  const validateForm = () => {
    let valid = true

    if (!validator.isEmail(email)) {
      setEmailValid(false)
      valid = valid && false
    } else setEmailValid(true)

    if (password.length < 6) {
      setPasswordValid(false)
      valid = valid && false
    } else setPasswordValid(true)

    return valid
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const isValid = validateForm()

    if (isValid) {
      dispatch(startLogin(email, password))
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
                <h3 className="mb-3">Inicio de Sesion</h3>
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
                  type="password"
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
                <Button variant="contained" type="submit" size="large">
                  Login
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>

        <Grid item>
          <div className="mt-5">
            <hr />

            <p className="text-end mt-3">
              Aun no tienes una cuenta?{' '}
              <Link className="a-link" to="/auth/register">
                Registrarse
              </Link>
            </p>
          </div>
        </Grid>
      </Grid>
    </Container>
  )
}
