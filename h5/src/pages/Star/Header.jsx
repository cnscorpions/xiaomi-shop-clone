import React from "react";
import { useHistory } from "react-router-dom";

import bellIcon from "assets/star/message-bell.png";
import userIcon from "assets/star/user.png";

const styles = {
  wrapper: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 1.25rem",
    height: "4.3rem"
  },
  item: {
    display: "block",
    padding: "0 1rem",
    height: "4.3rem",
    lineHeight: "4.3rem",
    fontSize: "1.7rem",
    fontWeight: 700
  },
  iconBell: {
    width: "4.1rem",
    height: "auto"
  },
  iconUser: {
    width: "2.7rem",
    height: "2.7rem"
  }
};

export default function Header() {
  const history = useHistory();

  const goToLogin = () => {
    history.push("/login");
  };

  return (
    <div style={styles["wrapper"]}>
      <span style={styles["item"]}>推荐</span>
      <span style={styles["item"]}>小米智能生活</span>
      <span style={styles["item"]}>5G讨论组</span>
      <img style={styles["iconBell"]} src={bellIcon} />
      <img style={styles["iconUser"]} src={userIcon} onClick={goToLogin} />
    </div>
  );
}
