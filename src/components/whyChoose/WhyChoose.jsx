import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './whyChoose.scss';
import fast from '../../assets/images/fast.png';
import gluten from '../../assets/images/gluten.png';
import healthy from '../../assets/images/healthy.png';
import lactose from '../../assets/images/lactose.png';
import organic from '../../assets/images/organic.png';
import custom from '../../assets/images/custom.png';

const WhyChoose = () => {

  const data = [
  {
    image: fast,
    title: 'Fast Delivery'
  },
  {
    image: gluten,
    title: 'Gluten Delivery'
  },
  {
    image: healthy,
    title: 'Healthy Delivery'
  },
  {
    image: lactose,
    title: 'Lactose Delivery'
  },
  {
    image: organic,
    title: 'Organic Delivery'
  },
  {
    image: custom,
    title: 'Custom Delivery'
  },
  ]

  return (
    <div className="whyChoose">
      <h1 className='whyChooseTitle'>
      <span>WHY TO CHOOSE US?</span>
      </h1>
      <div className='whyChooseAll'>
        <div className='whyOptions'>
          {data.map((item)=>{
            return <div className='whyOption'>
              <img src={item.image} alt="Image" />
              {item.title}
            </div>
          })}
        </div>
        <div className='whyImage'></div>
      </div>
    </div>
  );
};

export default WhyChoose;