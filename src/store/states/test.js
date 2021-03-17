import { ADD_NUMBER, SUB_NUMBER } from '../types/test'

const initialState = {
  value: 0,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_NUMBER: {
      return {
        value: state.value + action.payload,
      }
    }
    case SUB_NUMBER: {
      return {
        value: state.value - action.payload,
      }
    }
    default: {
      return state
    }
  }
}
