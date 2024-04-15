import React from 'react'
import Header from '../../components/App/Header'
import Cta from '../../components/App/Cta';
import Embrace from '../../components/App/Embrace';
import Footer from '../../components/App/Footer';
import Faqs from '../../components/App/Faqs';

const FAQpage = () => {
  return (
    <div>
      <Header active={5} />
      <Faqs />
      <Cta />
      <Embrace />
      <Footer />
    </div>
  );
}

export default FAQpage