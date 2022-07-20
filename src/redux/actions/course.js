import Swal from 'sweetalert2'

import { fetchConToken } from '../../helpers/fetch'
import { types } from '../types'

export const startGetCourses = () => {
  return async (dispatch) => {
    try {
      const resp = await fetchConToken('course/user')
      const body = await resp.json()
      let courses = body.courses
      courses.forEach((course) => {
        course.joined = true
      })
      dispatch(loadCourses(courses))
    } catch (error) {
      console.log(error)
    }
  }
}

const loadCourses = (courses) => ({
  type: types.courseLoad,
  payload: courses
})

export const buscarCourses = (filters) => {
  return async (dispatch) => {
    try {
      const resp = await fetchConToken('course/')
      const body = await resp.json()
      let courses = body.courses
      courses.forEach((course) => {
        course.joined = false
      })
      dispatch(guardarBusqueda(courses))
    } catch (error) {
      console.log(error)
    }
  }
}

const guardarBusqueda = (courses) => ({
  type: types.courseGuardar,
  payload: courses
})

export const startUnirse = (courseId) => {
  return async (dispatch) => {
    const resp = await fetchConToken('course/user/', { courseId }, 'PUT')
    const body = await resp.json()
    if (body.ok) {
      dispatch(unirse(body.course))
      Swal.fire('Success', 'Jined the course', 'success')
    } else {
      Swal.fire('Error', body.msg, 'error')
    }
  }
}

const unirse = (course) => ({
  type: types.courseUnirse,
  payload: course
})

export const startCrearCourse = (course) => {
  return async (dispatch, getState) => {
    const { userId, role } = getState().auth
    course.owner = userId
    course.role = role
    const resp = await fetchConToken('course/', course, 'POST')
    const body = await resp.json()
    if (body.ok) {
      dispatch(crearCourse(body.course))
      Swal.fire('Success', 'created course', 'success')
    } else {
      Swal.fire('Error', body.msg, 'error')
    }
  }
}

const crearCourse = (course) => ({
  type: types.courseCreate,
  payload: course
})

export const startAddContent = (newContent) => {
  return async (dispatch, getState) => {
    const { activeCourse } = getState().course
    const { contenido, ...course } = activeCourse
    let newCourse = course
    newCourse.contenido = [...contenido, newContent]
    const resp = await fetchConToken(
      `course/${activeCourse.courseId}`,
      newCourse,
      'PUT'
    )
    const body = await resp.json()
    if (body.ok) {
      dispatch(updateCourse(body.course))
      Swal.fire('Success', 'added content', 'success')
    } else {
      Swal.fire('Error', body.msg, 'error')
    }
  }
}

const updateCourse = (course) => ({
  type: types.courseUpdate,
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
