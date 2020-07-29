import getInitialState from '../state/initialState'

export default (state = getInitialState(), action) => {
    switch (action.type) {
     case 'CHANGE_UNITS':
      return {
        ...state,
       settings: {
         units: action.payload
       }
      }
     default:
      return state
    }
}