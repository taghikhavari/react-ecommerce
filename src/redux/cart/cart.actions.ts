import { CartActionTypes } from "./cart.actionTypes";
import { IItem } from "../../models/item";

export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN
})

export const addToCart = (item: IItem) => ({
  type: CartActionTypes.ADD_TO_CART,
  payload: item
})