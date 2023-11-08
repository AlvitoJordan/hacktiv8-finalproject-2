import React from "react";

const Text = (props) => {
  const { className, text, maxLength, type } = props;
  switch (type) {
    case "card-title":
      return (
        <div className="font-semibold text-lg text-darkgray line-clamp-1">
          {text}
        </div>
      );
    case "card-desc":
      return (
        <div className="font-medium text-grayCS text-sm line-clamp-2">
          {text}
        </div>
      );
    case "card-price":
      return (
        <div className="font-semibold text-md lg:text-lg text-darkgray mb-3">
          {text}
        </div>
      );
    case "card-category":
      return (
        <div className="font-normal bg-secondary text-xs lg:text-xs text-white py-1 px-2 mb-2 inline-block rounded-md">
          {text}
        </div>
      );
    case "card-rating":
      return <div className="text-darkgray font-medium text-sm">{text}</div>;
    case "dolar":
      const shortenedDolar =
        text.length > maxLength ? text.slice(0, maxLength) + "" : text;

      return <div className={className}>{shortenedDolar}</div>;
    default:
      const shortenedText =
        text.length > maxLength ? text.slice(0, maxLength) + "..." : text;

      return <div className={className}>{shortenedText}</div>;
  }
};

export default Text;
