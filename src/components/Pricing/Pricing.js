import React from 'react';
import fakePriceList from '../../fakeData/fakePriceList';
import './Pricing.css';
const Pricing = () => {
  return (
    <section className='pricing'>
      <div className='container'>
        <h3 className='text-center my-5'>Choose Your Dedicated Team</h3>
        <div className='row'>
          {fakePriceList.map(price => (
            <div
              className='col-md-4 singlePrice d-flex flex-column align-items-center py-5'
              key={price.id}
              style={{ flex: '27%' }}>
              <h1 className='text-center'>{price.amount}</h1>
              <p className='text-center'>{price.user}</p>
              {price.details.map((singleDetails, index) => (
                <p className='text-center my-3' key={index}>
                  {singleDetails}
                </p>
              ))}
              <button className='contactBtn'>Order Now</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
