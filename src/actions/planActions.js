export const updateTrainingWeek = (trainingWeek, index) => dispatch => {
    dispatch({
     type: 'UPDATE_TRAINING_WEEK',
     index: index,
     payload: trainingWeek
    })
   }