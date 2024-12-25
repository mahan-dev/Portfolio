import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <section className="layout_styles">
      <Header />
      {children}
      <Footer />
    </section>
  );
};

export default Layout;
