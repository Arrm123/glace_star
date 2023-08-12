import React, { useState } from 'react';
import './category.scss';
import Topings from '../topings/Topings';
import Fillings from '../fillings/Fillings';
import { Link } from 'react-router-dom';
import Back from '../back/Back';
import { useDispatch, useSelector } from 'react-redux';
import { collectCookies, collectDried, collectOreshki, collected, orderList, selectCollected, selectCollectedCookies, selectCollectedDried, selectCollectedOreshki, selectOrders } from '../../features/sweet/sweetSlice';

const Category = ({data}) => {
  const [sizeState, setSizeState] = useState(0);
  const sizes = ['Small','Medium','Large'];
  const {image,title,about,type,options} = data;

  const dispatch = useDispatch();
  const collect = useSelector(selectCollected)
  const collectDry = useSelector(selectCollectedDried)
  const collectSweet = useSelector(selectCollected)
  const collectedCookies = useSelector(selectCollectedCookies)
  const collectedOreshki = useSelector(selectCollectedOreshki)

  const add = () =>{
    if(title === 'Dried Fruits'){
      dispatch(orderList({'size':sizeState,'data':collectDry,'title':data.title}));
      dispatch(collectDried({option:'empty'}));
    }else if(title === 'Sweets Stuff'){
      dispatch(orderList({'size':sizeState,'data':collectSweet,'title':data.title}));
      dispatch(collected({option:'empty'}));
    }else if(title === 'Cookies'){
      dispatch(orderList({'size':sizeState,'data':collectedCookies,'title':data.title}));
      dispatch(collectCookies({option:'empty'}));
    }else if(title === 'Oreshki With Cream'){
      dispatch(orderList({'size':sizeState,'data':collectedOreshki,'title':data.title}));
      dispatch(collectOreshki({option:'empty'}));
    }
  }
 

  console.log(data,'ova?');

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
          {type === 'toppings' ? <Topings title={title} options={options}/> : <Fillings options={options}/>}
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