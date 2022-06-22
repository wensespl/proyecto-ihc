import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import validator from 'validator'

// import { startLogin } from '../../actions/auth'
import { useForm } from '../../hooks/useForm'

import './form.css'

export const LoginScreen = () => {
  const dispatch = useDispatch()
  const [correoValid, setCorreoValid] = useState(true)
  const [passwordValid, setPasswordValid] = useState(true)
  const [formValues, handleInputChange] = useForm({ correo: '', password: '' })

  const { correo, password } = formValues

  const validateForm = () => {
    let valid = true

    if (!validator.isEmail(correo)) {
      setCorreoValid(false)
      valid = valid && false
    } else setCorreoValid(true)

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
      // dispatch(startLogin(correo, password))
    } else return
  }

  return (
    <div className="container text-center">
      <div className="row align-items-center justify-content-center mt-5">
        <div className="col-lg-5 shadow rounded form-container">
          <form onSubmit={handleSubmit}>
            <h3 className="mb-3">Inicio de Sesion</h3>

            <div className="form-group text-start mb-2">
              <label className="form-label">Email</label>
              <input
                type="email"
                className={`form-control ${!correoValid && 'is-invalid'}`}
                placeholder="Enter email"
                name="correo"
                value={correo}
                onChange={handleInputChange}
                autoComplete="off"
              />
            </div>

            <div className="form-group text-start mb-4">
              <label className="form-label">Contraseña</label>
              <input
                type="password"
                className={`form-control ${!passwordValid && 'is-invalid'}`}
                placeholder="Enter password"
                name="password"
                value={password}
                onChange={handleInputChange}
              />
            </div>

            <div className="d-grid">
              <button type="submit" className="btn btn-dark">
                Login
              </button>
            </div>
          </form>

          <div className="mt-5">
            <hr />

            <p className="text-end mt-3">
              Aun no tienes una cuenta?{' '}
              <Link className="a-link" to="/auth/register">
                Registrarse
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
