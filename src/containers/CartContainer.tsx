import { connect } from 'react-redux'
import { RootState } from 'store'
import { cartSelectors } from 'store/cart'
import CartContainer, { CartContainerProps } from 'components/CartContainer'

const mapStateToProps = (state: RootState): CartContainerProps => ({
  cart: cartSelectors.getItems(state),
  total: cartSelectors.getTotal(state)
})

export default connect(mapStateToProps)(CartContainer);
