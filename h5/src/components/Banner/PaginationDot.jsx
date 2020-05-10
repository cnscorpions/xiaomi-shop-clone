import React from "react";

const styles = {
  root: {
    height: 18,
    width: 18,
    cursor: "pointer",
    border: 0,
    background: "none",
    padding: 0
  },
  dot: {
    backgroundColor: "#ddd",
    height: ".8rem",
    width: ".8rem",
    borderRadius: ".4rem",
    margin: "0 .5rem"
  },
  active: {
    backgroundColor: "#fff"
  }
};

const PaginationDot = props => {
  const { active, onClick, index } = props;

  const handleClick = index => {
    onClick(index);
  };

  let styleDot;

  if (active) {
    styleDot = Object.assign({}, styles.dot, styles.active);
  } else {
    styleDot = styles.dot;
  }

  return (
    <button
      type="button"
      style={styles.root}
      onClick={() => handleClick(index)}
    >
      <div style={styleDot} />
    </button>
  );
};

export default PaginationDot;
