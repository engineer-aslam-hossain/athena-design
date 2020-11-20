import React from 'react';
import bannerImg from '../../images/banner.png';
import './HeaderMain.css';
const HeaderMain = () => {
  return (
    <section className='header-main'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6 d-flex flex-column justify-content-center align-items-start leftBanner'>
            <h1>Florence agency</h1>
            <p>
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book
            </p>
            <button className='contactBtn'>See Pricing</button>
          </div>
          <div className='col-md-6'>
            <img src={bannerImg} alt='' className='img-fluid' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeaderMain;
