export const updateLoanDetails = loanDetails => {
  return {
    type: 'UPDATE_LOAN_DETAILS',
    loanDetails
  }
}

export const updateIncomeDetails = incomeDetails => {
  return {
    type: 'UPDATE_INCOME_DETAILS',
    incomeDetails
  }
}

export const validateLoanDetails = (nextPage) => {
  return {
    type: 'VALIDATE_LOAN_DETAILS',
    nextPage
  }
}