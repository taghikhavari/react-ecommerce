import React from "react";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import { useRouteMatch, Route } from "react-router-dom";
import CollectionPage from "../collection/collection.component";

const ShopPage = () => {
	const match = useRouteMatch();
	return (
		<div className="shop-page">
			<Route exact path={`${match.path}/:collectionId`} component={CollectionPage} />
			<Route exact path={match.path} component={CollectionsOverview} />
		</div>
	);
}

export default ShopPage;
