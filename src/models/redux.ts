import { IUser } from "./user";
import { IItem } from "./item";
import { IDirectory } from "./directory";
import SHOP_DATA from "../redux/shop/shop.data";

export type cartItemType = IItem & { quantity: number };

export type rootState = {
	user: IUser | null;
	cart: {
		hidden: boolean;
		cartItems: cartItemType[];
	};
	directory: {
		sections: IDirectory[];
	};
	shop: {
		collections: typeof SHOP_DATA;
	};
};
