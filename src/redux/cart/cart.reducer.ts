import { CartActionTypes } from "./cart.actionTypes";

interface ICartState {
  hidden: boolean;
}

const initialState: ICartState = {
  hidden: true
}

interface IAction{
  type: string;
}

const cartReducer = (state = initialState, action: IAction) => {
  switch(action.type){
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      } 
    default:
      return state;
  }
}

export default cartReducer;