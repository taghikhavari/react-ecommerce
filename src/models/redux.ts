import { IUser } from "./user";
import { IItem } from "./item";

export type cartItemType = IItem & { quantity: number };

export type rootState = {
	user: IUser | null;
	cart: {
		hidden: boolean;
		cartItems: cartItemType[];
	};
};
