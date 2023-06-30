import React, { useEffect, useState } from 'react';
import Category from '../category/Category';
import './cookies.scss';
import { getSweet, selectCookies } from '../../features/sweet/sweetSlice';
import { useDispatch, useSelector } from 'react-redux';


const Cookies = () => {
  const dispatch = useDispatch();
  const cookies = useSelector(selectCookies);

  useEffect(()=>{
    dispatch(getSweet());
  },[]);

  return (
    <div className="sweetStuff">
      <Category data={cookies}/>
    </div>
    );
};

export default Cookies;