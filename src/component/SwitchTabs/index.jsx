import React from "react";
import classNames from "classnames/bind";
import styles from "./index.module.css";
import Tabs from "../Tabs";

const cx = classNames.bind(styles);
const SwitchTabs = (props) => {
  const tabs_list = [
    { title: "Username", selected: false },
    { title: "Settings", selected: false },
    { title: "Susu測驗", selected: false },
    { title: "團隊組成", selected: false },
    { title: "行事曆", selected: false },
    { title: "點子珍藏", selected: false },
    { title: "好友列表", selected: false },
    { title: "資訊欄", selected: false },
  ];
  const [selectedTab, setSelectedTab] = React.useState(tabs_list);
  return (
    <div className={cx("switch-tabs-wrap")}>
      {selectedTab.map((item, index) => (
        <Tabs
          key={item.title}
          title={item.title}
          selected={item.selected}
          onSelectTabs={() => {
            setSelectedTab((prev) =>
              prev.map((val, i) => {
                if (index === i) {
                  return { ...val, selected: true };
                }
                return { ...val, selected: false };
              })
            );
          }}
        />
      ))}
    </div>
  );
};

export default SwitchTabs;
