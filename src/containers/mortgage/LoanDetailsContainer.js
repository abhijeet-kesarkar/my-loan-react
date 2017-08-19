import { connect } from 'react-redux'
import { updateLoanDetails } from '../../actions'
import LoanDetails from '../../components/mortgage/LoanDetails'

const mapStateToProps = state => {
  console.log('LoanDetailsContainer mapStateToProps', state);
  return {
    ...state.loanDetails,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onChange: change => {
      dispatch(updateLoanDetails(change))
    }
  }
}

const LoanDetailsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoanDetails)

export default LoanDetailsContainer