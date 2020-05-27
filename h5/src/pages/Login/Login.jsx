import React, { useState } from "react";

import * as styles from "./login.module.scss";
import miIcon from "assets/login/mi.png";
import eyeIcon from "assets/login/eye.svg";
import eyeHideIcon from "assets/login/eye-hide.svg";

export default function Login(props) {
  const [isPasswordHidden, setHide] = useState();
  const [account, setAccount] = useState("");
  const [pwd, setPwd] = useState("");

  // 切换显示
  const shiftPwdVisibility = () => {
    // 切换状态
    let reverse = !isPasswordHidden;
    setHide(reverse);
    const inputEl = document.querySelector("input#password");
    // 通过切换type值，实现隐藏pwd
    if (isPasswordHidden) {
      inputEl.setAttribute("type", "password");
    } else {
      inputEl.setAttribute("type", "text");
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    console.log(account, pwd);
  };

  return (
    <div className={styles["wrapper"]}>
      <div className={styles["header-container"]}>
        <img src={miIcon} alt="小米" />
        <h4>小米帐号登录</h4>
      </div>
      <div>
        <form className={styles["login-form"]}>
          <input
            id="account"
            value={account}
            onChange={(e) => setAccount(e.currentTarget.value)}
            placeholder="邮箱/手机/小米ID"
          />
          <input
            id="password"
            value={pwd}
            onChange={(e) => setPwd(e.currentTarget.value)}
            placeholder="密码"
          />
          <button className={styles["login-form-btn"]} onClick={handleClick}>
            登录
          </button>
          <img
            className={styles["icon-eye"]}
            src={isPasswordHidden ? eyeIcon : eyeHideIcon}
            alt=""
            onClick={shiftPwdVisibility}
          />
        </form>
      </div>
    </div>
  );
}
