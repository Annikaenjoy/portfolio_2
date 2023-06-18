import React from "react";

// Components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import About from "../components/About";

const Frontpage = (props) => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <Navbar />
      <About />
      <Footer />
    </>
  );
};

export default Frontpage;
