import React from "react";
import classNames from "classnames/bind";
import styles from "./index.module.css";
import Header from "container/Header";
import HomeContent from "../HomeContent";
import Footer from "component/Footer";

const cx = classNames.bind(styles);

const Homepage = ({ title, content }) => {
  return (
    <div className={cx("homepage-wrap")}>
      <Header></Header>
      <HomeContent></HomeContent>
      <Footer></Footer>
    </div>
  );
};

export default Homepage;
