import { connect } from 'react-redux'
import { updateLoanDetails } from '../../actions'
import LoanRepaymentSummary from '../../components/mortgage/LoanRepaymentSummary'

const mapStateToProps = state => {
  console.log('mapStateToProps', state);
  return {
    ...state.loanDetails
  }
}


const mapDispatchToProps = dispatch => {
  return {
    onChange: change => {
      dispatch(updateLoanDetails(change))
    }
  }
}

const LoanRepaymentSummaryContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoanRepaymentSummary)

export default LoanRepaymentSummaryContainer