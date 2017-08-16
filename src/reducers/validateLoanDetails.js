const loanDetails = (state = {amount:100, purpose:'Education', type: 'Fixed', frequency: 'Weekly'}, action) => {

  console.log('reducer validate loan details', state, action)
  switch (action.type) {
    case 'VALIDATE_LOAN_DETAILS': 
      return validate(state, action.nextPage);
    default:
      return state
  }

  function validate(state, nextPage){
    console.log('validate loan details', state, nextPage);
    nextPage()
    return state;
  }
  
}


export default loanDetails

