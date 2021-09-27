import React from "react";
import classNames from "classnames/bind";
import styles from "./index.module.css";
import {
  Switch,
  HashRouter as Router,
  Route,
  Redirect,
} from "react-router-dom";

import Footer from "component/Footer";
import Header from "container/Header";
import { useHistory } from "react-router";

const cx = classNames.bind(styles);

const SourcePage = (props) => {
  return (
    <div className={cx("source-page-wrap")}>
      <Header></Header>
      <div className={cx("source-page-content")}>
        <Router>
          <Switch>
            <Route
              exact
              path="/Sourcepage/SourcepageIntro"
              component={SourcepageIntro}
            />
            <Route
              path="/Sourcepage/SourcepageForm"
              component={SourcepageForm}
            />
          </Switch>
        </Router>
      </div>
      <Footer />
    </div>
  );
};

const SourcepageIntro = () => {
  const history = useHistory();

  return (
    <>
      <div className={cx("source-intro")}>
        <h2 className={cx("source-title")}>資源調查表</h2>
        <div className={cx("source-intro-words")}>
          一個欠缺必要能力、專精領域或共同願景的團隊通常不容易成功。一個創業團隊最重要的是團隊成員之間能力互補、共同願景和強大的執行能力。所以來調查確認你們需要具備什麼專業知識來進入這塊市場呢！知道自己缺乏的是創業很重要的一環ㄛ～請完成以下兩個小遊戲！
        </div>
      </div>
      <div className={cx("source-two-circle-col")}>
        <div className={cx("source-circle", "soft-power")}>
          <div className={cx("source-circle-title")}>創業軟實力</div>
          <div className={cx("source-circle-content")}>
            創業首先必須要了解自己的性格特質。了解自己是什麼樣的人之後再來評估自己身上有什麼樣的特質符合成功的創業家，這些符合的特質就是我們的創業軟實力喔。
          </div>
          <div className={cx("source-click-to-start")}>點擊開始</div>
        </div>
        <div className={cx("source-circle", "hard-power")}>
          <div className={cx("source-circle-title")}>創業硬實力</div>
          <div className={cx("source-circle-content")}>
            創業的過程中，技術常常是一間新創公司能否繼續走下去的關鍵點，我們在點子發想時就應該要。了解有人麼技術是我們在創業時必須要用到的。在這邊要讓大家了解團隊擁有和缺乏的，才能百戰百勝ㄛ！
          </div>
          <div className={cx("source-click-to-start")}>點擊開始</div>
        </div>
      </div>
      <div className={cx("bottom-buttom")}>
        <div
          className={cx("button", "button-to-next-chapter")}
          onClick={() => history.push("./SourcepageForm")}
        >
          前往下一章
        </div>
      </div>
    </>
  );
};
const SourcepageForm = () => {
  return (
    <div className={cx("source-form-wrap")}>
      <div className={cx("form-intro")}>
        <p>
          了解玩創業軟實力之後，我們將要來了解自己的硬實力囉！創業的過程中，技術常常是一間新創公司能否繼續走下去的關鍵點，我們在點子發想時就應該要了解有人麼技術是我們在創業時必須要用到的，現在請各位動動手指，配合我們完成以下的工具箱小遊戲，透過將不通領域工具箱的工具放入自己的能力欄位裡面，來搜集你認為你們的創業團隊需要用到的技術喔～
        </p>
        <br />
        <p>
          以下空格欄位右邊為硬實力工具箱，左邊為我的能力工具欄，點擊右邊工具箱的工具即可出現在左邊的我的欄位，記得還要填下相關的係項技術唷！注意要全部都填完再按下確認送出鍵噢！
        </p>
      </div>
      <div className={cx("source-form-col")}>
        <div className={cx("col", "col-left")}></div>
        <div className={cx("seperate-line")}></div>
        <div className={cx("col", "col-right")}></div>
      </div>
      <div className={cx("bottom-buttom")}>
        <div className={cx("button", "button-to-next-chapter")}>確認送出</div>
      </div>
    </div>
  );
};

export default SourcePage;
