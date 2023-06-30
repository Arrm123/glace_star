import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './orderNow.scss';

const OrderNow = () => {

  return (
    <div className="orderNow">
      <span className='orderNowTitle'>WE MAKE MORE THAN SWEETS</span>
      <p className='orderNowDesc'>We've not only mastered the skills for sweets making,<br/>
we make a really good design too.</p>
    <div className='orderNowButton'>ORDER NOW</div>
    </div>
  );
};

export default OrderNow;