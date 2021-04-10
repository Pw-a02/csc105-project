import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages";
import SigninPage from "./pages/signin";
import TypePage from "./pages/type";
import Booking from "./pages/booking";
import Navbar from "./components/Navbar";
import Compare from "./pages/compare";
import DetailPage from "./pages/details";
import KindPage from "./pages/kind";
import HostelPage from "./pages/hostel";
import ApartmentPage from "./pages/apartment";
import ResortContent from "./pages/resort";
import ResortPage from "./pages/resort";

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
        <Route path="/detail" component={DetailPage} exact />
        <Route path="/kind" component={KindPage} exact />
        <Route path="/hostel" component={HostelPage} exact />
        <Route path="/apartment" component={ApartmentPage} exact />
        <Route path="/resort" component={ResortPage} exact />
      </Switch>
    </Router>
  );
}

export default App;
