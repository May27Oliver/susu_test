import React from "react";
import classNames from "classnames/bind";
import styles from "./index.module.css";

import Footer from "component/Footer";
import Header from "container/Header";
import PressToNext from "component/PressToNext";

const cx = classNames.bind(styles);

const InvestorPage = (props) => {
  return (
    <div className={cx("investor-page-wrap")}>
      <Header></Header>
      <div className={cx("investor-page-content")}>
        {/* first */}
        <div className={cx("investor-col", "yellow-part")}>
          <div className={cx("investor-content")}>
            這一路走來，團隊提出的idea也愈發完整，然而，在未來實踐這個想法時，所需要的軟體、器材、租金、員工
            —
            他們都不是免費的。雖然有可能不花太多錢就推出新產品，但到時候還會需要資金來成長公司。這時候你就需要外來資金：朋友或家人、天使投資人或專業的創投了噢～
            沒錯！這一章節我們要學習的課題就是創投與投資人！
          </div>
          <PressToNext
            name="next"
            classname={cx("button-white")}
            pressToNextPage={() => {}}
          />
        </div>
        {/* second */}
        <div className={cx("investor-col", "dark-part")}>
          <div className={cx("investor-content")}>
            這一路走來，團隊提出的idea也愈發完整，然而，在未來實踐這個想法時，所需要的軟體、器材、租金、員工
            —
            他們都不是免費的。雖然有可能不花太多錢就推出新產品，但到時候還會需要資金來成長公司。這時候你就需要外來資金：朋友或家人、天使投資人或專業的創投了噢～
            沒錯！這一章節我們要學習的課題就是創投與投資人！
          </div>
          <PressToNext
            name="next"
            classname={cx("button-white")}
            pressToNextPage={() => {}}
          />
        </div>
        {/* third */}
        <div className={cx("investor-col", "yellow-part")}>
          <div className={cx("investor-content", "flex-row")}>
            <p className={cx("investor-third-part-words")}>
              如何挑選領投者？
              <br />
              <br />
              》願意投入該輪的 25~50% 資金
              <br />
              》該領域的專業 <br />
              》廣大投資人人脈 <br />
              》相信公司願景
            </p>
            <div className={cx("thirdpic")}></div>
          </div>
          <PressToNext
            name="next"
            classname={cx("button-white")}
            pressToNextPage={() => {}}
          />
        </div>
        {/* forth */}
        <div className={cx("investor-col", "grey-part")}>
          <div className={cx("investor-content")} style={{ color: "#3F3F3F" }}>
            👀 投資人看中什麼？
            <br />
            • 團隊 ---
            公司的成敗高度取決於團隊。投資人會考量團隊的經驗和專業領域。過去的經驗能呈現團隊的成功軌跡，但這不是必要的
            ー
            許多成功的公司都是由沒有領導或創業經驗的人所創立的。投資人也會考慮團隊成員之間的能力互補性。
            <br />
            <br />
            • 機會 ---
            投資人會考慮市場大小和競爭對手的表現狀況。競爭對手的強度會被高度檢視。有沒有一個強大的獨佔競爭者？沒有競爭對手的原因會是什麼？
            <br />
            <br />
            • 產品服務 ---
            相對於慢慢解決問題的“維他命”，投資人更喜歡能快速解決問題的“速效藥”
            ー 更好、更快、更便宜的解決方案。入門門檻也相當重要。對 Amazon 或
            Google 來說有多簡單做一個類似的產品？有多少機率那會發生？
            <br />
            <br />
            • 行銷管道 --- 你要如何賣你的產品？ • The pitch ---
            凝聚、簡短、有說服力的 pitch 很重要。
          </div>
          <PressToNext
            name="好，我都了解了，前往下一章"
            classname={cx("button-investor-final-white")}
            pressToNextPage={() => {}}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default InvestorPage;
