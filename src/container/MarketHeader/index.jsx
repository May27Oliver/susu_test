import React from "react";
import classNames from "classnames/bind";
import styles from "./index.module.css";
import HeaderBottomMenu from "../../component/HeaderBottomMenu";
import SwitchTabs from "../../component/SwitchTabs";

const cx = classNames.bind(styles);

const MarketHeader = (props) => {
  return (
    <div className={cx("market-header-wrap")}>
      <HeaderBottomMenu />
      <SwitchTabs />
    </div>
  );
};

export default MarketHeader;
