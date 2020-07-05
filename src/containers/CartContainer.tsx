import { connect } from 'react-redux'
import { RootState, StoreDispatch } from 'store'
import { cartActions, cartSelectors } from 'store/cart'
import CartContainer from 'components/CartContainer'
import { ProductId } from 'types'

const mapStateToProps = (state: RootState) => ({
  cart: cartSelectors.getItems(state),
  total: cartSelectors.getTotal(state)
})

const mapDispatchToProps = (dispatch: StoreDispatch) => ({
  increase: (id: ProductId) => dispatch(cartActions.increase(id)),
  decrease: (id: ProductId) => dispatch(cartActions.decrease(id)),
  remove: (id: ProductId) => dispatch(cartActions.remove(id)),
  clearCart: () => dispatch(cartActions.clearCart())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
