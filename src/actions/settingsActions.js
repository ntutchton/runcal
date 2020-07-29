export const changeUnits = (newUnit) => dispatch => {
    dispatch({
     type: 'CHANGE_UNITS',
     payload: newUnit
    })
   }