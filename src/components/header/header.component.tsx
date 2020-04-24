import React from "react";
import { Link } from "react-router-dom";
import "./header.styles.scss";
import { ReactComponent as Logo } from "../../assets/4.3 crown.svg.svg";
import { auth } from "../../firebase/firebase.utils";
import { IUser } from "../../models/user";

interface IProps {
	currentUser: IUser | null;
}

const Header = ({ currentUser }: IProps) => {
	console.log(currentUser)
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
			{currentUser ? (
				<div className="option" onClick={(e) => auth.signOut()}>
					Sign Out
				</div>
			) : (
				<Link className="option"  to="/authentication">
					Sign In
				</Link>
			)}
		</div>
	</div>
)}

export default Header;
