import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages";
import SigninPage from "./pages/signin";
import TypePage from "./pages/type";
import Booking from "./pages/booking";
import Navbar from "./components/Navbar";
import Compare from "./pages/compare";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/account" component={SigninPage} exact />
        <Route path="/type" component={TypePage} exact />
        <Route path="/booking" component={Booking} exact />
        <Route path="/compare" component={Compare} exact />
      </Switch>
    </Router>
  );
}

export default App;
