import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import "./directory.styles.scss";
import { connect } from "react-redux";
import { rootState } from "../../models/redux";
import { IDirectory } from "../../models/directory";
import { selectDirectorySections } from "../../redux/directory/directory.selectors";

interface IProps {
	sections: IDirectory[];
}

const Directory = ({ sections }: IProps) => (
	<div className="directory-menu">
		{sections?.map(({ id, ...otherProps }) => (
			<MenuItem key={id} {...otherProps} />
		))}
	</div>
);

const mapState = (state: rootState) => ({
	sections: selectDirectorySections(state),
});

export default connect(mapState)(Directory);
