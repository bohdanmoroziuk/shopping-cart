import { connect } from 'react-redux'
import { RootState } from 'store'
import { cartSelectors } from 'store/cart'
import Navbar from 'components/Navbar'

const mapStateToProps = (state: RootState) => ({
  amount: cartSelectors.getAmount(state)
})

export default connect(mapStateToProps)(Navbar);
