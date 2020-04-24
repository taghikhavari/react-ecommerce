import React from "react";
import "./preview-collection.styles.scss";
import CollectionItem from "../collection-item/collection-item.component";

interface item {
  name: string;
  id: number,
  price: number,
  imageUrl: string,
}

interface IProps {
	title: string;
	items: item[];
}

const CollectionPreview = ({ title, items }: IProps) => (
	<div className="collection-preview">
		<h1 className="title">{title.toUpperCase()}</h1>
		<div className="preview">
			{items?.filter((item, index) => index < 4)?.map((item) => (
				<CollectionItem key={item.id} item={item} />
			))}
		</div>
	</div>
);

export default CollectionPreview;