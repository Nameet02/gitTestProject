import React from "react";
import ButtonComponent from "../components/ButtonComponent";
import Poster from "../components/Poster";

const HomePage = () => {
  return (
    <>
      <div>HomePage</div>
      <Poster  width="250px"  posterName={"poster 1"} posterSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZo-Qz9nZ6hufV9GUnserG1nsIx9S4c8h1LVq6kA80Uf_tZv0Pu75rFPJzd-Vd8ctFcpA&usqp=CAU" />
      <Poster  width="250px"  posterName={"poster 2"} posterSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCgLye7ctaLejVKPS7R4jtTLUWe5XoSoO4mA&s" />
      <ButtonComponent />
    </>
  );
};

export default HomePage;
