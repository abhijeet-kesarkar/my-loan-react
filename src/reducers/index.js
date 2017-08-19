import { combineReducers } from 'redux'
import loanDetails from './loanDetails'
import incomeDetails from './incomeDetails'

const myLoansApp = combineReducers({
    loanDetails,
    incomeDetails,
    
})

export default myLoansApp