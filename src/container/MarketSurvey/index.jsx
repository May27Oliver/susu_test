import React from "react";
import classNames from "classnames/bind";
import styles from "./index.module.css";

const cx = classNames.bind(styles);
const MarketSurvey = ({ title, content }) => {
  return (
    <div className={cx("market-memo-wrap")}>
      <div className={cx("memo-title")}>{title}</div>
      <div className={cx("memo-content")}>{content}</div>
      <textarea className={cx("memo-text")} />
    </div>
  );
};

export default MarketSurvey;
