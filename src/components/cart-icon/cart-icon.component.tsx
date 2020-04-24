import React, { SyntheticEvent } from "react";
import "./cart-icno.styles.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { rootState, cartItemType } from "../../models/redux";

interface IProps {
	toggleCartHidden: () => void;
	itemsCount: number;
}

const CartIcon = (props: IProps) => (
	<div className="cart-icon" onClick={props.toggleCartHidden}>
		<ShoppingIcon className="shopping-icon" />
		<span className="item-count">{props.itemsCount}</span>
	</div>
);

const cartItemsCount = (items: cartItemType[]) => {
	return items?.reduce((pValue, cValue) => pValue + cValue.quantity, 0);
};

const mapDispatch = {
	toggleCartHidden,
};

const mapState = (state: rootState) => ({
	itemsCount: cartItemsCount(state.cart.cartItems),
});

export default connect(mapState, mapDispatch)(CartIcon);
