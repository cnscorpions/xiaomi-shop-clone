import React from "react";

const styles = {
  container: {
    position: "fixed",
    top: "5rem",
    bottom: "5.2rem",
    left: 0,
    borderRight: "1px solid #efefef",
    width: "7.8rem",
    height: "10rem",
    background: "aqua",
    overflow: "hidden"
  }
};

const cates = [
  {
    key: "01",
    text: "新品"
  },
  {
    key: "02",
    text: "众筹"
  }
];

export default function LeftPanel() {
  return <div style={styles["container"]}></div>;
}
