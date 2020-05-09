import React from "react";
import Tabbar from "../Tabbar/Tabbar";

export default function AppLayout({ content }) {
  return (
    <>
      {content}
      <Tabbar />
    </>
  );
}
