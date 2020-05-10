import React from "react";
import Banner from "components/Banner/Banner";
import Cate from "components/Cate/Cate";

import cate01 from "assets/home/cate/小米秒杀.png";
import cate02 from "assets/home/cate/小米众筹.png";
import cate03 from "assets/home/cate/K30-Pro.png";
import cate04 from "assets/home/cate/以旧换新.png";
import cate05 from "assets/home/cate/超值特卖.png";
import cate06 from "assets/home/cate/智能.png";
import cate07 from "assets/home/cate/笔记本热卖.png";
import cate08 from "assets/home/cate/电视热卖.png";
import cate09 from "assets/home/cate/洗衣机热卖.png";
import cate10 from "assets/home/cate/米粉卡.png";

const cates = [
  {
    text: "小米秒杀",
    key: "seckill",
    icon: cate01
  },
  {
    text: "小米众筹",
    key: "crowd",
    icon: cate02
  },
  {
    text: "K30-Pro",
    key: "miproduct",
    icon: cate03
  },
  {
    text: "以旧换新",
    key: "recycling",
    icon: cate04
  },
  {
    text: "超值特卖",
    key: "bargain",
    icon: cate05
  },
  {
    text: "智能",
    key: "smart",
    icon: cate06
  },
  {
    text: "笔记本热卖",
    key: "laptop",
    icon: cate07
  },
  {
    text: "电视热卖",
    key: "tv",
    icon: cate08
  },
  {
    text: "洗衣机热卖",
    key: "laundry",
    icon: cate09
  },
  {
    text: "米粉卡",
    key: "sim",
    icon: cate10
  }
];

export default function Recommend() {
  return (
    <>
      <Banner />
      <Cate items={cates} />
    </>
  );
}
