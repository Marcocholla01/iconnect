import React from "react";
import Header from "../../components/App/Header";
import Cta from "../../components/App/Cta";
import Embrace from "../../components/App/Embrace";
import Footer from "../../components/App/Footer";
import Plans from "../../components/App/Plans";
import Breadcramp from "../../components/App/Breadcramp";

const Packagespage = () => {
  return (
    <div>
      <Header active={4} />
      <Breadcramp />
      <Plans />
      <Cta />
      <Embrace />
      <Footer />
    </div>
  );
};

export default Packagespage;
