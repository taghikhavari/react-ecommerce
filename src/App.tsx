import React, { lazy, Suspense } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const HomePage = lazy(() => import("./pages/homepage/homepage.component"));

function App() {
	return (
		<Suspense fallback="<div>Loading...</div>">
			<Router>
				<Switch>
					<Route exact path="/" component={HomePage} />
				</Switch>
			</Router>
		</Suspense>
	);
}

export default App;
