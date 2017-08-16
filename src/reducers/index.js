import { combineReducers } from 'redux'
import loanDetails from './loanDetails'
import validateLoanDetails from './validateLoanDetails'
import incomeDetails from './incomeDetails'

const myLoansApp = combineReducers({
    loanDetails,
    validateLoanDetails,
    incomeDetails,
    
})

export default myLoansApp