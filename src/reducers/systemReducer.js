import getInitialState from '../state/initialState'

export default (state = getInitialState().system, action) => {
    switch (action.type) {
     case 'CHANGE_UNITS':
      return {
        ...state,
       system: {
         ...this,
         units: action.payload
       }
      }
      case 'CHANGE_ACTIVE_PLAN':
      return {
        ...state,
       system: {
         ...this,
         activePlan: action.payload
       }
      }
     default:
      return state
    }
}