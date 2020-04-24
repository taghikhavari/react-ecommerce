import { IUser } from "../../models/user";
import { UserActionTypes } from "./user.actionTypes";

export const setCurrentUser = (user: IUser | null) => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user
})