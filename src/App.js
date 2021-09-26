import MarketPage from "./container/MarketPage";
import Homepage from "./container/Homepage";
import Sourcepage from "./container/Sourcepage";
import LeanCanvaspage from "./container/LeanCanvasPage";
import Marketingpage from "./container/Marketingpage";
import StockPage from "./container/Stockpage";
import InvestorPage from "./container/Investorpage";
import FundraisingPage from "./container/FundRaisingpage";

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
          <Route path="/Sourcepage" component={Sourcepage} />
          <Route path="/Marketpage" component={MarketPage} />
          <Route path="/LeanCanvaspage" component={LeanCanvaspage} />
          <Route path="/Marketingpage" component={Marketingpage} />
          <Route path="/Stockpage" component={StockPage} />
          <Route path="/Investorpage" component={InvestorPage} />
          <Route path="/Fundraisingpage" component={FundraisingPage} />
          <Redirect from="/" to="/Homepage" exact />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
