import React from "react";
import { useHistory } from "react-router-dom";
import * as styles from "./header.module.scss";

import miIconPath from "assets/home/mi.png";
import userIconPath from "assets/tabbar/icon-user.png";
import searchIconPath from "assets/home/search.png";

export default function Header() {
  const history = useHistory();

  const goToUser = () => {
    history.push("/user");
  };

  const goToSearchPage = () => {
    history.push("/search");
  };

  return (
    <div className={styles["search-container"]}>
      <div className={styles["search-container-icon"]}>
        <img src={miIconPath} alt="小米" />
      </div>
      <div
        className={styles["search-container-input"]}
        onClick={goToSearchPage}
      >
        <img src={searchIconPath} />
        搜索商品名称
      </div>
      <div className={styles["search-container-user"]}>
        <img src={userIconPath} alt="用户" onClick={goToUser} />
      </div>
    </div>
  );
}
