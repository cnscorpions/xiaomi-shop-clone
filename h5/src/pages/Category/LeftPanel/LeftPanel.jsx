import React from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actionCreators from "store/actionCreators/index";
import * as styles from "./leftPanel.module.scss";

const cates = [
  {
    key: "01",
    text: "新品",
    anchor: "新品"
  },
  {
    key: "02",
    text: "众筹",
    anchor: "众筹"
  },
  {
    key: "03",
    text: "小米手机"
  },
  {
    key: "04",
    text: "Redmi"
  },
  {
    key: "05",
    text: "黑鲨"
  },
  {
    key: "06",
    text: "5G合约"
  },
  {
    key: "07",
    text: "手机配件"
  },
  {
    key: "08",
    text: "电视"
  },
  {
    key: "09",
    text: "电视"
  },
  {
    key: "10",
    text: "大家电"
  },
  {
    key: "11",
    text: "电脑办公"
  },
  {
    key: "12",
    text: "小爱智能"
  },
  {
    key: "13",
    text: "路由器"
  },
  {
    key: "14",
    text: "生活电器"
  },
  {
    key: "15",
    text: "厨房电器"
  },
  {
    key: "16",
    text: "智能穿戴"
  },
  {
    key: "17",
    text: "智能家居"
  },
  {
    key: "18",
    text: "车载出行"
  },
  {
    key: "19",
    text: "个护健康"
  },
  {
    key: "20",
    text: "数码配件"
  },
  {
    key: "21",
    text: "日用百货"
  },
  {
    key: "22",
    text: "服务"
  },
  {
    key: "23",
    text: "米粉卡"
  },
  {
    key: "24",
    text: "全部商品"
  },
  {
    key: "25",
    text: "零售店"
  }
];

export default function LeftPanel(props) {
  const selector = useSelector(state => state.category.setCate);
  const dispatch = useDispatch();

  const setCateInStore = (cate, anchor) => {
    const action = actionCreators.setCate(cate);
    dispatch(action);
    const { goScroll } = props;
    goScroll(anchor);
  };

  return (
    <div className={styles["container"]}>
      <ul className={styles["list-container"]}>
        {cates.map(cate => (
          <li
            key={cate.key}
            className={
              selector === cate.key
                ? styles["list-item"] + " " + styles["list-item_active"]
                : styles["list-item"]
            }
            anchor={cate.anchor ? cate.anchor : null}
            onClick={() => setCateInStore(cate.key, cate.anchor)}
          >
            <span className={styles["list-item-text"]}>{cate.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
