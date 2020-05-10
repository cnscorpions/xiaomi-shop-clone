import React from "react";
import PaginationDot from "./PaginationDot";

const styles = {
  root: {
    position: "absolute",
    bottom: "1rem",
    right: "50%",
    marginRight: "-3rem",
    display: "flex",
    flexDirection: "row"
  }
};

const Pagination = props => {
  const handleClick = index => {
    const { onChangeIndex } = props;
    onChangeIndex(index);
  };

  const { index, dots } = props;

  const children = [];

  for (let i = 0; i < dots; i += 1) {
    children.push(
      <PaginationDot
        key={i}
        index={i}
        active={i === index}
        onClick={() => handleClick(i)}
      />
    );
  }

  return <div style={styles.root}>{children}</div>;
};

export default Pagination;
