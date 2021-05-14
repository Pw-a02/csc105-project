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
import ResortPage from "./pages/resort";
import SignupPage from "./pages/signup";
import ProfilePage from "./pages/profil";
import detailPage2 from "./pages/detail2";
import detailPage3 from "./pages/detail3";

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
        <Route path="/detail/:placeId" component={DetailPage} exact />
        <Route path="/kind" component={KindPage} exact />
        <Route path="/hostel" component={HostelPage} exact />
        <Route path="/apartment" component={ApartmentPage} exact />
        <Route path="/resort" component={ResortPage} exact />
        <Route path="/signup" component={SignupPage} exact />
        <Route path="/profile" component={ProfilePage} exact />
        <Route path="/detail2" component={detailPage2} exact />
        <Route path="/detail3" component={detailPage3} exact />
      </Switch>
    </Router>
  );
}

export default App;
