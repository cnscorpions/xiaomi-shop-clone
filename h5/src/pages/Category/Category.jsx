import React from "react";
import { useHistory } from "react-router-dom";

import Header from "components/Header/Header";
import LeftPanel from "./LeftPanel";

export default function Category() {
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  const goSearch = () => {
    history.push("/search");
  };

  return (
    <>
      <Header title={"分类"} goBack={goBack} goSearch={goSearch} />
      <div>
        <LeftPanel />
      </div>
    </>
  );
}
