import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import * as actionCreators from "store/actionCreators";
import { useForm } from "react-hook-form";
import { Request } from "utils/request/index";
import { REQUEST_METHOD, CONTENT_TYPE } from "utils/request/config";
import * as styles from "./login.module.scss";
import miIcon from "assets/login/mi.png";
import eyeIcon from "assets/login/eye.svg";
import eyeHideIcon from "assets/login/eye-hide.svg";

export default function Login(props) {
  // 本地状态管理
  const [isPasswordHidden, setHide] = useState();
  const [account, setAccount] = useState("");
  const [pwd, setPwd] = useState("");

  // 全家状态管理
  let token = useSelector(state => state.auth.token);
  const dispatch = useDispatch();

  // 表单验证
  const { register, handleSubmit, errors } = useForm();

  // 路由跳转
  const history = useHistory();

  // 回到上一页
  const goBack = () => {
    history.goBack();
  };

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

  /**
   * 提交表单
   * @param {} e
   */
  const handleClick = async () => {
    let request = new Request();
    try {
      let response = await request.fetchData("/auth/verify", {
        method: REQUEST_METHOD.POST,
        contentType: CONTENT_TYPE.JSON,
        token,
        body: {
          email: account,
          password: pwd
        }
      });
      dispatch(actionCreators.login(response.token));
      goBack();
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles["wrapper"]}>
      <div className={styles["header-container"]}>
        <img src={miIcon} alt="小米" />
        <h4>小米帐号登录/注册</h4>
      </div>
      <div>
        <form
          className={styles["login-form"]}
          onSubmit={handleSubmit(handleClick)}
        >
          <input
            id="account"
            name="email"
            defaultValue={account}
            onChange={e => setAccount(e.currentTarget.value)}
            placeholder="邮箱"
            ref={register({ required: true, pattern: /\S+@\S+\.\S+/ })}
          />
          {errors.email?.type === "required" && (
            <span style={{ marginTop: "-10px", color: "red" }}>请输入邮箱</span>
          )}
          {errors.email?.type === "pattern" && (
            <span style={{ marginTop: "-10px", color: "red" }}>
              邮箱格式不正确
            </span>
          )}
          <input
            id="password"
            name="password"
            defaultValue={pwd}
            onChange={e => setPwd(e.currentTarget.value)}
            placeholder="密码"
            ref={register({
              required: true,
              pattern: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/
            })}
          />
          {errors.password?.type === "required" && (
            <span style={{ marginTop: "-10px", color: "red" }}>请输入密码</span>
          )}
          {errors.password?.type === "pattern" && (
            <span style={{ marginTop: "-10px", color: "red" }}>
              密码格式为6-16位，必须包含数字，特殊字符，大小写字母
            </span>
          )}
          <input
            type="submit"
            className={styles["login-form-btn"]}
            value="登录/注册"
          />

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
