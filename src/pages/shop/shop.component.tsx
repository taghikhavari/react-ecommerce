import React, { useState } from "react";
import SHOP_DATA from "./shop.data";
import CollectionPreview from "../../components/preview-collection/preview-collection.component";

const ShopPage = () => {
	const [collections, setCollections] = useState<typeof SHOP_DATA>(SHOP_DATA);

	return (
		<div className="shop-page">
			{collections
				?.filter((item, index) => index < 4)
				?.map(({ id, ...otherCollectionProps }) => (
					<CollectionPreview key={id} {...otherCollectionProps} />
				))}
		</div>
	);
};

export default ShopPage;
