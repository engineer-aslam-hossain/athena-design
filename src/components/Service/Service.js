import React from 'react';
import serviceImg from '../../images/service.png';
import './Service.css';
const Service = () => {
  return (
    <section className='services'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6'>
            <img src={serviceImg} alt='' className='img-fluid' />
          </div>
          <div className='col-md-6 d-flex flex-column justify-content-center align-items-start serviceRight'>
            <h3>Stay Running & Project</h3>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letter
            </p>
            <button className='contactBtn'>Contact Us</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
