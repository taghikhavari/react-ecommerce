import { CartActionTypes } from "./cart.actionTypes";
import { IItem } from "../../models/item";
import { cartItemType } from "../../models/redux";

type itemType = IItem & { quantity: number };
interface ICartState {
	hidden: boolean;
	cartItems: itemType[];
}

const initialState: ICartState = {
	hidden: true,
	cartItems: [],
};

interface IAction {
	type: string;
	payload: IItem;
}

const AddItemToCart = (
	cartItems: itemType[],
	cartItemToAdd: IAction["payload"]
) => {
	const foundItem = cartItems.find((item) => item.id === cartItemToAdd.id);
	if (foundItem) {
		return cartItems.map((item) =>
			item.id === cartItemToAdd.id
				? { ...item, quantity: item.quantity + 1 }
				: item
		);
	} else {
		return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
	}
};

const removeItemFromCart = (cartItems: cartItemType[], itemToRemove: IItem) =>
	cartItems?.filter((item) => item.id !== itemToRemove.id);

const decreaseQuantity = (cartItems: cartItemType[], itemToDecrease: IItem) => {
	const selectedItem = cartItems.find((item) => item.id === itemToDecrease.id);
	if (selectedItem!.quantity > 1) {
		return cartItems.map((item) =>
			item.id === itemToDecrease.id
				? { ...item, quantity: item.quantity - 1 }
				: item
		);
	} else {
		return cartItems.filter((item) => item.id !== itemToDecrease.id);
	}
};

const cartReducer = (state = initialState, action: IAction) => {
	switch (action.type) {
		case CartActionTypes.TOGGLE_CART_HIDDEN:
			return {
				...state,
				hidden: !state.hidden,
			};
		case CartActionTypes.ADD_TO_CART:
			return {
				...state,
				cartItems: AddItemToCart(state.cartItems, action.payload),
			};
		case CartActionTypes.REMOVE_ITEM_FROM_CART:
			return {
				...state,
				cartItems: removeItemFromCart(state.cartItems, action.payload),
			};
		case CartActionTypes.DECREASE_QUANTITY:
			return {
				...state,
				cartItems: decreaseQuantity(state.cartItems, action.payload),
			};
		default:
			return state;
	}
};

export default cartReducer;
