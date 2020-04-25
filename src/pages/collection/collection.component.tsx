import React from "react";
import "./collection.styles.scss";
import { rootState } from "../../models/redux";
import {
	selectCollection,
} from "../../redux/shop/shop.selector";
import { connect } from "react-redux";
import { ICollection } from "../../models/collection";
import CollectionItem from "../../components/collection-item/collection-item.component";
import SHOP_DATA from "../../redux/shop/shop.data";

interface IProps {
	collection: ICollection | undefined;
}

const CollectionPage = ({ collection }: IProps) => {
	return (
		<div className="collection-page">
			<h2 className="title">{collection?.title}</h2>
      <div className="items">
        {collection?.items?.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
		</div>
	);
};

interface IOwnProps {
	match: {
		params: {
			collectionId: keyof typeof SHOP_DATA;
		};
	};
}

const mapState = (state: rootState, ownProps: IOwnProps) => {
	return {
		collection: selectCollection(ownProps.match.params.collectionId)(state),
	};
};

export default connect(mapState)(CollectionPage);
