import React from "react";
import classNames from "classnames/bind";
import styles from "./index.module.css";
import MarketMembers from "../MarketMembers";
import MarketSurvey from "../MarketSurvey";
import { useHistory } from "react-router";

const cx = classNames.bind(styles);
const MarketSurveyArea = (props) => {
  const history = useHistory();
  const survey_list = [
    { title: "產業概況", content: "說明目前產業環境概況、產值、發展趨勢" },
    {
      title: "目標市場",
      content: "界定產品的目標市場，包括目標客戶、銷售區域、銷售範圍",
    },
    {
      title: "市場需求",
      content:
        "說明過去、現在、以及未來的市場需求與市場成長潛力以及市場價格發展趨勢",
    },
    {
      title: "價值主張",
      content: "你希望提供什麼價值，提出一套能夠實現願景與經營目標的策略方針",
    },
    {
      title: "市場規模與市占率",
      content: "請出算整體市場規模大小與公司預期市占率",
    },
  ];
  return (
    <div className={cx("survey-wrap")}>
      <div className={cx("content-words")}>
        <h2>市場</h2>
        <span>
          首先我們要知道市場大小，才能估算做這公司是否有價值。我們是否能提供適合的產品或服務，來贏得這個市場？
          <br />
          也就是說，若我們的產品最後沒有人買都是白搭，因此現在最重要的就是了解市場在哪裡，以及估算市場大小。
          <br />
          挑戰完兩區塊的你們，都分別完成了對團隊的期許了！觸碰點選各自的藍方塊來查團隊們各自的回答狀況吧～
        </span>
      </div>
      <MarketMembers />
      <div className={cx("market-survey-intro")}>
        <div className={cx("market-survey-intro-title")}>市場項目填寫</div>
        <div className={cx("market-survey-intro-words")}>
          以下SUSU為你們整理了市場會有的主要不同項目類型，快來腦力激盪填寫吧！
        </div>
      </div>
      {survey_list.map((survey) => (
        <MarketSurvey title={survey.title} content={survey.content} />
      ))}
      <div className={cx("button-panel")}>
        <div
          className={cx("button-submit")}
          onClick={() => history.push("/market-2")}
        >
          確認提交
        </div>
      </div>
    </div>
  );
};

export default MarketSurveyArea;
