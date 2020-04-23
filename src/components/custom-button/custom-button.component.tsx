import React from "react";
import "./custom-button.styles.scss";

interface IProps {
	children: React.ReactNode;
	type?: "button" | "submit" | "reset" | undefined;
  onClick?: (e?: any) => void;
  isGoogleSignIn?: boolean;
}

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }: IProps) => (
	<button
		className={`${isGoogleSignIn ? "google-sign-in" : ""} custom-button`}
		{...otherProps}
	>
		{children}
	</button>
);

export default CustomButton;
