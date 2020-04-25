import React from "react";
import "./cart-dropdown.styles.scss";
import CustomButton from "../custom-button/custom-button.component";
import { connect } from "react-redux";
import { rootState, cartItemType } from "../../models/redux";
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { useHistory } from "react-router-dom";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

interface IProps {
	cartItems: cartItemType[];
	toggleCartHidden: () => void;
}

const CartDropdown = (props: IProps) => {
	const history = useHistory();
	const handleCheckoutClick = () => {
		props?.toggleCartHidden();
		history.push("/checkout");
	};

	return (
		<div className="cart-dropdown">
			<div className="cart-items">
				{props?.cartItems?.length ? (
					props?.cartItems?.map((item) => <CartItem key={item.id} {...item} />)
				) : (
					<span className="empty-message">Your Cart is empty</span>
				)}
			</div>
			<CustomButton onClick={handleCheckoutClick}>Go to Checkout</CustomButton>
		</div>
	);
};

const mapState = (state: rootState) => ({
	cartItems: selectCartItems(state),
});

const mapDispatch = {
	toggleCartHidden,
};

export default connect(mapState, mapDispatch)(CartDropdown);
