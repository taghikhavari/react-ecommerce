import React from "react";
import "./checkout.styles.scss";
import { rootState, cartItemType } from "../../models/redux";
import { selectCartTotal, selectCartItems } from "../../redux/cart/cart.selectors";
import { connect } from "react-redux";

interface IProps{
  cartItems: cartItemType[],
  totalPrice: number,
}

const Checkout = (props: IProps) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="checkout-block"><span>Product</span></div>
      <div className="checkout-block"><span>Description</span></div>
      <div className="checkout-block"><span>Quantity</span></div>
      <div className="checkout-block"><span>Price</span></div>
      <div className="checkout-block"><span>Remove</span></div>
    </div>
    {
      props?.cartItems?.map(item => item.name)
    }
    <div className="tota"><span>TOTAL: ${props?.totalPrice}</span></div>
  </div>
)

const mapState = (state: rootState) => ({
  cartItems: selectCartItems(state),
  totalPrice: selectCartTotal(state),
})

export default connect(mapState)(Checkout);