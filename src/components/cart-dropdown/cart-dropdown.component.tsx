import React from "react";
import "./cart-dropdown.styles.scss";
import CustomButton from "../custom-button/custom-button.component";
import { connect } from "react-redux";
import { rootState, cartItemType } from "../../models/redux";
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";

interface IProps {
	cartItems: cartItemType[];
}

const CartDropdown = (props: IProps) => (
	<div className="cart-dropdown">
		<div className="cart-items">
			{props?.cartItems?.map((item) => (
				<CartItem key={item.id} {...item} />
			))}
		</div>
		<CustomButton>Go to Checkout</CustomButton>
	</div>
);

const mapState = (state: rootState) => ({
	cartItems: selectCartItems(state),
});

export default connect(mapState)(CartDropdown);
