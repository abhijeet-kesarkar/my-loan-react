const incomeDetails = (state = {}, action) => {
  console.log('reducer ', state, action)
  switch (action.type) {
    case 'UPDATE_INCOME_DETAILS':
      return Object.assign({}, state, action.incomeDetails);
    default:
      return state
  }
}

export default incomeDetails

