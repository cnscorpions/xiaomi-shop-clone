import React from "react";
import Loadable from "react-loadable";
import Others from "pages/Home/Content/Others/Others";

const Loading = () => <div>加载中...</div>;

const Recommend = Loadable({
  loader: () => import("pages/Home/Content/Recommend/Recommend"),
  loading: Loading
});

const Cellphone = Loadable({
  loader: () => import("pages/Home/Content/Cellphone/Cellphone"),
  loading: Loading
});

const SmartDevice = Loadable({
  loader: () => import("pages/Home/Content/SmartDevice/SmartDevice"),
  loading: Loading
});

const TV = Loadable({
  loader: () => import("pages/Home/Content/TV/TV"),
  loading: Loading
});

const Laptop = Loadable({
  loader: () => import("pages/Home/Content/Laptop/Laptop"),
  loading: Loading
});

const Appliance = Loadable({
  loader: () => import("pages/Home/Content/Appliance/Appliance"),
  loading: Loading
});

export const ContentConfig = {
  recommend: Recommend,
  cellphone: Cellphone,
  smartDevice: SmartDevice,
  tv: TV,
  laptop: Laptop,
  appliance: Appliance,
  others: Others
};
