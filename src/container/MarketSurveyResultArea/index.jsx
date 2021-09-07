import React from "react";
import classNames from "classnames/bind";
import styles from "./index.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);
const MarketSurveyResultArea = (props) => {
  const survey_list = [
    {
      title: "產業概況",
      content:
        "Lorem ipsum dolor sit amet, graeci tacimates voluptatibus ea pro, vix alia mnesarchum cu, et graeci dissentiunt vim. Duo autem justo noluisse an, per at quot comprehensam. Sed tibique disputando et, oblique deserunt cu has. Diam congue nullam ea mel, sint case dolorem vel ne. Per sint eleifend ne. Id graeco dicunt usu, ad cum tantas euismod perpetua. Mel utinam civibus volumus ex, duo noluisse corrumpit utMel vidit molestie delectus id. Nulla ocurreret rationibus duo et. Nam te nostrud incorrupte, mei omnis petentium laboramus et. Vim no tibique platonem referrentur. Est dicta recteque philosophia an",
      selected: false,
    },
    {
      title: "價值主張",
      content:
        "Lorem ipsum dolor sit amet, graeci tacimates voluptatibus ea pro, vix alia mnesarchum cu, et graeci dissentiunt vim. Duo autem justo noluisse an, per at quot comprehensam. Sed tibique disputando et, oblique deserunt cu has. Diam congue nullam ea mel, sint case dolorem vel ne. Per sint eleifend ne. Id graeco dicunt usu, ad cum tantas euismod perpetua. Mel utinam civibus volumus ex, duo noluisse corrumpit utMel vidit molestie delectus id. Nulla ocurreret rationibus duo et. Nam te nostrud incorrupte, mei omnis petentium laboramus et. Vim no tibique platonem referrentur. Est dicta recteque philosophia an",
      selected: false,
    },
    {
      title: "目標市場",
      content:
        "Lorem ipsum dolor sit amet, graeci tacimates voluptatibus ea pro, vix alia mnesarchum cu, et graeci dissentiunt vim. Duo autem justo noluisse an, per at quot comprehensam. Sed tibique disputando et, oblique deserunt cu has. Diam congue nullam ea mel, sint case dolorem vel ne. Per sint eleifend ne. Id graeco dicunt usu, ad cum tantas euismod perpetua. Mel utinam civibus volumus ex, duo noluisse corrumpit utMel vidit molestie delectus id. Nulla ocurreret rationibus duo et. Nam te nostrud incorrupte, mei omnis petentium laboramus et. Vim no tibique platonem referrentur. Est dicta recteque philosophia an",
      selected: false,
    },
    {
      title: "市場需求",
      content:
        "Lorem ipsum dolor sit amet, graeci tacimates voluptatibus ea pro, vix alia mnesarchum cu, et graeci dissentiunt vim. Duo autem justo noluisse an, per at quot comprehensam. Sed tibique disputando et, oblique deserunt cu has. Diam congue nullam ea mel, sint case dolorem vel ne. Per sint eleifend ne. Id graeco dicunt usu, ad cum tantas euismod perpetua. Mel utinam civibus volumus ex, duo noluisse corrumpit utMel vidit molestie delectus id. Nulla ocurreret rationibus duo et. Nam te nostrud incorrupte, mei omnis petentium laboramus et. Vim no tibique platonem referrentur. Est dicta recteque philosophia an",
      selected: false,
    },
    {
      title: "市場規模與市占率",
      content:
        "Lorem ipsum dolor sit amet, graeci tacimates voluptatibus ea pro, vix alia mnesarchum cu, et graeci dissentiunt vim. Duo autem justo noluisse an, per at quot comprehensam. Sed tibique disputando et, oblique deserunt cu has. Diam congue nullam ea mel, sint case dolorem vel ne. Per sint eleifend ne. Id graeco dicunt usu, ad cum tantas euismod perpetua. Mel utinam civibus volumus ex, duo noluisse corrumpit utMel vidit molestie delectus id. Nulla ocurreret rationibus duo et. Nam te nostrud incorrupte, mei omnis petentium laboramus et. Vim no tibique platonem referrentur. Est dicta recteque philosophia an",
      selected: false,
    },
  ];
  const [surveyList, setSurveyList] = React.useState(survey_list);
  console.log("survey_list", survey_list);
  return (
    <>
      {/* Banner */}
      <div className={cx("banner-column-wrap")}>
        <Solution />
        <div className={cx("market2-content")}>
          <Banner />
          <div
            style={{
              display:
                surveyList.filter((item) => item.selected).length === 1
                  ? "block"
                  : "none",
              transitionProperty: "display",
              transitionDuration: "3s",
            }}
          >
            {surveyList
              .filter((item) => item.selected)
              .map((each, index) => (
                <SurveyLargeColumn
                  title={each.title}
                  content={each.content}
                  onCloseColumn={() => {
                    setSurveyList((prev) =>
                      prev.map((each) => {
                        return {
                          ...each,
                          selected: false,
                        };
                      })
                    );
                  }}
                />
              ))}
          </div>
          <div className={cx("sryr-column-wrap")}>
            {surveyList.map((survey, index) => (
              <SurveyColumn
                key={survey.title}
                title={survey.title}
                content={survey.content}
                selected={survey.selected}
                onOpenColumn={() => {
                  setSurveyList((prev) =>
                    prev.map((each) => {
                      if (each.title === surveyList[index].title) {
                        return {
                          ...each,
                          selected: !each.selected,
                        };
                      }
                      return {
                        ...each,
                        selected: false,
                      };
                    })
                  );
                }}
              />
            ))}
          </div>
        </div>
      </div>
      {/* survey result */}
    </>
  );
};

const Solution = () => {
  return (
    <div className={cx("solution")}>
      <div className={cx("solution-item")}>
        <div className={cx("solution-icon")}>
          <FontAwesomeIcon
            icon={faGlobe}
            size="2x"
            className="font-awesome-icon"
          />
        </div>
        <div className={cx("solution-name")}>市場</div>
      </div>
      <div className={cx("solution-item")}>
        <div className={cx("solution-icon")}>
          <FontAwesomeIcon
            icon={faGlobe}
            size="2x"
            className="font-awesome-icon"
          />
        </div>
        <div className={cx("solution-name")}>產品</div>
      </div>
    </div>
  );
};

const Banner = () => {
  return (
    <div className={cx("banner-column")}>
      <div className={cx("banner-title")}>市場</div>
      <div className={cx("banner-button-panel")}>
        <div className={cx("banner-button")}>修改內容</div>
        <div className={cx("banner-button")}>前往下一章</div>
      </div>
    </div>
  );
};

const SurveyLargeColumn = ({ title, content, onCloseColumn }) => {
  return (
    <div
      className={cx("large-sryr-column")}
      onClick={onCloseColumn.bind(undefined)}
    >
      <div className={cx("large-sryr-title")}>{title}</div>
      <div className={cx("large-sryr-content")}>{content}</div>
    </div>
  );
};

const SurveyColumn = ({ title, content, onOpenColumn, selected }) => {
  return (
    <div
      className={cx("sryr-column", selected ? "selected" : "")}
      onClick={onOpenColumn.bind(undefined)}
    >
      <div className={cx("sryr-title")}>{title}</div>
      <div className={cx("sryr-content")}>{content}</div>
    </div>
  );
};

export default MarketSurveyResultArea;
