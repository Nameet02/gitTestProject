import React from "react";
import { Navigate } from "react-router-dom";
const Protected = ({ children }) => {
  const isLoggedIn = localStorage.getItem("token");

  return <>{isLoggedIn ? <div>{children}</div> : <Navigate to={"/login"} />}</>;
};

export default Protected;
