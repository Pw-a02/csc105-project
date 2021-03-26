import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages";
import SigninPage from "./pages/signin";
import TypePage from "./pages/type";
import Booking from "./components/Booking";
import Navbar from "./components/Navbar";

function App() {
	return (
		<Router>
			<Navbar />
			<Switch>
				<Route path="/" component={Home} exact />
				<Route path="/account" component={SigninPage} exact />
				<Route path="/type" component={TypePage} exact />
				<Route path="/booking" component={Booking} exact />
			</Switch>
		</Router>
	);
}

export default App;
