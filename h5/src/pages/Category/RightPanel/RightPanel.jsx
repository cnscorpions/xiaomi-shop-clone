import React from "react";
import * as styles from "./rightPanel.module.scss";

import banner01 from "assets/category/banner01.jpg";
import pic01 from "assets/category/小米10 青春.png";
import pic02 from "assets/category/K30 Pro 变焦版.png";
import pic03 from "assets/category/K30 Pro.png";

const SectionComponent = props => {
  const { sections } = props;

  return (
    <>
      {sections.map(section => (
        <div key={section.key}>
          {section.bannerPath ? (
            <img className={styles["banner-img"]} src={section.bannerPath} />
          ) : null}
          <div className={styles["section-title"]}>
            <span title={section.anchor}>{section.title}</span>
          </div>
          <div className={styles["product-container"]}>
            {section.items.map(item => (
              <div key={item.key} className={styles["product-box"]}>
                <img className={styles["product-box-img"]} src={item.imgUrl} />
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default function RightPanel() {
  const sections = [
    {
      bannerPath: banner01,
      key: "section01",
      title: "手机",
      anchor: "新品",
      items: [
        {
          key: "section01-item01",
          imgUrl: pic01,
          text: "小米10 青春"
        },
        {
          key: "section01-item02",
          imgUrl: pic02,
          text: "K30 Pro 变焦版"
        },
        {
          key: "section01-item03",
          imgUrl: pic03,
          text: "K30 Pro"
        },
        {
          key: "section01-item04",
          imgUrl: pic01,
          text: "小米10 青春"
        },
        {
          key: "section01-item05",
          imgUrl: pic02,
          text: "K30 Pro 变焦版"
        },
        {
          key: "section01-item06",
          imgUrl: pic03,
          text: "K30 Pro"
        },
        {
          key: "section01-item07",
          imgUrl: pic01,
          text: "小米10 青春"
        }
      ]
    },
    {
      bannerPath: null,
      key: "section02",
      title: "电脑",
      anchor: "众筹",
      items: [
        {
          key: "section02-item01",
          imgUrl: pic01,
          text: "小米10 青春"
        },
        {
          key: "section02-item02",
          imgUrl: pic02,
          text: "K30 Pro 变焦版"
        },
        {
          key: "section02-item03",
          imgUrl: pic03,
          text: "K30 Pro"
        },
        {
          key: "section02-item04",
          imgUrl: pic01,
          text: "小米10 青春"
        },
        {
          key: "section02-item05",
          imgUrl: pic02,
          text: "K30 Pro 变焦版"
        },
        {
          key: "section02-item06",
          imgUrl: pic03,
          text: "K30 Pro"
        },
        {
          key: "section02-item07",
          imgUrl: pic01,
          text: "小米10 青春"
        }
      ]
    }
  ];

  return (
    <div className={styles["wrapper"]}>
      <SectionComponent sections={sections} />
    </div>
  );
}
