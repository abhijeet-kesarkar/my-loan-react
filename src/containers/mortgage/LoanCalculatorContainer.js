import { connect } from 'react-redux'
import { validateLoanDetails } from '../../actions'
import LoanCalculator from '../../components/mortgage/LoanCalculator'


const mapDispatchToProps = dispatch => {
  return {
    onNext: (nextPage) => {
      dispatch(validateLoanDetails(nextPage))
    }
  }
}

const LoanCalculatorContainer = connect(
  null,
  mapDispatchToProps
)(LoanCalculator)

export default LoanCalculatorContainer