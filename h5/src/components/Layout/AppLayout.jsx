import React from "react";
import DownloadApp from "../DownloadApp/DownloadApp";
import Tabbar from "../Tabbar/Tabbar";

export default function AppLayout({ content }) {
  return (
    <>
      <DownloadApp />
      {content}
      <Tabbar />
    </>
  );
}
