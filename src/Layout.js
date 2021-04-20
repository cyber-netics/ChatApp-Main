import React from "react";

const Layout = (props) => {
  return (
    <div style={{ border: "1px solid black" }}>
      <>{React.cloneElement(props.children, { darkmode: true })}</>
    </div>
  );
};

export default Layout;
