import React, { Children } from "react";
import classNames from "classnames/bind";
import styles from "./index.module.css";
import MarketSurveyArea from "../MarketSurveyArea";
import MarketSurveyResultArea from "../MarketSurveyResultArea";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

const cx = classNames.bind(styles);
const MarketContent = (props) => {
  return (
    <div className={cx("market-content-wrap")}>
      <Router>
        <Switch>
          <Route
            exact
            path="/Marketpage/market-1"
            component={MarketSurveyArea}
          />
          <Route
            path="/Marketpage/market-2"
            component={MarketSurveyResultArea}
          />
          <Redirect to="/Marketpage/market-1" />
        </Switch>
      </Router>
    </div>
  );
};

export default MarketContent;
