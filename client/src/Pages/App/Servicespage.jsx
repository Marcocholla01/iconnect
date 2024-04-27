import React, { useEffect } from "react";
import Header from "../../components/App/Header";
import Cta from "../../components/App/Cta";
import Embrace from "../../components/App/Embrace";
import Footer from "../../components/App/Footer";
import Services from "../../components/App/Services";

const Servicespage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Header active={3} />
      <Services />
      <Cta />
      <Embrace />
      <Footer />
    </div>
  );
};

export default Servicespage;
