import React from "react";
import { Link } from "react-router-dom";

const Button = (props) => {
  const { onClick, className, type, children, TypeButton, to, icon } = props;
  switch (TypeButton) {
    case "ButtonLinkWithIcon":
      return (
        <Link to={to} className={`bg-primary text-white px-4 py-2 rounded-lg flex w-[18%]  space-x-3 justify-center items-center ${className}`}>
          {icon}
          <p>{children}</p>
        </Link>
      );
    case "ButtonLink":
      return (
        <Link to={to} className={`${className} bg-primary text-white rounded-lg flex  space-x-3 justify-center items-center `}>
          <p>{children}</p>
        </Link>
      );
    case "ButtonPrimaryWithIcon":
      return (
        <button onClick={onClick} className={`bg-primary px-4 py-3 rounded-lg flex  space-x-3 justify-center items-center ${className}`}>
          {icon}
          <p>{children}</p>
        </button>
      );
    case "ButtonPrimary":
      return (
        <button className={`bg-primary hover:bg-secondary  py-2 px-5  rounded-md shadow ${className}`} onClick={onClick}>
          {children}
        </button>
      );
    default:
      return (
        <button type={type} onClick={onClick} className={className}>
          {children}
        </button>
      );
  }
};

export default Button;
