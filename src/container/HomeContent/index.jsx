import React from "react";
import classNames from "classnames/bind";
import styles from "./index.module.css";
import { useHistory } from "react-router";

const cx = classNames.bind(styles);

const HomeContent = ({ title, content }) => {
  const history = useHistory();
  return (
    <div className={cx("home-content-wrap")}>
      <div className={cx("demo-intro-col")}>
        <div className={cx("demo-name")}>
          <div className={cx("demo-name-title")}>創業沙盤milestone</div>
        </div>
        <div className={cx("demo-intro")}>
          如何創業呢？要如何寫企劃書呢？沒有想法沒有點子？歡迎各位有難題的同學們來到我們的創業沙盤，這裡我們將進行多個章節的團隊互動，讓大家分充分地頭腦風暴，創意發想，一同完成創業任務以及創業企劃書內容！每個章節都有對應的教學流程來幫助大家完成企劃書撰寫喔～
        </div>
        <div className={cx("demo-progress-col")}>
          <CircleProgress />
        </div>
      </div>
      <div className={cx("menu-wrap")}>
        <div className={cx("Sourcepage", "menu-item")}>
          <div className={cx("menu-pic")}></div>
          <div className={cx("menu-title")}>資源調查表</div>
        </div>
        <div className={cx("Competitorpage", "menu-item")}>
          <div className={cx("menu-pic")}></div>
          <div className={cx("menu-title")}>競爭者分析</div>
        </div>
        <div
          className={cx("Marketpage", "menu-item")}
          onClick={() => history.push("./Marketpage")}
        >
          <div className={cx("menu-pic")}></div>
          <div className={cx("menu-title")}>市場</div>
        </div>
        <div className={cx("LeanCanvas", "menu-item")}>
          <div className={cx("menu-pic")}></div>
          <div className={cx("menu-title")}>Lean Canvas</div>
        </div>
        <div className={cx("Productpage", "menu-item")}>
          <div className={cx("menu-pic")}></div>
          <div className={cx("menu-title")}>產品</div>
        </div>
        <div className={cx("Marketingpage", "menu-item")}>
          <div className={cx("menu-pic")}></div>
          <div className={cx("menu-title")}>行銷與社群</div>
        </div>
        <div className={cx("Salespage", "menu-item")}>
          <div className={cx("menu-pic")}></div>
          <div className={cx("menu-title")}>銷售</div>
        </div>
        <div className={cx("Stockpage", "menu-item")}>
          <div className={cx("menu-pic")}></div>
          <div className={cx("menu-title")}>股權結構</div>
        </div>
        <div className={cx("Managepage", "menu-item")}>
          <div className={cx("menu-pic")}></div>
          <div className={cx("menu-title")}>管理與所有權</div>
        </div>
      </div>
    </div>
  );
};

const CircleProgress = () => {
  return (
    <div className={cx("circular")}>
      <div className={cx("inner")}></div>
      <div className={cx("outer")}></div>
      <div className={cx("numb")}>
        <div className={cx("numb-title")}>已完成</div>
        <div>90%</div>
      </div>
      <div className={cx("circle")}>
        <div className={cx("zero-dot")}>
          <span></span>
        </div>
        <div className={cx("dot")}>
          <span></span>
        </div>
        <div className={cx("bar", "left")}>
          <div className={cx("left", "progress")}></div>
        </div>
        <div className={cx("bar", "right")}>
          <div className={cx("right", "progress")}></div>
        </div>
      </div>
    </div>
  );
};

export default HomeContent;
