import React from "react";
import classNames from "classnames/bind";
import styles from "./index.module.css";

import Footer from "component/Footer";
import Header from "container/Header";
import PressToNext from "../../component/PressToNext";

const cx = classNames.bind(styles);

const FundraisingPage = (props) => {
  return (
    <div className={cx("fundraising-page-wrap")}>
      <Header></Header>
      <div className={cx("fundraising-page-content")}>
        {/* first */}
        <div className={cx("fund-raise-yellow-col")}>
          <div className={cx("fund-raise-title")}>什麼是募資？？</div>
          <div className={cx("fund-raise-content")}>
            軟體、器材、租金和員工 ー
            他們都不是免費的。雖然有可能不花太多錢就可以推出產品，但到時候還會需要資金來成長公司。這時候你就需要外來資金：朋友或家人、天使投資人或專業的創投。
            通常來說， 25% 的新創會拿家人或朋友的錢，2.5% 會拿到天使投資，0.25%
            會獲得前期創投投資、0.025%
            才會獲得後期的創投投資。現實狀況：會經歷整個募資過程的新創公司很少
            ー 大部分的公司會在第一階段就結束了。
          </div>
          <div className={cx("fund-raise-btn-col")}>
            <PressToNext
              classname={cx("fund-raising-btn")}
              containerStyle={{
                justifyContent: "flex-end",
                marginBottom: 0,
              }}
              btnStyle={{ border: "1px solid #fff" }}
              name={"next"}
            />
          </div>
        </div>
        {/* second */}
        <div className={cx("fund-raise-grey-col")}>
          <div className={cx("fund-raise-title")}>募資輪又是什麼？</div>
          <div className={cx("fund-raise-content")}>
            理想狀況是這樣：獲得用戶，吸引投資人、獲得投資。現實狀況卻不是這麼容易。通常你第一次與專業投資人見面會是開始正式一次募資輪的時候。
            如果你夠幸運的話，你會找到一個願意全額投資的創投，你們簽約、創投匯錢然後結束該輪。但大部分的投資人只會投資部分，這時你會需要找他其他的投資人加入。
            當你和領投者已經談妥 term sheet
            時，其他的投資人會被邀請加入然後適用相同條款。通常，term sheet
            會設立一個最低的募集資金門檻 ー
            也就是說，如果募到的資金未達門檻的話，所有投資人都有權利放棄。
            每個階段都有適合的投資人，每個投資人投資的項目金額大小不同，通常投資有以下幾個階段。
          </div>
          <div className={cx("fund-raise-btn-col")}>
            <PressToNext
              classname={cx("fund-raising-btn")}
              containerStyle={{
                justifyContent: "flex-end",
                marginBottom: 0,
              }}
              btnStyle={{ border: "1px solid #111", color: "#111" }}
              name={"next"}
            />
          </div>
        </div>
        {/* third */}
        <div className={cx("fund-raise-yellow-col")}>
          <div className={cx("fund-raise-content")}>
            <div className={cx("describe-col")}>當你有一個創意點子的時候。</div>
          </div>
          <div className={cx("fund-raise-btn-col")}>
            <PressToNext
              classname={cx("fund-raising-btn")}
              containerStyle={{
                justifyContent: "flex-end",
                marginBottom: 0,
              }}
              btnStyle={{ border: "1px solid #fff" }}
              name={"next"}
            />
          </div>
        </div>
        {/* forth */}
        <div className={cx("fund-raise-grey-col")}>
          <div className={cx("fund-raise-content", "fund-raise-wheel")}>
            <div className={cx("fund-raise-content-left")}>
              <div className={cx("describe-col")}>
                有Prototype
                <br /> 初步的商業模式
                <br /> 已累積少數核心用戶。
                <br />
                <br /> 經歷天使輪與種子輪。
              </div>
            </div>
            <div className={cx("fund-raise-content-right")}>
              <div className={cx("fund-raising-wheel-col")}>
                <div className={cx("fund-raising-top-circle")}>種子輪</div>
                <div className={cx("fund-raising-wheel-content")}>
                  金額：100k-1M
                  <br /> 可能投資人：
                  <br /> 親友 <br /> 小型天使投資人
                  <br /> 業餘天使投資人
                </div>
              </div>
              <div className={cx("fund-raising-wheel-col")}>
                <div className={cx("fund-raising-top-circle")}>天使輪</div>
                <div className={cx("fund-raising-wheel-content")}>
                  金額：1M-10M
                  <br /> 可能投資人：
                  <br /> 專業投資人
                  <br /> 早期創投
                </div>
              </div>
            </div>
            <div className={cx("fund-raise-btn-col")}>
              <PressToNext
                classname={cx("fund-raising-btn")}
                containerStyle={{
                  flex: 1,
                  justifyContent: "flex-end",
                  marginBottom: 0,
                  height: "47px",
                  alignSelf: "flex-end",
                }}
                btnStyle={{ border: "1px solid #111", color: "#111" }}
                name={"next"}
              />
            </div>
          </div>
        </div>
        {/* fifth */}
        <div className={cx("fund-raise-yellow-col")}>
          <div
            className={cx("fund-raise-content")}
            style={{ marginTop: "5vw" }}
          >
            <div className={cx("fund-raise-content-left")}>
              <div className={cx("describe-col")}>之後會再經歷ABＣ輪募資。</div>
            </div>
            <div
              className={cx("fund-raise-content-right")}
              style={{ flex: "0 0 20vw" }}
            >
              <div className={cx("fund-raising-three-wheel-col")}>
                <div className={cx("fund-raising-three-wheel")}>
                  <div
                    className={cx(
                      "fund-raising-three-top-circle",
                      "first-circle"
                    )}
                  >
                    A輪
                  </div>
                  <div
                    className={cx(
                      "fund-raising-three-top-circle",
                      "second-circle"
                    )}
                  >
                    B輪
                  </div>
                  <div
                    className={cx(
                      "fund-raising-three-top-circle",
                      "third-circle"
                    )}
                  >
                    C輪
                  </div>
                </div>
                <div className={cx("fund-raising-three-wheel-content")}>
                  金額：10M-1B <br />
                  可能投資人： <br />
                  創投基金
                </div>
                <div className={cx("fund-raising-three-wheel-bottom-content")}>
                  產品有成熟模樣並有完整的盈利模式
                  <br /> 開始複製商業模式
                  <br /> 正在為上市做準備
                </div>
              </div>
            </div>
            <div className={cx("fund-raise-btn-col")}>
              <PressToNext
                classname={cx("fund-raising-btn")}
                containerStyle={{
                  flex: 1,
                  justifyContent: "flex-end",
                  marginBottom: 0,
                  height: "47px",
                  alignSelf: "flex-end",
                }}
                btnStyle={{ border: "1px solid #111", color: "#111" }}
                name={"next"}
              />
            </div>
          </div>
        </div>
        {/* six */}
        <div className={cx("fund-raise-grey-col")}>
          <div className={cx("fund-raise-content")}>
            <div className={cx("describe-col")}>
              最後的公司將會面臨3個結果：
              <br />
              <br /> 1.公司上市
              <br /> 2.公司出售
              <br /> 3.維持私有
            </div>
          </div>
          <PressToNext
            classname={cx("fund-raising-btn")}
            containerStyle={{
              justifyContent: "flex-end",
              marginBottom: 0,
            }}
            btnStyle={{ border: "1px solid #111", color: "#111" }}
            name={"next"}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FundraisingPage;
