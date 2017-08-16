import { connect } from 'react-redux'
import { updateIncomeDetails } from '../../actions'
import IncomeDetails from '../../components/mortgage/IncomeDetails'

const mapStateToProps = state => {
  console.log('IncomeDetailsContainer mapStateToProps', state);
  return {
    ...state.incomeDetails
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onChange: change => {
      dispatch(updateIncomeDetails(change))
    }
  }
}

const IncomeDetailsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(IncomeDetails)

export default IncomeDetailsContainer