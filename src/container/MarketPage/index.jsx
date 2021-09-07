import React from "react";
import classNames from "classnames/bind";
import styles from "./index.module.css";
import MarketHeader from "../MarketHeader";
import Footer from "../../component/Footer";
import MarketContent from "../MarketContent";
const cx = classNames.bind(styles);
const MarketPage = (props) => {
  return (
    <div className={cx("market-page-wrap")}>
      <MarketHeader></MarketHeader>
      <MarketContent></MarketContent>
      <Footer />
    </div>
  );
};

export default MarketPage;
