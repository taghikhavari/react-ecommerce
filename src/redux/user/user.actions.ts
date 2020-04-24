import { IUser } from "../../models/user";

export const setCurrentUser = (user: IUser | null) => ({
  type: 'SET_CURRENT_USER',
  payload: user
})