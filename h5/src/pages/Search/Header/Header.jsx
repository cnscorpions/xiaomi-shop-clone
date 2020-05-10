import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as styles from "./header.module.scss";

import * as actionCreators from "store/actionCreators/index";

import arrowLeftIcon from "assets/search/arrow-left.png";
import searchIconPath from "assets/home/search.png";

export default function Header() {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  const history = useHistory();

  const goBack = () => {
    history.push("/");
  };

  const handleInputChange = event => {
    const { value } = event.currentTarget;
    setInputValue(value);
  };

  const handleKeyEnter = event => {
    // console.log(event);
  };

  const goToList = () => {
    history.push(`/list?keyword=${encodeURI(inputValue)}`);
    addSearchHistory(inputValue);
  };

  const addSearchHistory = history => {
    const action = actionCreators.addSearchHistory(history);
    dispatch(action);
  };

  return (
    <div className={styles["search-container"]}>
      <div className={styles["search-container-icon"]} onClick={goBack}>
        <img src={arrowLeftIcon} alt="返回上一页" />
      </div>
      <input
        className={styles["search-container-input"]}
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyEnter}
        placeholder="搜索商品名称"
      />
      <div className={styles["search-container-user"]} onClick={goToList}>
        <img src={searchIconPath} alt="搜索" />
      </div>
    </div>
  );
}
