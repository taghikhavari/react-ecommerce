import React from "react";
import "./checkout-item.styles.scss";
import { cartItemType } from "../../models/redux";
import {
	removeItemFromCart,
	decreaseQuantity,
  addToCart,
} from "../../redux/cart/cart.actions";
import { connect } from "react-redux";

interface IProps {
	item: cartItemType;
	removeItemFromCart: typeof removeItemFromCart;
	addToCart: typeof addToCart;
	decreaseQuantity: typeof decreaseQuantity;
}

const CheckoutItem = ({
	item,
	removeItemFromCart,
	addToCart,
	decreaseQuantity,
}: IProps) => {
	const handleRemove = () => {
		if (window.confirm("Are you sure you want to delete item?")) {
			removeItemFromCart(item);
		}
	};

	return (
		<div className="checkout-item">
			<div className="image-container">
				<img src={item?.imageUrl} alt="item" />
			</div>
			<span className="name">{item?.name}</span>
			<span className="quantity">
				<div className="arrow" onClick={() => decreaseQuantity(item)}>&#10094;</div>
				<span className="value">{item?.quantity}</span>
				<div className="arrow" onClick={() => addToCart(item)}>&#10095;</div>
			</span>
			<span className="price">{item?.price}</span>
			<div className="remove-button" onClick={handleRemove}>
				&#10005;
			</div>
		</div>
	);
};
const mapDispatch = {
  removeItemFromCart,
  addToCart,
	decreaseQuantity,
};

export default connect(null, mapDispatch)(CheckoutItem);
