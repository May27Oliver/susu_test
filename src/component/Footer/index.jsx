import React from "react";
import classNames from "classnames/bind";
import styles from "./index.module.css";

const cx = classNames.bind(styles);
const Footer = (props) => {
  return (
    <div className={cx("footer-wrap")}>
      <span>contact us | about us</span>
    </div>
  );
};

export default Footer;
