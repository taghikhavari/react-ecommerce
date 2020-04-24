import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./header.styles.scss";
import { ReactComponent as Logo } from "../../assets/4.3 crown.svg.svg";
import { auth } from "../../firebase/firebase.utils";
import { IUser } from "../../models/user";
import { connect } from "react-redux";
import { rootState } from "../../models/redux";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

interface IProps {
	currentUser: IUser | null;
	hideCart: boolean;
}

const Header = ({ currentUser, hideCart }: IProps) => {
	const handleSignOut = async(e: any) => {
		await auth.signOut();
		console.log(auth);
	};

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
				<CartIcon/>
			</div>
				{
					hideCart ? null : <CartDropdown />
				}
		</div>
	);
};

const mapState = (state: rootState) => ({
	currentUser: state.user,
	hideCart: state.cart.hidden
});

export default connect(mapState)(Header);
