import React, { useState } from 'react'
// import es from 'date-fns/locale/es'
import validator from 'validator'
import moment from 'moment'
import { Link } from 'react-router-dom'
// import { useDispatch } from 'react-redux'

import { useForm } from '../../hooks/useForm'
// import { startRegister } from '../../actions/auth'

// import './form.css'

import 'moment/locale/es'

moment.locale('es')
// registerLocale('es', es)

export const RegisterScreen = () => {
  // const dispatch = useDispatch()
  const [nameValid, setNameValid] = useState(true)
  const [correoValid, setCorreoValid] = useState(true)
  const [passwordValid, setPasswordValid] = useState(true)
  const [formValues, handleInputChange] = useForm({
    nombre: '',
    correo: '',
    password: '',
    password2: '',
    rol: 'ALUMNO_ROLE'
  })

  const { nombre, correo, password, password2, rol } = formValues

  const validateForm = () => {
    let valid = true

    if (nombre.trim().length < 2) {
      setNameValid(false)
      valid = valid && false
    } else setNameValid(true)

    if (!validator.isEmail(correo)) {
      setCorreoValid(false)
      valid = valid && false
    } else setCorreoValid(true)

    if (password !== password2 || password.length < 6) {
      setPasswordValid(false)
      valid = valid && false
    } else setPasswordValid(true)

    return valid
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const isValid = validateForm()

    if (isValid) {
      // dispatch(startRegister(formValues))
    } else return
  }

  return (
    <div className="container text-center">
      <div className="row align-items-center justify-content-center mt-5">
        <div className="col-lg-5 shadow rounded form-container">
          <form onSubmit={handleSubmit} noValidate>
            <h3>Registro</h3>

            <div className="form-group text-start mb-2">
              <label className="form-label">Nombre</label>
              <input
                type="text"
                className={`form-control ${!nameValid && 'is-invalid'}`}
                placeholder="Enter name"
                name="nombre"
                value={nombre}
                onChange={handleInputChange}
                autoComplete="off"
              />
            </div>

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

            <div className="form-group text-start mb-2">
              <label className="form-label">Password</label>
              <input
                type="password"
                className={`form-control ${!passwordValid && 'is-invalid'}`}
                placeholder="Enter password"
                name="password"
                value={password}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group text-start mb-2">
              <label className="form-label">Confirm password</label>
              <input
                type="password"
                className={`form-control ${!passwordValid && 'is-invalid'}`}
                placeholder="Confirm password"
                name="password2"
                value={password2}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group text-start mb-4">
              <label className="form-label">Type of user</label>
              <select
                className="form-select"
                name="rol"
                defaultValue={rol}
                onChange={handleInputChange}
              >
                <option value="ALUMNO_ROLE">Alumno</option>
                <option value="PROFESOR_ROLE">Profesor</option>
              </select>
            </div>

            <div className="d-grid mb-3">
              <button type="submit" className="btn btn-dark">
                Registrarse
              </button>
            </div>

            <p className="text-end">
              Ya registrado{' '}
              <Link className="a-link" to="/auth/login">
                login?
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}
