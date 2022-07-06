import Swal from 'sweetalert2'

import { fetchConToken } from '../../helpers/fetch'
import { types } from '../types'

export const startGetCourses = () => {
  return async (dispatch) => {
    try {
      const resp = await fetchConToken('course/user')
      const body = await resp.json()
      dispatch(loadCourses(body.courses))
    } catch (error) {
      console.log(error)
    }
  }
}

const loadCourses = (courses) => ({
  type: types.courseLoad,
  payload: courses
})

// export const buscarcourses = (filters) => {
//   return async (dispatch, getState) => {
//     try {
//       const { userId } = getState().auth
//       const resp = await fetchConToken('courses/')
//       const body = await resp.json()
//       dispatch(guardarBusqueda(body.courses))
//     } catch (error) {
//       console.log(error)
//     }
//   }
// }

// const guardarBusqueda = (courses) => ({
//   type: types.coursesGuardar,
//   payload: courses
// })

// export const startUnirse = () => {
//   return async (dispatch, getState) => {
//     const { activecourse } = getState().course
//     const { courseId } = activecourse
//     const resp = await fetchConToken(`courses/joincourse/${courseId}`, {}, 'PUT')
//     const body = await resp.json()
//     body.joined.joined = false
//     body.joined.inlist = true
//     if (body.ok) {
//       dispatch(solicitarUnirse(body.joined))
//       Swal.fire('Success', 'Solicitud enviada', 'success')
//     } else {
//       Swal.fire('Error', body.msg, 'error')
//     }
//   }
// }

// const solicitarUnirse = (course) => ({
//   type: types.coursesSolicitarUnirse,
//   payload: course
// })

export const startCrearCourse = (course) => {
  return async (dispatch, getState) => {
    const { userId, role } = getState().auth
    course.owner = userId
    course.role = role
    const resp = await fetchConToken('course/', course, 'POST')
    const body = await resp.json()
    if (body.ok) {
      dispatch(crearCourse(body.course))
      Swal.fire('Success', 'course creado', 'success')
    } else {
      Swal.fire('Error', body.msg, 'error')
    }
  }
}

const crearCourse = (course) => ({
  type: types.courseCreate,
  payload: course
})

export const clearCourses = () => ({
  type: types.courseClear
})

export const setActiveCourse = (course) => ({
  type: types.courseSetActive,
  payload: course
})

export const clearActiveCourse = () => ({
  type: types.courseClearActive
})

export const startDeleteCourse = () => {
  return async (dispatch, getState) => {
    const { activecourse } = getState().trip
    const { courseId } = activecourse
    const resp = await fetchConToken(`course/${courseId}`, {}, 'DELETE')
    const body = await resp.json()
    if (body.ok) {
      dispatch(deletecourse(courseId))
      Swal.fire('Success', 'course eliminado', 'success')
    } else {
      Swal.fire('Error', body.msg, 'error')
    }
  }
}

const deletecourse = (courseId) => ({
  type: types.courseDelete,
  payload: courseId
})
