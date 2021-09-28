import React from "react";
import classNames from "classnames/bind";
import styles from "./index.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router";

const cx = classNames.bind(styles);
const HeaderBottomMenu = (props) => {
  const history = useHistory();
  return (
    <div className={cx("header-btn-menu-wrap")}>
      <div
        className={cx("startup-speed-btn")}
        onClick={() => history.push("/Homepage")}
      >
        StartupSpeedup
      </div>
      <div className={cx("icon-box")}>
        <div className={cx("icon-wrap")}>
          <FontAwesomeIcon
            icon={faGlobe}
            size="2x"
            className="font-awesome-icon"
          />
        </div>
        <div className={cx("icon-wrap")}>
          <FontAwesomeIcon
            icon={faGlobe}
            size="2x"
            className="font-awesome-icon"
          />
        </div>
      </div>
    </div>
  );
};

export default HeaderBottomMenu;
