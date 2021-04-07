import logo from "./logo.svg";
import "./App.css";
import Cricket from "./cricket/cricket";
import Football from "./football/football";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const home = () => {
 return (
  <div className="home">
   <Link className="link" to="/cricket">
    Cricket scores
   </Link>
   <Link className="link" to="/football">
    Football
   </Link>
  </div>
 );
};

function App() {
 return (
  <div className="App">
   <Router>
    <Switch>
     <Route path="/" exact component={home}></Route>
     <Route path="/cricket" exact component={Cricket}></Route>
     <Route path="/football" exact component={Football}></Route>
    </Switch>
   </Router>
  </div>
 );
}

export default App;
