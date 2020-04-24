import { IUser } from "../../models/user";
import { UserActionTypes } from "./user.actionTypes";

type state = IUser | null
const INITIAL_STATE: state = null;

type actionType = {
  type: string;
  payload: IUser;
}

const userReducer = (state = INITIAL_STATE, action: actionType): state => {
	switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...action.payload,
      }
    default:
      return state;
	}
};

export default userReducer;