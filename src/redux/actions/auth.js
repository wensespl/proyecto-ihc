import Swal from 'sweetalert2'

import { fetchConToken, fetchSinToken } from '../../helpers/fetch'
import { types } from '../types'
import { clearCourses } from './course'

export const startLogin = (email, password) => {
  return async (dispatch) => {
    const resp = await fetchSinToken('auth/login', { email, password }, 'POST')
    const body = await resp.json()

    if (body.ok) {
      localStorage.setItem('token', body.token)
      localStorage.setItem('token-init-date', new Date().getTime())
      dispatch(
        login({
          userId: body.user.userId,
          name: body.user.name,
          role: body.user.role,
          data: body.user
        })
      )
    } else {
      Swal.fire('Error', body.msg, 'error')
    }
  }
}

export const startRegister = (values) => {
  return async (dispatch) => {
    const resp = await fetchSinToken('auth/register', { ...values }, 'POST')
    const body = await resp.json()

    if (body.ok) {
      localStorage.setItem('token', body.token)
      localStorage.setItem('token-init-date', new Date().getTime())
      dispatch(
        login({
          userId: body.user.userId,
          name: body.user.name,
          role: body.user.role,
          data: body.user
        })
      )
    } else {
      Swal.fire('Error', body.msg, 'error')
    }
  }
}

export const startChecking = () => {
  return async (dispatch) => {
    const resp = await fetchConToken('auth/renew')
    const body = await resp.json()

    if (body.ok) {
      localStorage.setItem('token', body.token)
      localStorage.setItem('token-init-date', new Date().getTime())
      dispatch(
        login({
          userId: body.user.userId,
          name: body.user.name,
          role: body.user.role,
          data: body.user
        })
      )
    } else {
      dispatch(checkingFinish())
    }
  }
}

const checkingFinish = () => ({
  type: types.authCheckingFinish
})

const login = (user) => ({
  type: types.authLogin,
  payload: user
})

export const startLogout = () => {
  return (dispatch) => {
    localStorage.clear()
    dispatch(clearCourses())
    dispatch(logout())
  }
}

const logout = () => ({
  type: types.authLogout
})

export const startUpdateUser = (userId, data) => {
  return async (dispatch) => {
    const resp = await fetchConToken(`user/${userId}`, data, 'PUT')
    const body = await resp.json()

    if (body.ok) {
      dispatch(updateUser(body.usuario))
      Swal.fire('Success', 'Usuario actualizado', 'success')
    } else {
      Swal.fire('Error', body.msg, 'error')
    }
  }
}

const updateUser = (user) => ({
  type: types.authUpdate,
  payload: user
})
