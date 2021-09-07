import React from "react";
import classNames from "classnames/bind";
import styles from "./index.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);
const Tabs = ({ title, selected, onSelectTabs }) => {
  return (
    <div
      className={cx("tabs-wrap", selected ? "selected" : "")}
      onClick={onSelectTabs.bind(undefined)}
    >
      <div className={cx("icon-wrap")}>
        <FontAwesomeIcon
          icon={faGlobe}
          size="lg"
          className="font-awesome-icon"
        />
      </div>
      <div className={cx("tabs-title")}>{title}</div>
    </div>
  );
};

export default Tabs;
