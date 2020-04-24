import React, { useState, ChangeEvent, SyntheticEvent } from "react";
import "./sign-up.styles.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

interface IState {
	displayName: string;
	email: string;
	password: string;
	confirmPassword: string;
}

const initialState = {
	displayName: "",
	email: "",
	password: "",
	confirmPassword: "",
};

const SignUp = () => {
	const [state, setState] = useState<IState>(initialState);

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setState((oldState) => ({
			...oldState,
			[name]: value,
		}));
	};

	const handleSubmit = async (e: SyntheticEvent) => {
		e.preventDefault();
		const { password, confirmPassword, displayName, email } = state;
		if (password !== confirmPassword) {
			alert("password don't match");
			return;
		}

		try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);
      await createUserProfileDocument({...user, displayName} as firebase.User);
      setState(initialState);
		} catch (e) {
      console.log(e);
    }
	};

	return (
		<div className="sign-up">
			<h2 className="title">I do not have an account</h2>
			<span>Sign up with your email and password</span>
			<form onSubmit={handleSubmit}>
				<FormInput
					type="displayName"
					name="displayName"
					value={state?.displayName!}
					handleChange={handleChange}
					label="Display Name"
					isRequired
				/>
				<FormInput
					type="email"
					name="email"
					value={state?.email!}
					handleChange={handleChange}
					label="Email"
					isRequired
				/>
				<FormInput
					type="password"
					name="password"
					value={state?.password!}
					handleChange={handleChange}
					label="Password"
					isRequired
				/>
				<FormInput
					type="password"
					name="confirmPassword"
					value={state?.confirmPassword!}
					handleChange={handleChange}
					label="Confirm Password"
					isRequired
				/>
				<CustomButton type="submit">Sign Up</CustomButton>
			</form>
		</div>
	);
};

export default SignUp;
