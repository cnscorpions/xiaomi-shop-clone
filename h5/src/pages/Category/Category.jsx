import React from "react";
import { useHistory } from "react-router-dom";

import Header from "components/Header/Header";
import LeftPanel from "./LeftPanel/LeftPanel";
import RightPanel from "./RightPanel/RightPanel";

export default function Category() {
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  const goSearch = () => {
    history.push("/search");
  };

  // const handleScroll = anchor => {
  //   // 获取元素
  //   const titleEl = document.querySelector(`span[title=${anchor}]`);
  //   // 滚动到特定位置
  // };

  return (
    <>
      <Header title={"分类"} goBack={goBack} goSearch={goSearch} />
      <div style={{ marginTop: "5rem" }}>
        <LeftPanel goScroll={null} />
        <RightPanel />
      </div>
    </>
  );
}
