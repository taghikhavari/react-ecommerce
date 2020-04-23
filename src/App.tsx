import React, { lazy, Suspense } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/header/header.component";

const HomePage = lazy(() => import("./pages/homepage/homepage.component"));
const ShopPage = lazy(() => import("./pages/shop/shop.component"));

function App() {
	return (
		<Suspense fallback="<div>Loading...</div>">
			<Router>
      <Header />
				<Switch>
					<Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
				</Switch>
			</Router>
		</Suspense>
	);
}

export default App;
