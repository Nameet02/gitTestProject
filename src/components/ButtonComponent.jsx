import React from "react";

let name = "next"

const ButtonComponent = () => {
    let buttonName = "ok"
  function my() {
    return "my is running";
  }
  return <button className="btn">{name}</button>;
};

export default ButtonComponent;
