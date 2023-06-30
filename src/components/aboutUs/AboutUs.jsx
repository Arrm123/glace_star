import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './aboutUs.scss';
import platform from '../../assets/images/desk1.png';

const AboutUs = () => {

  return (
    <div className="aboutUs">
      <div className='aboutUsPicture'>
        <img src={platform} alt="platform" />
      </div>
      <div className='aboutUsText'>
        <h1 className='aboutTitle'>ABOUT US</h1>
        <span className='aboutDescription'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor reprehenderit in.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
        </span>
      </div>
    </div>
  );
};

export default AboutUs;