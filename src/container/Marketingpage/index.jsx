import React from "react";
import classNames from "classnames/bind";
import styles from "./index.module.css";

import Footer from "component/Footer";
import Header from "container/Header";
import PressToNext from "component/PressToNext";
import { useHistory } from "react-router";

const cx = classNames.bind(styles);

const MarketingPage = (props) => {
  const history = useHistory();
  return (
    <div className={cx("marketing-page-wrap")}>
      <Header></Header>
      <div className={cx("marketing-page-content")}>
        <div className={cx("marketing-intro-col")}>
          <div className={cx("marketing-intro")}>
            <h2 className={cx("marketing-title")}>社群與營銷</h2>
            <div className={cx("marketing-intro-words")}>
              在營銷與社群的過程中，我們將透過創業營銷與社群行銷兩個階段，帶領您一同探討在市場上，作為一間新創公司，應該如何贏得消費者的味蕾。除了運氣以外，這些在市場上獲得夼大消費者喜愛的公司是否都是經過了十足的行銷設計以及社群營銷，又該如何為自己的公司設計一太擄獲消費者芳心的銷售方式呢？讓我們一起下去研究與探討吧！{" "}
            </div>
          </div>
          <div className={cx("marketing-two-circle-col")}>
            <div className={cx("marketing-circle", "soft-power")}>
              <div className={cx("marketing-circle-title")}>創業營銷</div>
              <div className={cx("marketing-circle-content")}>
                在開始砌磚之前，您需要一個堅實的基礎。成功的創業營銷策略遵循同樣的原則。在開始營銷您的初創公司之前，請確保您已涵蓋以下基礎。
              </div>
            </div>
            <div className={cx("marketing-circle", "hard-power")}>
              <div className={cx("marketing-circle-title")}>社群行銷</div>
              <div className={cx("marketing-circle-content")}>
                來把社群當行銷工具吧！
                與初期用戶建立感情可以讓需要省錢的你快速建立起口碑行銷。
                一起來思考下幾點ㄛ～
              </div>
            </div>
          </div>
        </div>
        <div className={cx("sequence-col")}>
          <div className={cx("sequence-left-col")}>
            <div className={cx("hint-column")}>
              <div className={cx("hint-title")}>選擇市場</div>
              <div className={cx("hint-content")}>
                <p>
                  初創公司創始人很容易相信全世界都會喜歡他們的產品。
                  畢竟，創始人吃、睡和呼吸他們的產品。
                  現實情況是，只有一小部分人對您的產品感興趣。
                  如果你試圖向所有人推銷你的創業公司，你既浪費時間又浪費金錢。
                  關鍵是確定一個利基目標市場並積極追求市場份額。
                </p>
                <button className={cx("hint-button")}>查看市場企劃書</button>
                <p>之前您們已完成的市場部份～</p>
              </div>
              <div className={cx("arrow-down")}></div>
            </div>
            <div className={cx("hint-column")}>
              <div className={cx("hint-content")}>
                <p>
                  確認您們是否有考慮以下四個主要因素吧！
                  <br />
                  市場規模 --{">"}
                  您的目標是區域人口嗎？男性？孩子們？準確了解您的目標市場中有多少潛在客戶。
                  <br />
                  市場財富 --{">"}這個市場有沒有錢花在你的產品上？
                  <br />
                  市場競爭 --{">"}市場是否飽和？比如，他們的競爭對手多嗎？
                  <br />
                  價值主張 --{">"}你的價值主張是否足夠獨特以消除噪音？
                </p>
                <button className={cx("hint-button")}>確定</button>
                <div className={cx("arrow-down")}></div>
              </div>
            </div>
            <div className={cx("hint-input-column")}>
              <div className={cx("hint-input-title")}>定義關鍵字</div>
              <div className={cx("hint-input-content")}>
                <p>
                  有了明確定義的市場，您就可以開始構建關鍵字列表。您將主要將關鍵字列表用於博客、社交媒體和您的主要營銷網站。本質上，您希望建立一個與您的品牌高度相關的單詞或短語列表。問問自己：有人會在
                  Google中輸入什麼內容來找到您的初創公司的網站？請製作包含三到五個關鍵字的列表，它們完全總結了您的創業公司所做的事情。
                  舉例：Onboardly的核心關鍵詞列表為1. 獲客 2. 內容營銷
                  3.創業公關
                  您的核心關鍵字列表應基於您的價值主張！請你們一起決定提供給客戶的是什麼吧～
                </p>
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
              <div className={cx("arrow-down")}></div>
            </div>
            <div className={cx("hint-input-column")}>
              <div className={cx("hint-input-title")}>定義次要關鍵字</div>
              <div className={cx("hint-input-content")}>
                <p>
                  現在，您需要擴展核心關鍵字列表以包含次要關鍵字。次要關鍵字更具體。以之前的核心關鍵詞“內容營銷”為例。次要關鍵詞可能包括：企業博客、博客最佳實踐、電子郵件營銷方法等。
                </p>
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
                <br />
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
                <br />
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
              <div className={cx("arrow-down")}></div>
            </div>
            <div className={cx("hint-column")}>
              <div className={cx("hint-content")}>
                <div className={cx("hint-title")}>定義成功</div>
                <p>
                  每個創業公司的成功都是不同的。 也許成功是初創公司 A 每月有 500
                  個新註冊，而初創公司 B 認為成功是每月收入 50,000
                  美元。不管你對成功的看法是什麼，儘早定義它並嚴格定義它。把它寫下來或發送給整個團隊。只要確保與您一起工作的每個人都知道您對成功的定義並準備好為之努力。
                  一定要保持一致。
                  <br />
                  如果您通過註冊、收入、利潤或其他任何您能想到的東西來定義成功，這並不重要。重要的是它與實際增長相關（沒有虛榮的成功）並且每個月都以相同的方式衡量。例如，不要將成功定義為一個月新註冊
                  500 次，然後下個月收入 50,000 美元。選擇一個定義並致力於它。
                </p>
              </div>
              <div className={cx("arrow-down")}></div>
            </div>
            <div className={cx("hint-column")}>
              <div className={cx("hint-content")}>
                <p>
                  輪到你了，你對於成功的定義是什麼？
                  <br />
                  <div className={cx("bottom_line_col")}>
                    <input type="text" className={cx("bottom_line_input")} />
                  </div>
                  <div className={cx("bottom_line_col")}>
                    <input type="text" className={cx("bottom_line_input")} />
                  </div>
                  <div className={cx("bottom_line_col")}>
                    <input type="text" className={cx("bottom_line_input")} />
                  </div>
                </p>
                <button className={cx("hint-button")}>確定</button>
              </div>
              <div className={cx("arrow-down")}></div>
            </div>
            <div className={cx("hint-input-column")}>
              <div className={cx("hint-input-title")}>設置核心指標</div>
              <div className={cx("hint-input-content")}>
                <p>
                  確保您的核心指標可準確衡量且具體。例如，假設您已將成功定義為每月
                  500
                  次新註冊。您可以衡量三個通訊註冊的轉化率。我們的想法是根據整個客戶獲取渠道中採取的行動（例如註冊、時事通訊訂閱、電子書下載）制定一些非常有價值的指標。不要試圖衡量一切。關注成功的關鍵指標。
                </p>
              </div>
              <div className={cx("arrow-down")}></div>
            </div>
            <div className={cx("hint-input-column")}>
              <div className={cx("hint-input-title")}>估算轉化率</div>
              <div className={cx("hint-input-content")}>
                <p>
                  估計（基於歷史數據）您的潛在客戶轉化率。現在做同樣的事情來估計客戶的終身價值。如果您知道有多少潛在客戶轉化以及這些轉化為您的初創公司產生了多少，您可以為目標完成分配價值。
                </p>
              </div>
              <div className={cx("arrow-down")}></div>
            </div>
            <div className={cx("hint-input-column")}>
              <div className={cx("hint-input-title")}>設定預算</div>
              <div className={cx("hint-input-content")}>
                <p>
                  “57% 的初創公司營銷經理沒有將營銷預算建立在任何 ROI 分析上。”
                  更重要的是，仔細計劃您打算如何分配預算。也許您的博客是迄今為止最強大的工具，並且您希望將
                  40% 的預算投入其中。或者，您可能想花費 35%
                  的預算來開發新的電子書或在線課程。在開始消費之前，請確保您已經解決了後勤問題。
                </p>
                <div className={cx("hint-button-center")}>
                  <button className={cx("hint-input-button")}>
                    我知道了，完成創業營銷
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className={cx("sequence-right-col")}>
            <div className={cx("hint-input-column")}>
              <div className={cx("hint-input-title")}>
                行銷與社群是密不可分的
              </div>
              <div className={cx("hint-input-content")}>
                <p>
                  在行銷你的產品同時可以幫助你建立社群，同樣的，建立你的社群也可以幫助你行銷產品。
                </p>
              </div>
              <div className={cx("arrow-down")}></div>
            </div>
            <div className={cx("hint-input-column")}>
              <div className={cx("hint-input-title")}>把自己想像成派對主人</div>
              <div className={cx("hint-input-content")}>
                <p>
                  當你在經營社群時，把自己想像成在當一個派對主人，想辦法讓參加的人覺得輕鬆自在。
                </p>
              </div>
              <div className={cx("arrow-down")}></div>
            </div>
            <div className={cx("hint-input-column")}>
              <div className={cx("hint-input-title")}>親自與用戶溝通</div>
              <div className={cx("hint-input-content")}>
                <p>
                  會來與品牌接觸的人是你的死忠粉絲，與他們建立良好關係並把他們變成你的品牌宣傳者。
                </p>
              </div>
              <div className={cx("arrow-down")}></div>
            </div>
            <div className={cx("hint-input-column")}>
              <div className={cx("hint-input-title")}>真誠</div>
              <div className={cx("hint-input-content")}>
                <p>尊重用戶。勇於承擔錯誤和責任。</p>
              </div>
              <div className={cx("arrow-down")}></div>
            </div>
            <div className={cx("hint-input-column")}>
              <div className={cx("hint-input-title")}>投資客戶服務</div>
              <div className={cx("hint-input-content")}>
                <p>
                  把客戶服務做到貼心個人化。這會是一個很好與競爭者做出差異化的點，建立品牌忠誠度並促使良好口碑行銷
                </p>
                <div className={cx("hint-button-center")}>
                  <button className={cx("hint-input-button")}>
                    好的，我都了解了！
                  </button>
                  <div className={cx("arrow-down")}></div>
                </div>
              </div>
            </div>
            <div className={cx("hint-column")}>
              <div className={cx("hint-content")}>
                <div className={cx("hint-input-title")}>
                  避免付費 PR 和行銷。
                </div>
                <p>
                  盡量不要付錢來成長用戶，自然成長會是一個較有價值且較好衡量你的進展的方法。
                </p>
              </div>
              <div className={cx("arrow-down")}></div>
            </div>
            <div className={cx("hint-column")}>
              <div className={cx("hint-content")}>
                <div className={cx("hint-input-title")}>
                  新創初期，新聞版面不會是你要專注的重點。
                </div>
                <p>
                  如果你的產品真的照你所說的好用，那新聞媒體自然會找上門。如果你真的需要新聞報導，直接寄信給記者並告訴他們你的產品服務跟他們有什麼關聯。互助互利。不要在公關公司身上浪費錢。
                </p>
              </div>
              <div className={cx("arrow-down")}></div>
            </div>
            <div className={cx("hint-column")}>
              <div className={cx("hint-content")}>
                <div className={cx("hint-input-title")}>
                  接下來，研究誰負責跑你的領域新聞。
                </div>
                <p>
                  雖然我們一直提倡不要花大錢找公關或做行銷，但最終你還是會發現有些時候是需要展現出積極性的：一個重大的產品發佈或一個重要的公司里程碑。為這些時候做準備，你可以製作一個試算表紀錄所有在你領域的記者、主持人或網紅的聯絡方式。當時間一到時，你會比較容易聯絡到他們。
                </p>
                <div className={cx("hint-button-center")}>
                  <button className={cx("hint-button")}>
                    好的，我都了解了！
                  </button>
                </div>
              </div>
              <div className={cx("arrow-down")}></div>
            </div>
            <div className={cx("hint-input-column")}>
              <div className={cx("hint-input-content")}>
                <p style={{ textAlign: "center", marginBottom: "40px" }}>
                  總而言之，在社群與行銷你必須學會的三件事情是.....
                </p>
                <div className={cx("hint-three-step-pic")}></div>
                <div className={cx("hint-button-center")}>
                  <button className={cx("hint-input-button")}>
                    我知道了，完成社群行銷
                  </button>
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

export default MarketingPage;
