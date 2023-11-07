import React from "react";

const Text = (props) => {
  const { className, text, maxLength, type } = props;
  switch (type) {
    case "dolar":
      const shortenedDolar = text.length > maxLength ? text.slice(0, maxLength) + "" : text;

      return <div className={className}>{shortenedDolar}</div>;
    default:
      const shortenedText = text.length > maxLength ? text.slice(0, maxLength) + "..." : text;

      return <div className={className}>{shortenedText}</div>;
  }
};

export default Text;
