import LoanDetailsValidator from '../validators/loanDetails';

const loanDetails = (state = {amount:100, purpose:'Education', type: 'Fixed', frequency: 'Weekly'}, action) => {
  console.log('reducer ', state, action)
  switch (action.type) {
    case 'UPDATE_LOAN_DETAILS':
      return Object.assign({}, state, action.loanDetails, validate(action.loanDetails));
    case 'VALIDATE_LOAN_DETAILS': 
      return validateAll(state, action.nextPage);
    default:
      return state
  }

  function validateAll(state, nextPage){
    console.log('validate all loan details', state, nextPage);
    let errors = {};
    if( !state.duration ){
      errors.duration = true;
    }
    if( !Object.keys(errors).length > 0 ){
      nextPage();
    }
    return Object.assign({},state, {errors});
  }

  function validate(loanDetails){
    const key = Object.keys(loanDetails)[0];
    console.log('validate loan details', key);
    let errors = {};
    errors[key] = !LoanDetailsValidator.validate(key, loanDetails[key]);
    return { errors };
  }
}
export default loanDetails

