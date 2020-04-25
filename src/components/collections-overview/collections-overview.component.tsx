import React from 'react';
import './collections-overview.styles.scss';
import CollectionPreview from '../preview-collection/preview-collection.component';
import { ICollection } from '../../models/collection';
import { rootState } from '../../models/redux';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selector';
import { connect } from 'react-redux';

interface IProps {
	collections: ICollection[];
}

const CollectionsOverview = ({ collections }: IProps) => (
	<div className="collections-overview">
		{collections
			?.filter((item, index) => index < 4)
			?.map(({ id, ...otherCollectionProps }) => (
				<CollectionPreview key={id} {...otherCollectionProps} />
			))}
	</div>
);

const mapState = (state: rootState) => ({
	collections: selectCollectionsForPreview(state),
});

export default connect(mapState)(CollectionsOverview);