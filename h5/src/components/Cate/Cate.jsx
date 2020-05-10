import React from "react";

const styles = {
  wrapper: {
    display: "flex",
    flexWrap: "wrap"
  },
  item: {
    flex: "1",
    width: "20%"
  }
};

export default function Cate(props) {
  const { items } = props;

  return (
    <div style={styles["wrapper"]}>
      {items.map((item, index) => (
        <img style={styles["item"]} key={index} src={item.icon} />
      ))}
    </div>
  );
}
