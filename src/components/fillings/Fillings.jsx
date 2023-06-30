import React, { useEffect, useState } from 'react';
import './fillings.scss';
import RadioButtonsRow from '../radioButtonsRow/RadioButtonsRow';
import ManyButtonsRow from '../manyButtonsRow/ManyButtonsRow';
import { collected, selectCollected } from '../../features/sweet/sweetSlice';
import { useDispatch, useSelector } from 'react-redux';


const Fillings = ({options}) => {

  const type=['White', 'Chocolate', 'Mix'];
  const [selected,onSelect] = useState('');
  const dispatch = useDispatch();

  useEffect(()=>{
    if(selected !== ''){
      dispatch(collected({selected:selected}));
    }
  },[selected])
  
return(
  <>
    <div className='bodyType'>
      <span className='text'>
        Body Type
      </span>
      <RadioButtonsRow type={type} onSelect={onSelect} />
    </div>
    <div className='addFilling'>
      <span>Add Filling 500AMD</span>
      <div className='Nutella'>
        <span>
        {
          options && options.map((option,i)=>{
            return <ManyButtonsRow title={option} k={i}/>
          })
        }
        </span>
      </div>
    </div>
  </>
    )
}

export default Fillings;