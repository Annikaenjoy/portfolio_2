import React from "react";

// Components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import About from "../components/About";
import ContactMe from "../components/Contact";
import Header from "../components/Header";
import Portfolio from "../components/Portfolio";

const Frontpage = (props) => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Portfolio />
      <ContactMe />
      <Footer />
    </>
  );
};

export default Frontpage;
