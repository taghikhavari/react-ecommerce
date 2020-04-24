import React, { lazy, Suspense, useEffect, useState } from "react";
import "./App.css";
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
} from "react-router-dom";
import Header from "./components/header/header.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { IUser } from "./models/user";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.actions";
import { rootState } from "./models/redux";

const HomePage = lazy(() => import("./pages/homepage/homepage.component"));
const ShopPage = lazy(() => import("./pages/shop/shop.component"));
const SignInPage = lazy(() =>
	import("./pages/signIn-signUp/signIn-signUp.component")
);

interface IProps {
	setCurrentUser: typeof setCurrentUser;
	currentUser: IUser | null;
}

function App({ currentUser, setCurrentUser }: IProps) {
	useEffect(() => {
		try {
			const unsubscribe = auth.onAuthStateChanged(async (userAuth) => {
				if (userAuth) {
					const userRef = await createUserProfileDocument(userAuth);
					userRef?.onSnapshot((snapShot) => {
						setCurrentUser({
							id: snapShot.id,
							...(snapShot.data() as IUser),
						});
					});
				} else {
					setCurrentUser(userAuth);
				}
			});
			return unsubscribe;
		} catch (e) {
			console.log(e);
		}
	}, []);

	return (
		<Suspense fallback="<div>Loading...</div>">
			<Router>
				<Header />
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route exact path="/shop" component={ShopPage} />
					<Route
						exact
						path="/authentication"
						render={() => (currentUser?.email ? <Redirect to="/" /> : <SignInPage />)}
					/>
				</Switch>
			</Router>
		</Suspense>
	);
}

const mapState = (state: rootState) => ({
	currentUser: state.user,
});

const mapDispatch = {
	setCurrentUser,
};

export default connect(mapState, mapDispatch)(App);
