import React from "react";
import "./collection-item.styles.scss";
import CustomButton from "../custom-button/custom-button.component";
import { IItem } from "../../models/item";
import { connect } from "react-redux";
import { addToCart } from "../../redux/cart/cart.actions";
import store from "../../redux/store";

interface IProps {
	addToCart: typeof addToCart;
	item: IItem;
}

const CollectionItem = ({ addToCart, item }: IProps) => {
	const { name, price, imageUrl } = item;
	return (
		<div className="collection-item">
			<div
				className="image"
				style={{
					backgroundImage: `url(${imageUrl})`,
				}}
			/>
			<div className="collection-footer">
				<span className="name">{name}</span>
				<span className="price">{price}</span>
			</div>
			<CustomButton onClick={addToCart} inverted>
				Add To Cart
			</CustomButton>
		</div>
	);
};

const mapDispatch = (
	dispatch: typeof store.dispatch,
	ownProps: { item: IItem }
) => ({
	addToCart: () => dispatch(addToCart(ownProps.item)),
});

export default connect(null, mapDispatch)(CollectionItem);
