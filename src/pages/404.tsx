import React from "react";
import { navigate } from "gatsby";

const HTTP404: React.FC = (): null => {
  navigate(`/`, { replace: true });
  return null;
};

export default HTTP404;
