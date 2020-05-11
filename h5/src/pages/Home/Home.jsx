import React from "react";

import DownloadApp from "components/DownloadApp/DownloadApp";
import Header from "./Header/Header";
import Navbar from "./Navbar/Navbar";
import Content from "./Content/Content";

export default function Home() {
  return (
    <>
      <DownloadApp />
      <Header />
      <Navbar />
      <Content />
    </>
  );
}
