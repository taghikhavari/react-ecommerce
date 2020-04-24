import { IUser } from "./user";

export type rootState = {
	user: IUser | null;
	cart: {
		hidden: boolean;
	};
};