import { types } from '../types'

export const openCrearModal = () => ({
  type: types.uiOpenModalCrear
})

export const closeCrearModal = () => ({
  type: types.uiCloseModalCrear
})

export const openAddModal = () => ({
  type: types.uiOpenModalAdd
})

export const closeAddModal = () => ({
  type: types.uiCloseModalAdd
})
