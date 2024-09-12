import React from "react";

const Poster = ({posterName,width,height,posterSrc}) => {
  return (
    <div>
      <h1 >{posterName}</h1>
      <img width={width} height={height} src={posterSrc} alt="poster" />
    </div>
  );
};

export default Poster;
