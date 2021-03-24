import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './pages';
import SigninPage from './pages/signin';
import TypePage from './pages/type';


function App() {
  return (
   <Router>
     <Switch>
       <Route path="/" component={Home} exact />
       <Route path="/account" component={SigninPage} exact />
       <Route path="/Type" component={TypePage} exact />
     </Switch>
   </Router>
  );
}

export default App;
