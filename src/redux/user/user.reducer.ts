import { IUser } from "../../models/user";

type state = IUser | {}
const INITIAL_STATE: state = {};

type actionType = {
  type: string;
  payload: IUser;
}

const userReducer = (state = INITIAL_STATE, action: actionType): state => {
	switch (action.type) {
    case 'SET_CURRENT_USER':
      return {
        ...state,
        ...action.payload,
      }
    default:
      return state;
	}
};

export default userReducer;