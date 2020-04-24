import React from "react";
import "./custom-button.styles.scss";

interface IProps {
	children: React.ReactNode;
	type?: "button" | "submit" | "reset" | undefined;
  onClick?: (e?: any) => void;
	isGoogleSignIn?: boolean;
	inverted?: boolean;
}

const CustomButton = ({
	children,
	isGoogleSignIn,
	inverted,
	...otherProps
}: IProps) => (
	<button
		className={`${inverted ? "inverted" : ""} ${
			isGoogleSignIn ? "google-sign-in" : ""
		} custom-button`}
		{...otherProps}
	>
		{children}
	</button>
);

export default CustomButton;
