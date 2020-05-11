import React from "react";
import FadeLoader from "react-spinners/FadeLoader";

const containerStyle = {
  display: "flex",
  justifyContent: "center",
  alignSelf: "center"
};

export default function Loading(props) {
  if (props.error) {
    return (
      <div>
        错误! <button onClick={props.retry}>重试</button>
      </div>
    );
  } else if (props.pastDelay) {
    return (
      <div className={containerStyle}>
        <FadeLoader loading={true} color="#9b9b9b" />
      </div>
    );
  } else {
    return null;
  }
}
