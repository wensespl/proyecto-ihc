import { types } from '../types'

const initialState = {
  showCrear: false
}

export const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.uiOpenModalCrear:
      return {
        ...state,
        showCrear: true
      }

    case types.uiCloseModalCrear:
      return {
        ...state,
        showCrear: false
      }

    default:
      return state
  }
}
