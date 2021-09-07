import React from "react";
import classNames from "classnames/bind";
import styles from "./index.module.css";

const cx = classNames.bind(styles);
const MemberInfoCard = (props) => {
  return (
    <div className={cx("member-info-card-wrap")}>
      <div className={cx("member-foto")}></div>
      <div className={cx("member-intro")}>
        CEO name
        <div className={cx("info-btn")}>資源調查表</div>
        <div className={cx("info-btn")}>競爭者分析</div>
      </div>
    </div>
  );
};

export default MemberInfoCard;
