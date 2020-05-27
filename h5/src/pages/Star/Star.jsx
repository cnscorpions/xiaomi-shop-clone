import React from "react";
import Header from "./Header";

import publicIcon from "assets/star/发布.png";

const styles = {
  icon: {
    position: "fixed",
    bottom: "10rem",
    left: "50%",
    marginLeft: "-3.6rem",
    width: "7.2rem",
  },
};

export default function Star() {
  return (
    <div>
      <Header />
      <img style={styles["icon"]} alt="icon-star" src={publicIcon} />
    </div>
  );
}
