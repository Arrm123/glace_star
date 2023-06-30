import './createOrder.scss';
import { Link } from 'react-router-dom';
import arrow from '../../assets/images/arrowBack.svg';
import Back from '../back/Back';
import { useState } from 'react';
import sweets from '../../assets/images/sweets.png';

const CreateOrder = () => {

  const [sizeState, setSizeState] = useState(0);
  const sizes = ['S','M','L'];
  let data = localStorage.getItem('data');
  let parseData = JSON.parse(data);
  
    return (
      <div className="createOrder">
        <Back />
        <div className="yourOrder">
          YOUR ORDER: {parseData['title']}
        </div>
        <div className="yourOrderBox">
          <div className="pictureBox" style={{backgroundImage:`url("${sweets}")`}}></div>
          <div className="allInOne">
            <div className='healthySweetsBox'>
              Healthy Sweets 
            </div>
            <div className='allSize allSizeV2'>
              {sizes.map((size,i)=>{
                return (
                  <div className={`${size.toLowerCase()} ${i===sizeState ? 'active' : ''}`} onClick={() => setSizeState(i)} key={i}>
                    {size}
                  </div>
                )
              })}
            </div>
            <div className="price">
                3500 AMD
            </div>
          </div>
        </div>
      </div>

      );
  };
  
  export default CreateOrder;

