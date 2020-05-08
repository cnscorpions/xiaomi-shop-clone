import React from "react";
import FadeLoader from "react-spinners/FadeLoader";

export default function Loading() {
  return (
    <div>
      <FadeLoader loading={true} color="#9b9b9b" />
    </div>
  );
}
