export const updateTrainingWeek = (trainingWeek, index) => dispatch => {
    dispatch({
        type: 'UPDATE_TRAINING_WEEK',
        index: index,
        payload: trainingWeek
    })
}

export const updateTrainingPlan = (trainingPlan, index) => dispatch => {
    dispatch({
        type: 'UPDATE_TRAINING_PLAN',
        index: index,
        payload: trainingPlan
    })
}