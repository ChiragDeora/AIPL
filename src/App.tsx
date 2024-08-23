import React, { Fragment } from "react";
import Navbar from "./components/navbar";
import What from "./components/what";
import Why from "./components/why";
import Contact from "./components/contact";
import AboutUs from "./components/about";

export const App = () => {
  return (
    <Fragment>
      <Navbar />
      <AboutUs />
      <What />
      <Why />
      <Contact />
    </Fragment>
  );
};

export default App;