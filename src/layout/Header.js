import React from "react";

const Header = () => {
  const headerStyle = {
    backgroundColor: "#4a8dac",
    color: "#fff",
    padding: "10px 15px",
  };
  return (
    <div style={headerStyle}>
      <h1 style={{ fontSize: "25px", lineHeight: "1.447em", margin: "0px" }}>
        RimiWeb Tareas
      </h1>
    </div>
  );
};

export default Header;
