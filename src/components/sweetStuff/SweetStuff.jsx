import React, { useEffect, useState } from 'react';
import Category from '../category/Category';
import './sweetStuff.scss';
import { getSweet, selectSweet } from '../../features/sweet/sweetSlice';
import { useDispatch, useSelector } from 'react-redux';

const SweetStuff = () => {
  const dispatch = useDispatch();
  const sweets = useSelector(selectSweet);

  useEffect(()=>{
    dispatch(getSweet());
  },[]);

  return (
    <div className="sweetStuff">
      {sweets ? <Category data={sweets} /> : ''}
    </div>
    );
};

export default SweetStuff;