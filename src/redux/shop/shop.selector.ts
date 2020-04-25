import { createSelector } from "reselect";
import { rootState } from "../../models/redux";
import SHOP_DATA from "./shop.data";

const selectShop = (state: rootState) => state.shop;

export const selectShopCollections = createSelector(
	[selectShop],
	(shop) => shop.collections
);

export const selectCollectionsForPreview = createSelector(
	[selectShopCollections],
	// @ts-ignore
	collections => Object.keys(collections).map((key: keyof typeof collections) => collections[key])
)

export const selectCollection = (collectionUrlParam: keyof typeof SHOP_DATA) =>
	createSelector(
		[selectShopCollections],
		(collections) => collections[collectionUrlParam]
	);
