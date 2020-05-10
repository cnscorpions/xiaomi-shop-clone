import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import * as actionCreators from "store/actionCreators/index";
import DownloadAppImg from "assets/common/下载app.png";

const styles = {
  container: {
    position: "relative",
    height: "5.2rem",
    overflow: "hidden"
  },
  img: {
    display: "block",
    width: "100%",
    height: "auto"
  },
  hide: {
    display: "none"
  },
  close: {
    position: "absolute",
    left: 0,
    top: 0,
    display: "inline-block",
    width: "5.2rem",
    height: "5.2rem",
    background: "transparent"
  },
  goTo: {
    position: "absolute",
    right: 0,
    top: 0,
    display: "inline-block",
    width: "10rem",
    height: "5.2rem",
    background: "transparent"
  }
};

export default function DownloadApp() {
  const history = useHistory();
  const selector = useSelector(state => state.common.isShowDownloadAppBanner);
  const dispatch = useDispatch();

  const goToLandingPage = () => {
    history.push("/download");
  };

  const closeBanner = () => {
    const action = actionCreators.hideDownloadAppBanner();
    dispatch(action);
  };

  return (
    <div style={selector ? styles["container"] : styles["hide"]} to="/download">
      <span style={styles["close"]} onClick={closeBanner} />
      <img style={styles["img"]} src={DownloadAppImg} />
      <span style={styles["goTo"]} onClick={goToLandingPage} />
    </div>
  );
}
