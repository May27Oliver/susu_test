import MarketPage from "./container/MarketPage";
import Homepage from "./container/Homepage";
import "./App.css";
import {
  Switch,
  HashRouter as Router,
  Route,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/Homepage" component={Homepage} />
          <Route path="/Marketpage" component={MarketPage} />
          <Redirect from="/" to="/Homepage" exact />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
