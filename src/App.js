import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './pages';
import SigninPage from './pages/signin';
import TypePage from './pages/type';
import BookingPage from './pages/booking';
import ComparePage from './pages/compare';


function App() {
  return (
   <Router>
     <Switch>
       <Route path="/" component={Home} exact />
       <Route path="/account" component={SigninPage} exact />
       <Route path="/type" component={TypePage} exact />
       <Route path="/compare" component={ComparePage} exact/>
       <Route path="/booking" component={BookingPage} exact />
     </Switch>
   </Router>
  );
}

export default App;
