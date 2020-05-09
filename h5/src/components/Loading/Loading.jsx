import React from "react";
import FadeLoader from "react-spinners/FadeLoader";

import * as styles from "./loading.module.scss";

export default function Loading(props) {
  if (props.error) {
    return (
      <div>
        Error! <button onClick={props.retry}>Retry</button>
      </div>
    );
  } else if (props.pastDelay) {
    return (
      <div className={styles["container"]}>
        <FadeLoader loading={true} color="#9b9b9b" />
      </div>
    );
  } else {
    return null;
  }
}
