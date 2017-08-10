const loanDetails = (state = {amount:100, purpose:'Education', type: 'Fixed', frequency: 'Weekly'}, action) => {
  console.log('reducer ', state, action)
  switch (action.type) {
    case 'UPDATE_LOAN_DETAILS':
      return Object.assign({}, state, action.loanDetails);
    default:
      return state
  }
}

export default loanDetails

