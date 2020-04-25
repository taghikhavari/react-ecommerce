import { CartActionTypes } from "./cart.actionTypes";
import { IItem } from "../../models/item";

export const toggleCartHidden = () => ({
	type: CartActionTypes.TOGGLE_CART_HIDDEN,
});

export const addToCart = (item: IItem) => ({
	type: CartActionTypes.ADD_TO_CART,
	payload: item,
});

export const removeItemFromCart = (item: IItem) => ({
	type: CartActionTypes.REMOVE_ITEM_FROM_CART,
	payload: item,
});

export const decreaseQuantity = (item: IItem) => ({
  type: CartActionTypes.DECREASE_QUANTITY,
  payload: item,
})