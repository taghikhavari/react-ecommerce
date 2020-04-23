import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import "./directory.styles.scss";

const Directory = () => {
	const [sections, setSections] = React.useState([
		{
			title: "hats",
			imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
			id: 1,
			link: "hats",
		},
		{
			title: "jackets",
			imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
      id: 2,
      link: ''
		},
		{
			title: "sneakers",
			imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
      id: 3,
      link: ''
		},
		{
			title: "womens",
			imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
			size: "large",
      id: 4,
      link: ''
		},
		{
			title: "mens",
			imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
			size: "large",
      id: 5,
      link: ''
		},
	]);

	return (
		<div className="directory-menu">
			{sections?.map(({id, ...otherProps}) => (
				<MenuItem
          key={id}
          {...otherProps}
				/>
			))}
		</div>
	);
};

export default Directory;
