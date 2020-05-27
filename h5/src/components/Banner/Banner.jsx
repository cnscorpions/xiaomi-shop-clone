import React, { useState } from "react";
import SwipeableViews from "react-swipeable-views";
// import { autoPlay } from "react-swipeable-views-utils";
import Pagination from "./Pagination";

import banner01 from "assets/home/banner01.jpg";
import banner02 from "assets/home/banner02.jpg";
import banner03 from "assets/home/banner03.jpg";

// autoplay banner
// const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const styles = {
  container: {
    position: "relative",
  },
  slide: {
    minHeight: "18.8rem",
    color: "#fff",
    backgroundImage: 'url("")',
    backgroundSize: "contain",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
  },
  slide1: {
    backgroundImage: `url(${banner01})`,
  },
  slide2: {
    backgroundImage: `url(${banner02})`,
  },
  slide3: {
    backgroundImage: `url(${banner03})`,
  },
};

export default function Banner() {
  const [index, setIndex] = useState(0);

  const handleChangeIndex = (index) => {
    setIndex(index);
  };

  return (
    <div style={styles["container"]}>
      <SwipeableViews index={index} onChangeIndex={handleChangeIndex}>
        <div style={Object.assign({}, styles.slide, styles.slide1)} />
        <div style={Object.assign({}, styles.slide, styles.slide2)} />
        <div style={Object.assign({}, styles.slide, styles.slide3)} />
      </SwipeableViews>
      <Pagination dots={3} index={index} onChangeIndex={handleChangeIndex} />
    </div>
  );
}
