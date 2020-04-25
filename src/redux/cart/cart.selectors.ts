import { createSelector } from "reselect";
import { rootState } from "../../models/redux";

const selectCart = (state: rootState) => state.cart;

export const selectCartItems = createSelector(
	[selectCart],
	(cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
	[selectCartItems],
	(cartItems) =>
		cartItems?.reduce(
			(accumalatedQuantity, cartItem) =>
				accumalatedQuantity + cartItem.quantity,
			0
		)
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
	cartItems?.reduce(
		(acc, currentItem) => acc + currentItem?.price * currentItem.quantity,
		0
	)
);
