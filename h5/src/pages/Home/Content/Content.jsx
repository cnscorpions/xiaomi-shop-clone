import React from "react";
import { useSelector } from "react-redux";
import { ContentConfig } from "./content.config";

export default function Content() {
  const selector = useSelector((state) => state.home.nav);
  const Content = ContentConfig[selector];

  return (
    <div>
      <Content />
    </div>
  );
}
