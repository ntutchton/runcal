import getInitialState from '../state/initialState'

export default (state = getInitialState().plans, action) => {
    switch (action.type) {
     case 'UPDATE_TRAINING_WEEK':
      return state.map((plan, index) => {
            if (index === action.index){
                return {
                    ...plan,
                    trainingWeek: action.payload
                }
            } else return plan
        })
     default:
      return state
    }
}