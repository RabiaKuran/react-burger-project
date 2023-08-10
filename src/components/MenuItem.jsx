import React from "react";

const MenuItem = ({ image, name, contect, price }) => {
  return (
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${image})` }}></div>
      <h1 style={{ marginBottom: "10px" }}>{name}</h1>
      <h6 style={{ marginTop: "0px" }}>{contect}</h6>
      <p>
        <i style={{ color: "red" }}>{price} TL</i>
      </p>
    </div>
  );
};

export default MenuItem;
