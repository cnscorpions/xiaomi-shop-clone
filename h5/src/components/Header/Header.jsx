import React from "react";
import * as styles from "./header.module.scss";

import arrowLeftIcon from "assets/search/arrow-left.png";
import searchIconPath from "assets/home/search.png";

export default function Header(props) {
  const { title, goBack, goSearch } = props;

  const toParentGoback = () => {
    goBack();
  };

  const toParentGoSearch = () => {
    goSearch();
  };

  return (
    <div className={styles["search-container"]}>
      <div className={styles["search-container-back"]} onClick={toParentGoback}>
        <img src={arrowLeftIcon} alt="返回上一页" />
      </div>
      <span className={styles["text"]}>{title}</span>
      <div
        className={styles["search-container-search"]}
        onClick={toParentGoSearch}
      >
        <img src={searchIconPath} alt="搜索" />
      </div>
    </div>
  );
}
