import { types } from '../types'

const initialState = {
  courses: [],
  activeCourse: null,
  busqueda: []
}

export const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.courseCreate:
      return {
        ...state,
        courses: [...state.courses, action.payload]
      }

    case types.courseLoad:
      return {
        ...state,
        courses: [...action.payload]
      }

    case types.courseClear:
      return {
        courses: [],
        activeCourse: null,
        busqueda: []
      }

    case types.courseSetActive:
      return {
        ...state,
        activeCourse: action.payload
      }

    case types.courseClearActive:
      return {
        ...state,
        activeCourse: null
      }

    case types.courseDelete:
      return {
        ...state,
        courses: state.course.filter(
          (course) => course.courseId !== action.payload
        ),
        activeCourse: null
      }

    case types.courseGuardar:
      return {
        ...state,
        busqueda: [...action.payload]
      }

    case types.courseUnirse:
      return {
        ...state,
        courses: [...state.courses, action.payload],
        busqueda: state.busqueda.filter(
          (course) => course.courseId !== action.payload.courseId
        )
      }

    default:
      return state
  }
}
