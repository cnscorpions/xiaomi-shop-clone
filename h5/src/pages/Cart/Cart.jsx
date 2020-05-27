import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "components/Header/Header";

import * as styles from "./cart.module.scss";
import cartIcon from "assets/cart/cart.png";

const CallForLogin = (props) => {
  const { goLogin } = props;

  return (
    <div className={styles["call-for-login"]} onClick={goLogin}>
      <span className={styles["call-for-login-left"]}>登录后享受更多优惠</span>
      <span className={styles["call-for-login-right"]}>去登录</span>
    </div>
  );
};

const EmptyCart = (props) => {
  const { goHome } = props;

  return (
    <div className={styles["empty-cart-container"]}>
      <img
        className={styles["empty-cart-container-icon"]}
        alt="icon"
        src={cartIcon}
      />
      <span className={styles["empty-cart-container-text"]}>
        购物车还是空的
      </span>
      <span className={styles["empty-cart-container-btn"]} onClick={goHome}>
        去逛逛
      </span>
    </div>
  );
};

export default function Cart() {
  const history = useHistory();
  const isAuthed = useSelector((state) => state.auth.isAuthed);
  const goods = useSelector((state) => state.cart.goods);

  const goBack = () => {
    history.goBack();
  };

  const goSearch = () => {
    history.push("/search");
  };

  const goLogin = () => {
    history.push("/login");
  };

  const goHome = () => {
    history.push("/");
  };

  return (
    <div className={styles["wrapper"]}>
      <Header title="购物车" goBack={goBack} goSearch={goSearch} />
      {isAuthed ? null : <CallForLogin goLogin={goLogin} />}
      {goods.length > 0 ? null : <EmptyCart goHome={goHome} />}
    </div>
  );
}
