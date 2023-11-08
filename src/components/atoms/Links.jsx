import React from "react";
import { Link } from "react-router-dom";

const Links = (props) => {
  const { to, children, className } = props;
  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
};

export default Links;
