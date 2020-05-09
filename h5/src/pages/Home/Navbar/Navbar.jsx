import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actionCreator from "store/actionCreators/index";
import * as styles from "./navbar.module.scss";
import arrowUpIcon from "assets/home/arrow-down.png";
import arrowDownIcon from "assets/home/arrow-up.png";

const navItems = [
  {
    text: "推荐",
    key: "recommend"
  },
  {
    text: "手机",
    key: "cellphone"
  },
  {
    text: "智能",
    key: "smart device"
  },
  {
    text: "电视",
    key: "tv"
  },
  {
    text: "笔记本",
    key: "laptop"
  },
  {
    text: "家电",
    key: "household appliances"
  },
  {
    text: "生活周边",
    key: "others"
  }
];

export default function Navbar() {
  // 获取nav状态
  const selector = useSelector(state => state.home.nav);
  const dispatch = useDispatch();

  const [collapse, setCollapse] = useState(false);

  return (
    <div className={styles["container"]}>
      <div className={styles["nav-wrapper"]}>
        {getSlicedArray(navItems).map((item, index) => (
          <div
            key={index}
            className={styles["nav-item"]}
            onClick={() =>
              dispatch(actionCreator.selectNavActionCreator(item.key))
            }
          >
            <span
              className={
                selector === item.key
                  ? styles["nav-item-text"] + " " + styles["active"]
                  : styles["nav-item-text"]
              }
            >
              {item.text}
            </span>
          </div>
        ))}
        <div
          className={styles["nav-collapse"]}
          onClick={() => setCollapse(true)}
        >
          <img src={arrowUpIcon} alt="折叠" />
        </div>
      </div>
      <div className={collapse ? styles["nav-layer"] : styles["hide"]}>
        <div className={styles["nav-layer-title"]}>全部</div>
        <img
          className={styles["nav-layer-arrow-up"]}
          src={arrowDownIcon}
          alt="收起"
          onClick={() => setCollapse(false)}
        />
        <div className={styles["nav-layer-btn-group"]}>
          {navItems.map((nav, index) => (
            <span
              className={
                selector === nav.key
                  ? styles["nav-layer-btn-group-btn"] +
                    " " +
                    styles["nav-layer-btn-group-btn_active"]
                  : styles["nav-layer-btn-group-btn"]
              }
              key={index}
              onClick={() =>
                dispatch(actionCreator.selectNavActionCreator(nav.key))
              }
            >
              {nav.text}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

const getSlicedArray = array => {
  const newArr = array.length > 6 ? array.slice(0, 6) : array;
  return newArr;
};
