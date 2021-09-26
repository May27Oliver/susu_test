import React from "react";
import classNames from "classnames/bind";
import styles from "./index.module.css";

import Footer from "component/Footer";
import Header from "container/Header";
import MarketContent from "container/MarketContent";

const cx = classNames.bind(styles);

const MarketPage = (props) => {
  return (
    <div className={cx("market-page-wrap")}>
      <Header></Header>
      <MarketContent></MarketContent>
      <Footer />
    </div>
  );
};

export default MarketPage;
