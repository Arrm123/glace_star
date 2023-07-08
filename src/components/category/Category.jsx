import React, { useState } from 'react';
import './category.scss';
import Topings from '../topings/Topings';
import Fillings from '../fillings/Fillings';
import { Link } from 'react-router-dom';
import Back from '../back/Back';
import { useDispatch, useSelector } from 'react-redux';
import { collected, selectCollected } from '../../features/sweet/sweetSlice';

const Category = ({data}) => {
  const [sizeState, setSizeState] = useState(0);
  const sizes = ['Small','Medium','Large'];
  const {image,title,about,type,options} = data;

  const dispatch = useDispatch();
  const collect = useSelector(selectCollected)
  
  const add = () =>{
    let parseData = [];
    parseData = JSON.parse(localStorage.getItem('data'));
    if(parseData){
      parseData.push(data)
      localStorage.setItem('data',JSON.stringify(parseData));
    }else{
      localStorage.setItem('data',JSON.stringify(data));
    }
    dispatch(collected({'size':sizeState}));
    console.log(collect,'collect');
  }


  return (
    <div className='category'>
      <div className='categoryHeader' style={{backgroundImage: `url(${image})`}}>
        <Back link={'/glace_star'}/>
      </div>
      <div className='healthyBox'>
        <span className='healthyTitle'>
          {title}
        </span>
        <div className='sizeBox'>
          <span className='title'>
            Pack size
          </span>
          <div className='allSize'>
            {sizes.map((size,i)=>{
              return (
                <div className={`${size.toLowerCase()} ${i===sizeState ? 'active' : ''}`} onClick={() => setSizeState(i)} key={i}>
                  {size}
                </div>
              )
            })}
          </div>
          <div className='about'>
            <span className='title'>
              About
            </span>
            <span className='title aboutText'>
              {about}
            </span>
          </div>
          {type === 'toppings' ? <Topings options={options}/> : <Fillings options={options}/>}
        <div className='addToCart' onClick={()=>add()}>
          <Link to='order'>
            <span>
              Add to Cart
            </span>
          </Link>
        </div>
        </div>
     </div>
    </div>
  );
};

export default Category;