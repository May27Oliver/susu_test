import React from "react";
import classNames from "classnames/bind";
import styles from "./index.module.css";

const cx = classNames.bind(styles);

const PressToNext = ({
  name,
  pressToNextPage,
  classname,
  containerStyle,
  btnStyle,
}) => {
  return (
    <div className={cx("bottom-buttom")} style={containerStyle}>
      <div
        className={cx("button", "button-to-next-chapter", classname)}
        style={btnStyle}
        onClick={() => (pressToNextPage ? pressToNextPage() : "")}
      >
        {name ? name : "確認送出"}
      </div>
    </div>
  );
};

export default PressToNext;
