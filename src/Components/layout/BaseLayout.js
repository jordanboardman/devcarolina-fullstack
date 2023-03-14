import React from "react";
import Navbar from "../NavBar";

const BaseLayout = (props) => {
  return (
    <>
      <Navbar />
      {props.children}
    </>
  );
};

export default BaseLayout;
