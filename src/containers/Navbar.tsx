import { connect } from 'react-redux'
import { RootState } from 'store'
import { cartSelectors } from 'store/cart'
import Navbar, { NavbarProps } from 'components/Navbar'

const mapStateToProps = (state: RootState): NavbarProps => ({
  amount: cartSelectors.getAmount(state)
})

export default connect(mapStateToProps)(Navbar);
