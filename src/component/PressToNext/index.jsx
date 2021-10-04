import React from "react";
import classNames from "classnames/bind";
import styles from "./index.module.css";

const cx = classNames.bind(styles);

const PressToNext = ({ name, pressToNextPage }) => {
  return (
    <div className={cx("bottom-buttom")}>
      <div
        className={cx("button", "button-to-next-chapter")}
        onClick={() => (pressToNextPage ? pressToNextPage() : "")}
      >
        {name ? name : "確認送出"}
      </div>
    </div>
  );
};

export default PressToNext;
