import React from "react";
import Navbar from "../navbar/Navbar";

const Layout = ({ children }) => {
  return (
    <div style={{ position: "relative" }}>
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
