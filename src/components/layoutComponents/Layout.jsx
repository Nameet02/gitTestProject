import React, { Children } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

const Layout = ({children}) => {
  return (
    <>
      <NavBar />
      <main style={{minHeight:"100vh"}}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
