import React from "react";
import classNames from "classnames/bind";
import styles from "./index.module.css";

import Footer from "component/Footer";
import Header from "container/Header";
import PressToNext from "component/PressToNext";
import { useHistory } from "react-router";
const cx = classNames.bind(styles);

const StockPage = (props) => {
  const history = useHistory();
  const [pageStep, setPageStep] = React.useState(0);
  const [firstCdOp, setFirstCdOP] = React.useState(false);
  const [secondCdOp, setSecondCdOP] = React.useState(false);
  const [thirdCdOp, setThirdCdOP] = React.useState(false);

  return (
    <div className={cx("stock-page-wrap")}>
      <Header></Header>
      <div className={cx("stock-page-content")}>
        <div
          className={cx("stock-intro-col", pageStep === 0 && "margin-bottom")}
        >
          <div className={cx("stock-intro-words-col")}>
            恭喜你們！成功完成了前面七個步驟，想信你們在和團隊成員合作的過程中，可以發現彼此的很多優點、特長，也漸漸的更熟悉彼此。是的，如果團隊合作能夠順暢的進行，那你們的團隊成功的機率將大大的提升～！在恭喜的同時，SuSu接下來要帶給大家的，是在各未建立正式合夥人關係後，最重要的：「股權分配」啦！
            <br />
            <br />
            在這個章節，我們會提供各位股權分配的重要性和相關知識，如果在未來團隊成員考慮成為正式合夥人，或是在未來你會想要加入新創公司、想創業的話，都極其重要喔！那我們廢話不多說，直接開始吧！
            <br />
            <br />
            Q : 如何分配股權給創辦人和早期員工
            <br />
            <br />
            由於各個新創團隊的狀況都不盡相同，因此比起告訴你們該怎麼做，SuSu更傾向於提供你們資料，和特別需要思考的地方。首先，對於想要拿著這個點子繼續做下去的人來說需要思考的問題是什麼呢？跟SUSU一起發現答案吧！
          </div>
          <div className={cx("stock-pic")}></div>
          <PressToNext name="腦力激盪" pressToNextPage={() => setPageStep(1)} />
        </div>
        {pageStep === 1 && (
          <>
            <div className={cx("stock-cards-content-col")}>
              {/* first */}
              <div className={cx("cards-col")}>
                <div className={cx("hint-input-column")}>
                  <div className={cx("hint-input-content")}>
                    <p>你覺得股權分配的目的是什麼？</p>
                  </div>
                  <div className={cx("bottom_line_col")}>
                    <input type="text" className={cx("bottom_line_input")} />
                  </div>
                  <div className={cx("bottom_line_col")}>
                    <input type="text" className={cx("bottom_line_input")} />
                  </div>
                  <div className={cx("bottom_line_col")}>
                    <input type="text" className={cx("bottom_line_input")} />
                  </div>
                  <div className={cx("submit-button-col")}>
                    <div
                      className={cx("submit-btn")}
                      onClick={() => setFirstCdOP(true)}
                    >
                      提交
                    </div>
                  </div>
                  <div className={cx("arrow-right")}></div>
                </div>
                <div className={cx("hint-column")}>
                  <div className={cx("hint-content")}>
                    {!firstCdOp && (
                      <div className={cx("qa-col")}>
                        <div className={cx("qa-pic")}></div>
                        <div className={cx("hint-title")}>SUSU怎麼答</div>
                      </div>
                    )}
                    {firstCdOp && (
                      <>
                        <div className={cx("hint-title")}>SUSU怎麼答</div>
                        <p>
                          股權分配的目的，是希望激勵你的夥伴，是希望你的夥伴能每天早上起床到晚上睡前都在思考公司的大小事，是希望你的夥伴和你一樣能努力工作讓公司成長茁壯即便週末可能也沒有休息時間。
                        </p>
                      </>
                    )}
                    <div className={cx("arrow-down")}></div>
                  </div>
                </div>
              </div>
              {/* second */}
              <div className={cx("cards-col")}>
                <div className={cx("hint-input-column")}>
                  <div className={cx("hint-input-content")}>
                    <p>
                      假如你覺得你團隊中有些人是你長期來說不一定需要的，或是長期來說根本不會待在團隊中的，那你為何還要將他設為共同創辦人（co-founders）呢？
                    </p>
                  </div>
                  <div className={cx("bottom_line_col")}>
                    <input type="text" className={cx("bottom_line_input")} />
                  </div>
                  <div className={cx("bottom_line_col")}>
                    <input type="text" className={cx("bottom_line_input")} />
                  </div>
                  <div className={cx("bottom_line_col")}>
                    <input type="text" className={cx("bottom_line_input")} />
                  </div>
                  <div className={cx("submit-button-col")}>
                    <div
                      className={cx("submit-btn")}
                      onClick={() => setSecondCdOP(true)}
                    >
                      提交
                    </div>
                  </div>
                  <div className={cx("arrow-right")}></div>
                </div>
                <div className={cx("hint-column")}>
                  <div className={cx("hint-content")}>
                    {!secondCdOp && (
                      <div className={cx("qa-col")}>
                        <div className={cx("qa-pic")}></div>
                        <div className={cx("hint-title")}>SUSU怎麼答</div>
                      </div>
                    )}
                    {secondCdOp && (
                      <>
                        <div className={cx("hint-title")}>SUSU怎麼答</div>
                        <p>
                          你要考慮的，就是這些夥伴們在短期和長期的角色，即便他們對於自己未來的規劃都不是很清楚。
                        </p>
                      </>
                    )}
                    <div className={cx("arrow-down")}></div>
                  </div>
                </div>
              </div>
              {/* third */}
              <div className={cx("cards-col")}>
                <div className={cx("hint-input-column")}>
                  <div className={cx("hint-input-content")}>
                    <p className={cx("further-reading")}>延伸閱讀</p>
                  </div>
                  <div className={cx("arrow-right")}></div>
                </div>
                <div className={cx("hint-column")}>
                  <div className={cx("hint-content")}>
                    <p className={cx("hint-words-content")}>
                      》如何分配股權給創辦人和早期員工？- Cooley GO <br />
                      》如何分配股權？ - Michael Seibel <br />
                      》不要均分股權 - TechCrunch <br />
                      》合夥人的股權結構 - 500 Startups <br />
                      》更好的股權結構分配 - Northwestern University
                      <br />
                      》57個問題讓你做競爭者分析。- HUBSPOT
                    </p>
                    <div className={cx("arrow-down")}></div>
                  </div>
                </div>
              </div>
            </div>
            <PressToNext
              name="前往下一章"
              pressToNextPage={() => history.push("./Homepage")}
            />
          </>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default StockPage;
