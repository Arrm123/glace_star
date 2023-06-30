import React, { useEffect, useState } from 'react';
import Category from '../category/Category';
import './driedFruits.scss';
import { getSweet, selectDried } from '../../features/sweet/sweetSlice';
import { useDispatch, useSelector } from 'react-redux';

const DriedFruits = () => {
  const dispatch = useDispatch();
  const dried = useSelector(selectDried);

  useEffect(()=>{
    dispatch(getSweet());
  },[]);

  return (
    <div className="driedFruits">
      <Category data={dried}/>
    </div>
    );
};

export default DriedFruits;