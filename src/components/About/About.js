import React from 'react';
import fakeService from '../../fakeData/fakeService';
import './About.css';
const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <h3 className='text-center'>What we do</h3>
        <p className='text-center headingP'>
          Our main focus is to make the User Experience very simple and easy.
          Simplicity is our Strength.
        </p>
        <div className='row'>
          {fakeService.map(service => (
            <div
              className='col-md-3 d-flex flex-column align-items-center singleService'
              style={{ flex: '23.5%', padding: '2rem 3rem' }}
              key={service.id}>
              <img src={service.img} alt='' className='img-fluid serviceImg' />
              <h5 className='text-center'>{service.title} </h5>
              <p>{service.details} </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
