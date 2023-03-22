import React from "react";
import NavBar from "../NavBar";

const BaseLayout = (props) => {
  return (
    <>
      <NavBar />
      {props.children}
    </>
  );
};

export default BaseLayout;
