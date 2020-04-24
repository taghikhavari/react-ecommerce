import React from "react";
import { Link } from "react-router-dom";
import "./header.styles.scss";
import { ReactComponent as Logo } from "../../assets/4.3 crown.svg.svg";
import { auth } from "../../firebase/firebase.utils";
import { IUser } from "../../models/user";
import { connect } from "react-redux";
import { rootState } from "../../models/redux";

interface IProps {
	currentUser: IUser | null;
}

const Header = ({ currentUser }: IProps) => {
	const handleSignOut = async(e: any) => {
		await auth.signOut();
		console.log(auth);
	};
	console.log('current user from Header: ', currentUser);

	return (
		<div className="header">
			<Link to="/">
				<Logo className="logo" />
			</Link>
			<div className="options">
				<Link className="option" to="/shop">
					Shop
				</Link>
				<Link className="option" to="/contact">
					Contact
				</Link>
				{currentUser?.email ? (
					<div className="option" onClick={handleSignOut}>
						Sign Out
					</div>
				) : (
					<Link className="option" to="/authentication">
						Sign In
					</Link>
				)}
			</div>
		</div>
	);
};

const mapState = (state: rootState) => ({
	currentUser: state.user,
});

export default connect(mapState)(Header);
