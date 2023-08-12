import './createOrder.scss';
import { Link } from 'react-router-dom';
import arrow from '../../assets/images/arrowBack.svg';
import Back from '../back/Back';

import { useSelector } from 'react-redux';
import { selectOrders } from '../../features/sweet/sweetSlice';
import UniOrder from '../uniOrder/UniOrder';

const CreateOrder = () => {

 
  // let data = localStorage.getItem('data');
  // let parseData = JSON.parse(data);
  const orders = useSelector(selectOrders)
  console.log(orders,'orders');

  
    return (
      <div className="createOrder">
        <Back />
        <div className="yourOrder">
          YOUR ORDER: 
          <div className='orderContent'>
            {orders.map((order,i)=>{
              return <UniOrder order={order} key={`order_${i}`} />
            })}
          </div>
          
        </div>

      </div>

      );
  };
  
  export default CreateOrder;

