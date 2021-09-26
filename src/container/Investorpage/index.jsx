import React from "react";
import classNames from "classnames/bind";
import styles from "./index.module.css";

import Footer from "component/Footer";
import Header from "container/Header";

const cx = classNames.bind(styles);

const InvestorPage = (props) => {
  return (
    <div className={cx("investor-page-wrap")}>
      <Header></Header>
      <div className={cx("investor-page-content")}></div>
      <Footer />
    </div>
  );
};

export default InvestorPage;
