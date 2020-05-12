import React from "react";
import Loadable from "react-loadable";

const Loading = () => <div>加载中...</div>;

const Recommend = Loadable({
  loader: () => import("pages/Star/Content/Recommend"),
  loading: Loading
});

const MiLife = Loadable({
  loader: () => import("pages/Star/Content/MiLife"),
  loading: Loading
});

const Network = Loadable({
  loader: () => import("pages/Star/Content/5G"),
  loading: Loading
});

export const ContentConfig = {
  Recommend,
  MiLife,
  Network
};
