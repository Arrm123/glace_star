import React, { useEffect, useState } from 'react';
import './fillings.scss';
import RadioButtonsRow from '../radioButtonsRow/RadioButtonsRow';
import ManyButtonsRow from '../manyButtonsRow/ManyButtonsRow';
import { collectCookies, collectOreshki, collected, selectCollected, selectCollectedCookies, selectCollectedOreshki } from '../../features/sweet/sweetSlice';
import { useDispatch, useSelector } from 'react-redux';


const Fillings = ({options}) => {

  const type=['White', 'Chocolate', 'Mix'];
  const [selected,onSelect] = useState({});
  const dispatch = useDispatch();

  const cookies = useSelector(selectCollectedCookies)
  const oreshki = useSelector(selectCollectedOreshki)

  useEffect(()=>{
    if(options && options[0] === "Star"){
      if(Object.keys(selected).length){
        console.log(cookies);
        dispatch(collectCookies(selected));
      }
    }else{
      if(Object.keys(selected).length){
        console.log(oreshki)
        dispatch(collectOreshki(selected));
      }
    }
  },[selected])

  
return(
  <>
    <div className='bodyType'>
      <span className='text'>
        Body Type
      </span>
      {/* <RadioButtonsRow type={type} onSelect={onSelect} /> */}
    </div>
    <div className='addFilling'>
      <span>Add Filling 500AMD</span>
      <div className='Nutella'>
        <span>
        {
          options && options.map((option,i)=>{
            return <ManyButtonsRow onSelect={onSelect} title={option} key={i}/>
          })
        }
        </span>
      </div>
    </div>
  </>
    )
}

export default Fillings;