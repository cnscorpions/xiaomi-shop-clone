import React from "react";
// import { useHistory } from "react-router-dom";

import userIcon from "assets/user/avatar.png";

import * as styles from "./user.module.scss";

export default function User() {
  // const history = useHistory();

  const goLogin = () => {
    alert("modal提示同意服务条款");
    // history.push("/login");
  };

  return (
    <div className={styles["wrapper"]}>
      <div className={styles["login-box"]} onClick={goLogin}>
        <img src={userIcon} alt="用户图标" />
        <span>登录/注册</span>
      </div>
      <div className={styles["order-box"]}>
        <span>我的订单</span>
        <span>全部订单</span>
      </div>
      <ul></ul>
    </div>
  );
}
