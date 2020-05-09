import React, { useState } from "react";
import { Link } from "react-router-dom";

import * as styles from "./tabbar.module.scss";

import homeIconPath from "assets/tabbar/icon-home.png";
import homeActiveIconPath from "assets/tabbar/icon-home-selected.png";
import categoryIconPath from "assets/tabbar/icon-category.png";
import categoryActiveIconPath from "assets/tabbar/icon-category-selected.png";
import starIconPath from "assets/tabbar/icon-star.png";
import starActiveIconPath from "assets/tabbar/icon-star-selected.png";
import cartIconPath from "assets/tabbar/icon-cart.png";
import cartActiveIconPath from "assets/tabbar/icon-cart-selected.png";
import userIconPath from "assets/tabbar/icon-user.png";
import userActiveIconPath from "assets/tabbar/icon-user-selected.png";

const tabs = [
  {
    text: "首页",
    icon: homeIconPath,
    iconActive: homeActiveIconPath,
    url: "/"
  },
  {
    text: "分类",
    icon: categoryIconPath,
    iconActive: categoryActiveIconPath,
    url: "/category"
  },
  {
    text: "星球",
    icon: starIconPath,
    iconActive: starActiveIconPath,
    url: "/star"
  },
  {
    text: "购物车",
    icon: cartIconPath,
    iconActive: cartActiveIconPath,
    url: "/cart"
  },
  {
    text: "我的",
    icon: userIconPath,
    iconActive: userActiveIconPath,
    url: "/user"
  }
];

const Tabbar = props => {
  const [selectedTab, setSelectedTab] = useState("/");

  return (
    <>
      <ul className={styles["tabbar-container"]}>
        {tabs.map((tab, index) => (
          <Link className={styles["icon-box"]} key={index} to={tab.url}>
            <img
              className={styles["icon"]}
              src={tab.url === selectedTab ? tab.iconActive : tab.icon}
              alt={tab.text}
            />
            <span
              className={
                tab.url === selectedTab ? styles["selected"] : styles["text"]
              }
            >
              {tab.text}
            </span>
          </Link>
        ))}
      </ul>
    </>
  );
};

export default Tabbar;
