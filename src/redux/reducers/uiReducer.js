import { types } from '../types'

const initialState = {
  showCrear: false,
  showAdd: false
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

    case types.uiOpenModalAdd:
      return {
        ...state,
        showAdd: true
      }

    case types.uiCloseModalAdd:
      return {
        ...state,
        showAdd: false
      }

    default:
      return state
  }
}
