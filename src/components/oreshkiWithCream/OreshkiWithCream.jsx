import React, { useEffect, useState } from 'react';
import Category from '../category/Category';
import './oreshkiWithCream.scss';
import data from '../../data';
import { getSweet, selectOreshki } from '../../features/sweet/sweetSlice';
import { useDispatch, useSelector } from 'react-redux';

const OreshkiWithCream = () => {
  const dispatch = useDispatch();
  const oreshki = useSelector(selectOreshki);

  useEffect(()=>{
    dispatch(getSweet());
  },[]);
  return (
    <div className="oreshkiWithCream">
      <Category data={oreshki}/>
    </div>
    );
};

export default OreshkiWithCream;