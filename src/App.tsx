import React, { lazy, Suspense, useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/header/header.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { IUser } from "./models/user";

const HomePage = lazy(() => import("./pages/homepage/homepage.component"));
const ShopPage = lazy(() => import("./pages/shop/shop.component"));
const SignInPage = lazy(() =>
	import("./pages/signIn-signUp/signIn-signUp.component")
);

function App() {
	const [currentUser, setCurrentUser] = useState<IUser | null>(null);

	useEffect(() => {
		try{
			const unsubscribe = auth.onAuthStateChanged(async userAuth => {
				if(userAuth){
					const userRef = await createUserProfileDocument(userAuth);
					userRef?.onSnapshot(snapShot => {
						setCurrentUser({
							id: snapShot.id,
							...snapShot.data() as IUser
						})
					})
				}else{
					setCurrentUser(userAuth);
				}
			});
			return unsubscribe;
		}catch(e){
			console.log(e);
		}
	}, []);

	return (
		<Suspense fallback="<div>Loading...</div>">
			<Router>
				<Header currentUser={currentUser} />
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route exact path="/shop" component={ShopPage} />
					<Route exact path="/authentication" component={SignInPage} />
				</Switch>
			</Router>
		</Suspense>
	);
}

export default App;
