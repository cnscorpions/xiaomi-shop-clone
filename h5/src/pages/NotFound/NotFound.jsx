import React from "react";
import { useHistory } from "react-router-dom";
import notFoundIcon from "assets/404/404.jpg";

import * as styles from "./notFound.module.scss";

export default function NotFound() {
  const history = useHistory();

  const goBack = () => {
    history.push("/");
  };

  return (
    <div className={styles["container"]}>
      <img className={styles["icon"]} src={notFoundIcon} alt="404" />
      <p className={styles["sorry"]}>抱歉，页面找不到了...</p>
      <p className={styles["goto"]}>
        <span onClick={goBack}>商城首页 mi.com</span>
      </p>
    </div>
  );
}
