import React, { useState } from 'react';
import './uniOrder.scss';
import { useDispatch, useSelector } from 'react-redux';
import sweets from '../../assets/images/sweets.png';
import dried from '../../assets/images/DriedFruits.png';
import oreshki from '../../assets/images/OreshkiWithCream.png';
import cookies from '../../assets/images/cookies.png';

const UniOrder = ({order}) => {
    const [sizeState, setSizeState] = useState(order.size);
    const sizes = ['S','M','L'];

    const extraPrice = Object.values(order.data).reduce((aggr,val)=>{
        console.log(val, "val")
        return aggr + (val * 500);
      },0)

      const image = order.title === 'Dried Fruits' ? dried :
                    order.title === 'Sweets Stuff' ? sweets :
                    order.title === 'Oreshki With Cream' ? oreshki :
                    order.title === 'Cookies' ? cookies : '';
                    
return( 
    <div className="yourOrderBox">
        <div className="pictureBox" style={{backgroundImage:`url("${image}")`}}></div>
        <div className="allInOne">
            <div className='healthySweetsBox'>
            {order.title}
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
                {3500 + extraPrice + sizeState * 1500} AMD
            </div>
        </div>
    </div>
)
}
export default UniOrder;
 
