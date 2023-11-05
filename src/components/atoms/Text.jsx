import React from "react";

const Text = (props) => {
  const { className, text, maxLength } = props;
  const shortenedText = text.length > maxLength ? text.slice(0, maxLength) + "..." : text;

  return <div className={className}>{shortenedText}</div>;
};

export default Text;
