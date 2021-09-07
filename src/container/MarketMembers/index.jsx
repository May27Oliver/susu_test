import React from "react";
import classNames from "classnames/bind";
import styles from "./index.module.css";
import MemberInfoCard from "../../component/MemberInfoCard";

const cx = classNames.bind(styles);
const MarketMembers = (props) => {
  return (
    <div className={cx("market-members-wrap")}>
      <MemberInfoCard />
      <MemberInfoCard />
      <MemberInfoCard />
      <MemberInfoCard />
      <MemberInfoCard />
    </div>
  );
};

export default MarketMembers;
