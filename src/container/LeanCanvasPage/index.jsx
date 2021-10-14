import React from "react";
import classNames from "classnames/bind";
import styles from "./index.module.css";

import Footer from "component/Footer";
import Header from "container/Header";
import PressToNext from "component/PressToNext";
import { useHistory } from "react-router";

const cx = classNames.bind(styles);

const LeanCanvasPage = (props) => {
  const animateStepInfo = {
    0: {
      itemStyle: "0",
      containerStyle: "1",
      next: 1,
    },
    1: {
      itemStyle: "1",
      containerStyle: "2",
      last: 0,
      next: 2,
    },
    2: {
      itemStyle: "2",
      containerStyle: "3",
      last: 1,
      next: 3,
    },
    3: {
      itemStyle: "3",
      containerStyle: "2",
      last: 2,
      next: 4,
    },
    4: {
      itemStyle: "4",
      containerStyle: "2",
      last: 3,
      next: 5,
    },
    5: {
      itemStyle: "5",
      containerStyle: "3",
      last: 4,
      next: 6,
    },
    6: {
      itemStyle: "6",
      containerStyle: "3",
      last: 5,
      next: 7,
    },
    7: {
      itemStyle: "7",
      containerStyle: "2",
      last: 6,
      next: 8,
    },
    8: {
      itemStyle: "8",
      containerStyle: "2",
      last: 7,
      next: 9,
    },
    9: {
      itemStyle: "9",
      containerStyle: "3",
      last: 8,
      next: 0,
    },
  };
  const CardContents = {
    1: {
      headTitle: "Problem 問題",
      headContent:
        "第一個目標是定位問題並且解決，我們首先要找出使用者所面臨的問題，請大家集思廣益。之後我們所要進行的就是解決這些問題，在設計思維裡面常常提到！",
    },
    2: {
      headTitle: "Customer Segments 顧客區隔",
      headContent:
        "團隊的價值主張將類似於團隊產品的核心競爭力，也是構建團隊文化的重要一環。快來發想您們團隊的獨特主張吧！文案想想",
    },
    3: {
      headTitle: "Value Proposition價值主張",
      headContent:
        "團隊的價值主張將類似於團隊產品的核心競爭力，也是構建團隊文化的重要一環。快來發想您們團隊的獨特主張吧！",
    },
    4: {
      headTitle: "Solution  解決方案",
      headContent: "參照第一步，制定屬於你們的解決方案。",
    },
    5: {
      headTitle: "Channels 通路",
      headContent:
        "找出自我的通路以獲取更大的消費者接觸率，該選擇怎樣的通路呢？",
    },
    6: {
      headTitle: "Revenue Streams 收益來源",
      headContent:
        "團隊的價值主張將類似於團隊產品的核心競爭力，也是構建團隊文化的重要一環。快來發想您們團隊的獨特主張吧！文案想想",
    },
    7: {
      headTitle: "Cost Constructor 成本結構",
      headContent:
        "團隊的價值主張將類似於團隊產品的核心競爭力，也是構建團隊文化的重要一環。快來發想您們團隊的獨特主張吧！文案想想",
    },
    8: {
      headTitle: "Key Metrics  關鍵指標",
      headContent: "數據的年代要靠數據說話，請建立屬於團隊的量化指標！",
    },
    9: {
      headTitle: "Unfair advantages 不公平競爭",
      headContent: "該如何面對市場上不公平競爭？想想您的產品亮點吧！",
    },
  };
  const [animateStep, setAnimateStep] = React.useState(0);
  const history = useHistory();
  return (
    <div className={cx("lean-canvas-page-wrap")}>
      <Header></Header>
      <div className={cx("lean-canvas-page-content")}>
        {/* 3 step of lean startup */}
        <div className={cx("lean-startup-col")}>
          <div className={cx("startup-title")}>3 STEP OF LEAN STARTUP :</div>
          <div className={cx("startup-content")}>
            <div className={cx("step-col")}>
              <div className={cx("step-title")}>Problem-solution fit</div>
              <div className={cx("step-content")}>
                先試問自己：你正在解決的問題真的值得解決嗎？你的用戶真的想要你的產品服務嗎？你真的有技能把它創造出來嗎？這個階段就是要讓你自己有自信的回答上述問題。確定你真的在解決一個有意義的問題，並解有人願意付錢使用你的產品服務。
              </div>
            </div>
            <div className={cx("step-col")}>
              <div className={cx("step-title")}>Viability</div>
              <div className={cx("step-content")}>
                會有人付錢使用你的產品服務嗎？他們付的錢夠支撐你的公司嗎？你要如何定價？對於有些公司，到達這個
                product- market-fit
                的階段會需要好幾年。重點在於你不斷的學習並應用所學。
              </div>
            </div>
            <div className={cx("step-col")}>
              <div className={cx("step-title")}>Growth</div>
              <div className={cx("step-content")}>
                你一旦找到了 product-market-fit，下一步就是把他擴張。
                你要如何觸及更多用戶？這些用戶從哪裡來？專心觀察數據，找出你的成功點，並加倍的投資。優化公司內部運營好讓員工能專心投注在自己的強項上。
              </div>
            </div>
          </div>
        </div>
        {/* animation col */}
        <div className={cx("animation-col")}>
          <div className={cx("animation-col-intro")}>
            在開始一份商業計畫書之前，我們可以先利用 Lean
            Canvas精實畫布將整個事業整理清楚，其中包含九個面向，填寫完此畫布才能進入下一步哦！(按
            <span
              className={cx("play-start-icon")}
              onClick={() => setAnimateStep(animateStepInfo[animateStep].next)}
            >
              {" "}
            </span>
            開始) {animateStep}
          </div>
          <div
            className={cx(
              `animation-container-${animateStepInfo[animateStep].containerStyle}`
            )}
          >
            {/* card 1 */}
            <div
              className={cx(
                "animation-item",
                `a-1-${animateStepInfo[animateStep].itemStyle}`,
                !(animateStep === 0 || animateStep === 1) ? "pos-center" : ""
              )}
            >
              <div className={cx("item-head")}>
                <div
                  className={cx(
                    "head-title-col",
                    !(animateStep === 0 || animateStep === 1)
                      ? "pos-center"
                      : ""
                  )}
                >
                  <div
                    className={cx(
                      "animate-word",
                      animateStep === 0 || animateStep === 1 ? "" : "small-size"
                    )}
                  >
                    1
                  </div>
                  {animateStep === 0 && (
                    <span className={cx("head-title")}>
                      {CardContents[1].headTitle}
                    </span>
                  )}
                  {animateStep === 0 && (
                    <div
                      className={cx("next-step-button", "for-col-1", "step-0")}
                      onClick={() =>
                        setAnimateStep(animateStepInfo[animateStep].next)
                      }
                    ></div>
                  )}
                  {animateStep === 1 && (
                    <>
                      <div className={cx("head-title", "expand-style")}>
                        {CardContents[1].headTitle}
                      </div>
                      <div className={cx("head-content")}>
                        第一個目標是定位問題並且解決，我們首先要找出使用者所面臨的問題，請大家集思廣益。
                        之後我們所要進行的就是解決這些問題，在設計思維裡面常常提到！
                        <br />
                        （請儘量簡短回答）
                      </div>
                      <div
                        className={cx("back-col", "for-col-1")}
                        onClick={() =>
                          setAnimateStep(animateStepInfo[animateStep].last)
                        }
                      >
                        <span className={cx("back-btn")}>back</span>
                      </div>
                    </>
                  )}
                </div>
              </div>
              {animateStep === 0 && (
                <div className={cx("item-body")}>
                  {CardContents[1].headContent}
                </div>
              )}
              {animateStep === 1 && (
                <>
                  <div className={cx("expand-col", "for-col-1")}>
                    <span>Ｑ：使用者所面臨的三大問題是什麼？</span>
                    <div className={cx("bottom_line_col")}>
                      <div className={cx("bottom-no")}>1.</div>
                      <input type="text" className={cx("bottom_line_input")} />
                    </div>
                    <div className={cx("bottom_line_col")}>
                      <div className={cx("bottom-no")}>2.</div>
                      <input type="text" className={cx("bottom_line_input")} />
                    </div>
                    <div className={cx("bottom_line_col")}>
                      <div className={cx("bottom-no")}>3.</div>
                      <input type="text" className={cx("bottom_line_input")} />
                    </div>
                  </div>
                  <div
                    className={cx("next-step-button")}
                    onClick={() =>
                      setAnimateStep(animateStepInfo[animateStep].next)
                    }
                  ></div>
                </>
              )}
            </div>
            {/* card 2 */}
            <div
              className={cx(
                "animation-item",
                `a-2-${animateStepInfo[animateStep].itemStyle}`,
                !(animateStep === 0 || animateStep === 2) ? "pos-center" : ""
              )}
            >
              <div className={cx("item-head")}>
                <div
                  className={cx(
                    "head-title-col",
                    !(animateStep === 0 || animateStep === 2)
                      ? "pos-center"
                      : ""
                  )}
                >
                  <div
                    className={cx(
                      "animate-word",
                      animateStep === 0 || animateStep === 2 ? "" : "small-size"
                    )}
                  >
                    2
                  </div>
                  {animateStep === 0 && (
                    <span className={cx("head-title")}>
                      {CardContents[2].headTitle}
                    </span>
                  )}
                  {animateStep === 2 && (
                    <>
                      <div className={cx("head-title", "expand-style")}>
                        {CardContents[2].headTitle}
                      </div>
                      <div className={cx("head-content")}>
                        團隊的價值主張將類似於團隊產品的核心競爭力，也是構建團隊文化的重要一環。快來發想您們團隊的獨特主張吧！(文案想想)
                        <br />
                        （請儘量簡短回答）
                      </div>
                      <div
                        className={cx("back-col", "for-col-1")}
                        onClick={() =>
                          setAnimateStep(animateStepInfo[animateStep].last)
                        }
                      >
                        <span className={cx("back-btn")}>back</span>
                      </div>
                    </>
                  )}
                </div>
              </div>
              {animateStep === 0 && (
                <div className={cx("item-body")}>
                  {CardContents[2].headContent}
                </div>
              )}
              {animateStep === 2 && (
                <>
                  <div className={cx("expand-col", "for-col-1")}>
                    <span>
                      Ｑ：你的目標客群或是早期使用者是誰？他們的persona如何？
                    </span>
                    <div className={cx("bottom_line_col")}>
                      <div className={cx("bottom-no")}>使用者的行為：</div>
                      <input
                        type="text"
                        className={cx("bottom_line_input")}
                        style={{ lineHeight: "25px" }}
                      />
                    </div>
                    <div className={cx("bottom_line_col")}>
                      <div className={cx("bottom-no")}>地區：</div>
                      <input
                        type="text"
                        className={cx("bottom_no_line_input")}
                      />
                    </div>
                    <div className={cx("bottom_line_col")}>
                      <div className={cx("bottom-no")}>年齡：</div>
                      <input
                        type="text"
                        className={cx("bottom_no_line_input")}
                      />
                    </div>
                    <div className={cx("bottom_line_col")}>
                      <div className={cx("bottom-no")}>性別：</div>
                      <input
                        type="text"
                        className={cx("bottom_no_line_input")}
                      />
                    </div>
                    <div className={cx("bottom_line_col")}>
                      <div className={cx("bottom-no")}>社經地位：</div>
                      <input
                        type="text"
                        className={cx("bottom_no_line_input")}
                      />
                    </div>
                    <div className={cx("bottom_line_col")}>
                      <div className={cx("bottom-no")}>心理特徵：</div>
                      <input
                        type="text"
                        className={cx("bottom_no_line_input")}
                      />
                    </div>
                  </div>
                  <div
                    className={cx("next-step-button")}
                    onClick={() =>
                      setAnimateStep(animateStepInfo[animateStep].next)
                    }
                  ></div>
                </>
              )}
            </div>
            {/* card 3 */}
            <div
              className={cx(
                "animation-item",
                `a-3-${animateStepInfo[animateStep].itemStyle}`,
                !(animateStep === 0 || animateStep === 3) ? "pos-center" : ""
              )}
            >
              <div className={cx("item-head")}>
                <div
                  className={cx(
                    "head-title-col",
                    !(animateStep === 0 || animateStep === 3)
                      ? "pos-center"
                      : ""
                  )}
                >
                  <div
                    className={cx(
                      "animate-word",
                      animateStep === 0 || animateStep === 3 ? "" : "small-size"
                    )}
                  >
                    3
                  </div>
                  {animateStep === 0 && (
                    <span className={cx("head-title")}>
                      {CardContents[3].headTitle}
                    </span>
                  )}
                  {animateStep === 3 && (
                    <>
                      <div className={cx("head-title", "expand-style")}>
                        {CardContents[3].headTitle}
                      </div>
                      <div className={cx("head-content")}>
                        團隊的價值主張將類似於團隊產品的核心競爭力，也是構建團隊文化的重要一環。快來發想您們團隊的獨特主張吧！
                        <br />
                        （請儘量簡短回答）
                      </div>
                      <div
                        className={cx("back-col", "for-col-1")}
                        onClick={() =>
                          setAnimateStep(animateStepInfo[animateStep].last)
                        }
                      >
                        <span className={cx("back-btn")}>back</span>
                      </div>
                    </>
                  )}
                </div>
              </div>
              {animateStep === 0 && (
                <div className={cx("item-body")}>
                  {CardContents[3].headContent}
                </div>
              )}
              {animateStep === 3 && (
                <>
                  <div className={cx("expand-col", "for-col-3")}>
                    <span>
                      Ｑ：你的產品與現有的有何不同？你的產品為何直得引人注目？
                    </span>
                    <div className={cx("bottom_line_col")}>
                      <input
                        type="text"
                        className={cx("bottom_line_input")}
                        style={{ flex: "0 0 90%" }}
                      />
                    </div>
                    <div className={cx("bottom_line_col")}>
                      <input
                        type="text"
                        className={cx("bottom_line_input")}
                        style={{ flex: "0 0 90%" }}
                      />
                    </div>
                    <div className={cx("bottom_line_col")}>
                      <input
                        type="text"
                        className={cx("bottom_line_input")}
                        style={{ flex: "0 0 90%" }}
                      />
                    </div>
                  </div>
                  <div
                    className={cx("next-step-button")}
                    onClick={() =>
                      setAnimateStep(animateStepInfo[animateStep].next)
                    }
                  ></div>
                </>
              )}
            </div>
            {/* card 4 */}
            <div
              className={cx(
                "animation-item",
                `a-4-${animateStepInfo[animateStep].itemStyle}`,
                !(animateStep === 0 || animateStep === 4) ? "pos-center" : ""
              )}
            >
              <div className={cx("item-head")}>
                <div
                  className={cx(
                    "head-title-col",
                    !(animateStep === 0 || animateStep === 4)
                      ? "pos-center"
                      : ""
                  )}
                >
                  <div
                    className={cx(
                      "animate-word",
                      animateStep === 0 || animateStep === 4 ? "" : "small-size"
                    )}
                  >
                    4
                  </div>
                  {animateStep === 0 && (
                    <div className={cx("item-head-content")}>
                      <span className={cx("head-title")}>
                        {CardContents[4].headTitle}
                      </span>
                      <div className={cx("item-body")}>
                        {CardContents[4].headContent}
                      </div>
                    </div>
                  )}
                  {animateStep === 4 && (
                    <>
                      <div className={cx("head-title", "expand-style")}>
                        {CardContents[4].headTitle}
                      </div>
                      <div className={cx("head-content")}>
                        參照第一步，制定屬於你們的解決方案。
                        <br />
                        （請儘量簡短回答）
                      </div>
                      <div
                        className={cx("back-col", "for-col-1")}
                        onClick={() =>
                          setAnimateStep(animateStepInfo[animateStep].last)
                        }
                      >
                        <span className={cx("back-btn")}>back</span>
                      </div>
                    </>
                  )}
                </div>
                {animateStep === 4 && (
                  <>
                    <div className={cx("expand-col", "for-col-4")}>
                      <span>Ｑ：針對問題，說明你的解決方案的特點？</span>
                      <div className={cx("bottom_line_col")}>
                        <input
                          type="text"
                          className={cx("bottom_line_input")}
                          style={{ flex: "0 0 90%" }}
                        />
                      </div>
                      <div className={cx("bottom_line_col")}>
                        <input
                          type="text"
                          className={cx("bottom_line_input")}
                          style={{ flex: "0 0 90%" }}
                        />
                      </div>
                      <div className={cx("bottom_line_col")}>
                        <input
                          type="text"
                          className={cx("bottom_line_input")}
                          style={{ flex: "0 0 90%" }}
                        />
                      </div>
                    </div>
                    <div
                      className={cx("next-step-button")}
                      onClick={() =>
                        setAnimateStep(animateStepInfo[animateStep].next)
                      }
                    ></div>
                  </>
                )}
              </div>
            </div>
            {/* card 5 */}
            <div
              className={cx(
                "animation-item",
                `a-5-${animateStepInfo[animateStep].itemStyle}`,
                !(animateStep === 0 || animateStep === 5) ? "pos-center" : ""
              )}
            >
              <div className={cx("item-head")}>
                <div
                  className={cx(
                    "head-title-col",
                    !(animateStep === 0 || animateStep === 5)
                      ? "pos-center"
                      : ""
                  )}
                >
                  <div
                    className={cx(
                      "animate-word",
                      animateStep === 0 || animateStep === 5 ? "" : "small-size"
                    )}
                  >
                    5
                  </div>
                  {animateStep === 0 && (
                    <div className={cx("item-head-content")}>
                      <span className={cx("head-title")}>
                        {CardContents[5].headTitle}
                      </span>
                      <div className={cx("item-body")}>
                        {CardContents[5].headContent}
                      </div>
                    </div>
                  )}
                  {animateStep === 5 && (
                    <>
                      <div className={cx("head-title", "expand-style")}>
                        {CardContents[5].headTitle}
                      </div>
                      <div className={cx("head-content")}>
                        找出自我的通路以獲取更大的消費者接觸率，該選擇怎樣的通路呢？
                        <br />
                        （請儘量簡短回答）
                      </div>
                      <div
                        className={cx("back-col", "for-col-1")}
                        onClick={() =>
                          setAnimateStep(animateStepInfo[animateStep].last)
                        }
                      >
                        <span className={cx("back-btn")}>back</span>
                      </div>
                    </>
                  )}
                </div>
              </div>
              {animateStep === 5 && (
                <>
                  <div className={cx("expand-col", "for-col-4")}>
                    <span>Ｑ：你要如何把產品服務拿到使用者面前？</span>
                    <div className={cx("bottom_line_col")}>
                      <input
                        type="text"
                        className={cx("bottom_line_input")}
                        style={{ flex: "0 0 90%" }}
                      />
                    </div>
                    <div className={cx("bottom_line_col")}>
                      <input
                        type="text"
                        className={cx("bottom_line_input")}
                        style={{ flex: "0 0 90%" }}
                      />
                    </div>
                    <div className={cx("bottom_line_col")}>
                      <input
                        type="text"
                        className={cx("bottom_line_input")}
                        style={{ flex: "0 0 90%" }}
                      />
                    </div>
                  </div>
                  <div
                    className={cx("next-step-button")}
                    onClick={() =>
                      setAnimateStep(animateStepInfo[animateStep].next)
                    }
                  ></div>
                </>
              )}
            </div>
            {/* card 6 */}
            <div
              className={cx(
                "animation-item",
                `a-6-${animateStepInfo[animateStep].itemStyle}`,
                !(animateStep === 0 || animateStep === 6) ? "pos-center" : ""
              )}
            >
              <div className={cx("item-head")}>
                <div
                  className={cx(
                    "head-title-col",
                    !(animateStep === 0 || animateStep === 6)
                      ? "pos-center"
                      : ""
                  )}
                >
                  <div
                    className={cx(
                      "animate-word",
                      animateStep === 0 || animateStep === 6 ? "" : "small-size"
                    )}
                  >
                    6
                  </div>
                  {animateStep === 0 && (
                    <div className={cx("item-head-content")}>
                      <span className={cx("head-title")}>
                        {CardContents[6].headTitle}
                      </span>
                      <div className={cx("item-body")}>
                        {CardContents[6].headContent}
                      </div>
                    </div>
                  )}
                  {animateStep === 6 && (
                    <>
                      <div className={cx("head-title", "expand-style")}>
                        {CardContents[6].headTitle}
                      </div>
                      <div className={cx("head-content")}>
                        團隊的價值主張將類似於團隊產品的核心競爭力，也是構建團隊文化的重要一環。快來發想您們團隊的獨特主張吧！(文案想想)
                        <br />
                        （請儘量簡短回答）
                      </div>
                      <div
                        className={cx("back-col", "for-col-1")}
                        onClick={() =>
                          setAnimateStep(animateStepInfo[animateStep].last)
                        }
                      >
                        <span className={cx("back-btn")}>back</span>
                      </div>
                    </>
                  )}
                </div>
              </div>
              {animateStep === 6 && (
                <>
                  <div className={cx("expand-col", "for-col-4")}>
                    <span>Ｑ：你的產品該如何獲利收費？</span>
                    <div className={cx("bottom_line_col")}>
                      <input
                        type="text"
                        className={cx("bottom_line_input")}
                        style={{ flex: "0 0 90%" }}
                      />
                    </div>
                    <div className={cx("bottom_line_col")}>
                      <input
                        type="text"
                        className={cx("bottom_line_input")}
                        style={{ flex: "0 0 90%" }}
                      />
                    </div>
                    <div className={cx("bottom_line_col")}>
                      <input
                        type="text"
                        className={cx("bottom_line_input")}
                        style={{ flex: "0 0 90%" }}
                      />
                    </div>
                  </div>
                  <div
                    className={cx("next-step-button")}
                    onClick={() =>
                      setAnimateStep(animateStepInfo[animateStep].next)
                    }
                  ></div>
                </>
              )}
            </div>
            {/* card 7 */}
            <div
              className={cx(
                "animation-item",
                `a-7-${animateStepInfo[animateStep].itemStyle}`,
                !(animateStep === 0 || animateStep === 7) ? "pos-center" : ""
              )}
            >
              <div className={cx("item-head")}>
                <div
                  className={cx(
                    "head-title-col",
                    !(animateStep === 0 || animateStep === 7)
                      ? "pos-center"
                      : ""
                  )}
                >
                  <div
                    className={cx(
                      "animate-word",
                      animateStep === 0 || animateStep === 7 ? "" : "small-size"
                    )}
                  >
                    7
                  </div>
                  {animateStep === 0 && (
                    <div className={cx("item-head-content")}>
                      <span className={cx("head-title")}>
                        {CardContents[7].headTitle}
                      </span>
                      <div className={cx("item-body")}>
                        {CardContents[7].headContent}
                      </div>
                    </div>
                  )}
                  {animateStep === 7 && (
                    <>
                      <div
                        className={cx("head-title", "expand-style")}
                        style={{ flex: "0 0 115px" }}
                      >
                        {CardContents[7].headTitle}
                      </div>
                      <div className={cx("head-content")}>
                        團隊的價值主張將類似於團隊產品的核心競爭力，也是構建團隊文化的重要一環。快來發想您們團隊的獨特主張吧！(文案想想)
                        <br />
                        （請儘量簡短回答）
                      </div>
                      <div
                        className={cx("back-col", "for-col-1")}
                        onClick={() =>
                          setAnimateStep(animateStepInfo[animateStep].last)
                        }
                      >
                        <span className={cx("back-btn")}>back</span>
                      </div>
                    </>
                  )}
                </div>
              </div>
              {animateStep === 7 && (
                <>
                  <div className={cx("expand-col", "for-col-4")}>
                    <span>
                      Ｑ：建立MVP（最小可行商品）到推到使用者面前會需要多少錢？
                    </span>
                    <div className={cx("bottom_line_col")}>
                      <input
                        type="text"
                        className={cx("bottom_line_input")}
                        style={{ flex: "0 0 90%" }}
                      />
                    </div>
                    <div className={cx("bottom_line_col")}>
                      <input
                        type="text"
                        className={cx("bottom_line_input")}
                        style={{ flex: "0 0 90%" }}
                      />
                    </div>
                    <div className={cx("bottom_line_col")}>
                      <input
                        type="text"
                        className={cx("bottom_line_input")}
                        style={{ flex: "0 0 90%" }}
                      />
                    </div>
                  </div>
                  <div
                    className={cx("next-step-button")}
                    onClick={() =>
                      setAnimateStep(animateStepInfo[animateStep].next)
                    }
                  ></div>
                </>
              )}
            </div>
            {/* card 8 */}
            <div
              className={cx(
                "animation-item",
                `a-8-${animateStepInfo[animateStep].itemStyle}`,
                !(animateStep === 0 || animateStep === 8) ? "pos-center" : ""
              )}
            >
              <div className={cx("item-head")}>
                <div
                  className={cx(
                    "head-title-col",
                    !(animateStep === 0 || animateStep === 8)
                      ? "pos-center"
                      : ""
                  )}
                >
                  <div
                    className={cx(
                      "animate-word",
                      animateStep === 0 || animateStep === 8 ? "" : "small-size"
                    )}
                  >
                    8
                  </div>
                  {animateStep === 0 && (
                    <div className={cx("item-head-content")}>
                      <span className={cx("head-title")}>
                        {CardContents[8].headTitle}
                      </span>
                      <div className={cx("item-body")}>
                        {CardContents[8].headContent}
                      </div>
                    </div>
                  )}
                  {animateStep === 8 && (
                    <>
                      <div
                        className={cx("head-title", "expand-style")}
                        style={{ flex: "0 0 80px" }}
                      >
                        {CardContents[8].headTitle}
                      </div>
                      <div className={cx("head-content")}>
                        數據的年代要靠數據說話，請建立屬於團隊的量化指標！
                        <br />
                        （請儘量簡短回答）
                      </div>
                      <div
                        className={cx("back-col")}
                        onClick={() =>
                          setAnimateStep(animateStepInfo[animateStep].last)
                        }
                      >
                        <span className={cx("back-btn")}>back</span>
                      </div>
                    </>
                  )}
                </div>
              </div>
              {animateStep === 8 && (
                <>
                  <div className={cx("expand-col", "for-col-4")}>
                    <span>Ｑ：透過清楚、量化的指標來測試你的假說</span>
                    <div className={cx("bottom_line_col")}>
                      <input
                        type="text"
                        className={cx("bottom_line_input")}
                        style={{ flex: "0 0 90%" }}
                      />
                    </div>
                    <div className={cx("bottom_line_col")}>
                      <input
                        type="text"
                        className={cx("bottom_line_input")}
                        style={{ flex: "0 0 90%" }}
                      />
                    </div>
                    <div className={cx("bottom_line_col")}>
                      <input
                        type="text"
                        className={cx("bottom_line_input")}
                        style={{ flex: "0 0 90%" }}
                      />
                    </div>
                  </div>
                  <div
                    className={cx("next-step-button")}
                    onClick={() =>
                      setAnimateStep(animateStepInfo[animateStep].next)
                    }
                  ></div>
                </>
              )}
            </div>
            {/* card 9 */}
            <div
              className={cx(
                "animation-item",
                `a-9-${animateStepInfo[animateStep].itemStyle}`,
                !(animateStep === 0 || animateStep === 9) ? "pos-center" : ""
              )}
            >
              <div className={cx("item-head")}>
                <div
                  className={cx(
                    "head-title-col",
                    !(animateStep === 0 || animateStep === 9)
                      ? "pos-center"
                      : ""
                  )}
                >
                  <div
                    className={cx(
                      "animate-word",
                      animateStep === 0 || animateStep === 9 ? "" : "small-size"
                    )}
                  >
                    9
                  </div>
                  {animateStep === 0 && (
                    <div className={cx("item-head-content")}>
                      <span className={cx("head-title")}>
                        {CardContents[9].headTitle}
                      </span>
                      <div className={cx("item-body")}>
                        {CardContents[9].headContent}
                      </div>
                    </div>
                  )}
                  {animateStep === 9 && (
                    <>
                      <div
                        className={cx("head-title", "expand-style")}
                        style={{ flex: "0 0 115px" }}
                      >
                        {CardContents[9].headTitle}
                      </div>
                      <div className={cx("head-content")}>
                        數據的年代要靠數據說話，請建立屬於團隊的量化指標！
                        <br />
                        （請儘量簡短回答）
                      </div>
                      <div
                        className={cx("back-col")}
                        onClick={() =>
                          setAnimateStep(animateStepInfo[animateStep].last)
                        }
                      >
                        <span className={cx("back-btn")}>back</span>
                      </div>
                    </>
                  )}
                </div>
              </div>
              {animateStep === 9 && (
                <>
                  <div className={cx("expand-col", "for-col-4")}>
                    <span>
                      Ｑ：你擁有什麼是無法被購賣或複製的？（內部消息、與使用者的連結、背書、關鍵夥伴等等）
                    </span>
                    <div className={cx("bottom_line_col")}>
                      <input
                        type="text"
                        className={cx("bottom_line_input")}
                        style={{ flex: "0 0 90%" }}
                      />
                    </div>
                    <div className={cx("bottom_line_col")}>
                      <input
                        type="text"
                        className={cx("bottom_line_input")}
                        style={{ flex: "0 0 90%" }}
                      />
                    </div>
                    <div className={cx("bottom_line_col")}>
                      <input
                        type="text"
                        className={cx("bottom_line_input")}
                        style={{ flex: "0 0 90%" }}
                      />
                    </div>
                  </div>
                  <div
                    className={cx("next-step-button")}
                    onClick={() =>
                      setAnimateStep(animateStepInfo[animateStep].next)
                    }
                  ></div>
                </>
              )}
            </div>
          </div>
        </div>
        {/* mistake revise col */}
        <div className={cx("mistake-revise-col")}>
          <div className={cx("seperate-line")}></div>
          <div className={cx("mistake-condolence-col")}>
            <div className={cx("condolence-title")}>創業犯錯了該怎麼辦呢？</div>
            <div className={cx("condolence-words")}>
              <p style={{ fontSize: "16px" }}>犯錯沒有關係😃😃😃。</p>
              <p
                style={{
                  padding: "0 10vw",
                  lineHeight: "2",
                  marginBottom: "30px",
                }}
              >
                其實你就是要犯錯。你要不斷的去學習使用者真正要什麼，並不斷調整產品服務。你必須要接受你會時常犯錯，而要把錯誤的想法變正確的，你就需要不斷去測試你的假說，你可以問自己這些問題：
              </p>
              <p>* 我的產品服務跟市面上的差在哪裡？好在哪裡? *</p>
              <p>新聞媒體會怎麼描述我的產品服務? *</p>
              <p>為什麼我是對的人來做這項產品服務？</p>
            </div>
          </div>
          <div className={cx("condolence-cards-col")}>
            <div className={cx("condolence-card")}>
              <div className={cx("condolence-card-title")}>創造</div>
              <div className={cx("condolence-card-content")}>
                在迴圈的第一步，根據你要解決的問題創造出一最小可行性方案 MVP。
              </div>
            </div>
            <div className={cx("condolence-card")}>
              <div className={cx("condolence-card-title")}>測量</div>
              <div className={cx("condolence-card-content")}>
                把 MVP 給你的用戶使用並蒐集量化和質化的回饋。{" "}
              </div>
            </div>
            <div className={cx("condolence-card")}>
              <div className={cx("condolence-card-title")}>學習</div>
              <div className={cx("condolence-card-content")}>
                花時間吸收你所蒐集到的數據，然後應用所學。
              </div>
            </div>
            <div className={cx("condolence-card")}>
              <div className={cx("condolence-card-title")}>重複</div>
              <div className={cx("condolence-card-content")}>
                一個健康的公司會不斷重複這三個步驟，他們會專注在使用者身上，蒐集回饋並不斷學習進步。
              </div>
            </div>
          </div>
        </div>
        {/* communicate col */}
        <div className={cx("communicate-col")}>
          <div className={cx("seperate-line")}></div>
          <div className={cx("communication-col")}>
            <div className={cx("communication-title")}>與潛在用戶溝通</div>
            <div className={cx("communication-words")}>
              <p>
                當你要了解使用者時，我們建議你離開你的辦公室。走出去跟使用者面對面的溝通，或創建社群來激發大家對你產品服務的興趣。
              </p>
            </div>
          </div>
          <div className={cx("communication-cards-col")}>
            <div className={cx("communication-card", "first-col")}>
              <div className={cx("communication-card-title")}>
                Problem Interviews
              </div>
              <div className={cx("communication-card-content")}>
                這種訪談的目的在於證明你所要解決的問題確實存在。與用戶溝同時，提出你對於問題的見解，並衡量對方的回覆。確保用戶有在尋求該問題的解決方案。
              </div>
            </div>
            <div className={cx("communication-card", "second-col")}>
              <div className={cx("communication-card-title")}>
                Solution interviews
              </div>
              <div className={cx("communication-card-content")}>
                這時，你已經確定問題的存在和真實性了。現在把你所設計出的解決方案拿到他們面前並蒐集回饋。理想狀態下，你會與
                30~50 位用戶進行訪談。
              </div>
            </div>
            <div className={cx("communication-pic")}></div>
          </div>
        </div>
        {/* more */}
        <div className={cx("more-col")}>
          <div className={cx("seperate-line", "more-col-line")}></div>
          <div className={cx("more-cards-col")}>
            <div className={cx("more-card")}>
              <div className={cx("more-card-title")}>
                你還有哪些Lean StartUp工具可以用？
              </div>
              <div className={cx("more-card-content")}>
                <div className={cx("more-line")}>
                  <div className={cx("more-line-title", "left")}>CNVS</div>
                  <span>- 在網頁上建立Lean Canvas</span>
                </div>
                <div className={cx("more-line")}>
                  <div className={cx("more-line-title", "left")}>Typeform</div>
                  <span>- 設計美觀的問卷蒐集回饋</span>
                </div>
                <div className={cx("more-line")}>
                  <div className={cx("more-line-title", "left")}>Intercom</div>
                  <span>- 規模化的與用戶溝通</span>
                </div>
              </div>
            </div>
            <div className={cx("more-card")}>
              <div className={cx("more-card-title")}>延伸閱讀</div>
              <div className={cx("more-card-content")}>
                <div className={cx("more-line")}>
                  》為什麼Lean Startup 會改變一切
                </div>
                <div className={cx("more-line")}>
                  》Superhuman是如何建立PMF引擎-First Round Review
                </div>
                <div className={cx("more-line")}>
                  》超越Lean Startup - Andreesen Horowitz
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* button */}
        <PressToNext
          name="前往下一章"
          pressToNextPage={() => history.push("./Homepage")}
        />
      </div>
      <Footer />
    </div>
  );
};

export default LeanCanvasPage;
