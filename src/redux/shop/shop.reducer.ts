import SHOP_DATA from "./shop.data";

const INITIAL_STATE = {
	collections: SHOP_DATA,
};

interface IAction {
	type: string;
}

const shopReducer = (state = INITIAL_STATE, action: IAction) => {
	switch (action.type) {
		default:
			return state;
	}
};

export default shopReducer;
