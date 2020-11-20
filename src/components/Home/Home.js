import React from 'react';
import About from '../About/About';
import Achievement from '../Achivement/Achievement';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import HeaderMain from '../HeaderMain/HeaderMain';
import Pricing from '../Pricing/Pricing';
import Service from '../Service/Service';

const Home = () => {
  return (
    <div>
      <Header />
      <HeaderMain />
      <About />
      <Service />
      <Achievement />
      <Pricing />
      <Footer />
    </div>
  );
};

export default Home;
