import { ADD_NUMBER, SUB_NUMBER } from '../types/test'

export const addNumber = (amount) => ({
  type: ADD_NUMBER,
  payload: amount,
})

export const substractNumber = (amount) => ({
  type: SUB_NUMBER,
  payload: amount,
})
