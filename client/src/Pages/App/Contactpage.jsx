import React, { useEffect } from "react";
import Header from "../../components/App/Header";
import Footer from "../../components/App/Footer";
import Contact from "../../components/App/Contact";

const Contactpage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Header active={6} />
      <Contact />
      <Footer />
    </div>
  );
};

export default Contactpage;
