import React, { useState, ChangeEvent } from "react";
import "./sign-in.styles.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { signInWithGoogle } from "../../firebase/firebase.utils";

interface IState {
	email: string;
	password: string;
}

const initialState = {
	email: "",
	password: "",
};

const SignIn = () => {
	const [state, setState] = useState<IState>(initialState);

	const handleSubmit = (e: React.SyntheticEvent) => {
		e.preventDefault();

		setState(initialState);
	};

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setState((oldState) => ({
			...oldState,
			[name]: value,
		}));
	};

	const handleGoogleAuth = () => {
		try {
			signInWithGoogle();
		} catch (e) {
			console.error(e);
		}
	};

	return (
		<div className="sign-in">
			<h2>I Already have an account</h2>
			<span>Sign in with your email and password</span>
			<form onSubmit={handleSubmit}>
				<FormInput
					type="email"
					isRequired
					handleChange={handleChange}
					label="Email"
					name="email"
					value={state?.email}
				/>
				<FormInput
					type="password"
					isRequired
					handleChange={handleChange}
					label="Password"
					name="password"
					value={state?.password}
				/>
				<div className="buttons">
					<CustomButton type="submit">Sign In</CustomButton>

					<CustomButton type="button" onClick={handleGoogleAuth} isGoogleSignIn>
						SignIn With Google
					</CustomButton>
				</div>
			</form>
		</div>
	);
};

export default SignIn;
