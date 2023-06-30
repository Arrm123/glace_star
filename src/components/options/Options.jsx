import React, { useEffect, useState } from 'react';
import './options.scss';
import plusSvg from '../../assets/images/plus.svg';
import minusSvg from '../../assets/images/minus.svg';
import { useDispatch, useSelector } from 'react-redux';
import { collected, selectCollected } from '../../features/sweet/sweetSlice';

const Options = ({option}) => {

    const collect = useSelector(selectCollected)

    const dispatch = useDispatch();

    const [count,setCount]=useState(0);

    const plus = () => {
        setCount(prev=>prev+1 > 50 ? prev=50 : prev+1);
    }

    const minus = () => {
        setCount(prev=>prev-1 < 0 ? prev=0 : prev-1);
    }

    const change = (e) => {
        setCount(+e.target.value < 0 ? 0 : (+e.target.value > 50) ? 50 : (!Number.isNaN(e.target.value)) ? +e.target.value : 0);
    }

    // useEffect(()=>{
    //     dispatch(collected(['empty']));
    // },[])

    useEffect(()=>{
        count && dispatch(collected({option,count}));
        console.log(count,option);
    },[count])

    return(
        <div className='pumkinSeedsExtra'>
            <div className='minus'  onClick={minus}><img src={minusSvg} alt='minus'/></div>
            <input type='number' className='count' value={count} onChange={change} />
            <div className='plus'  onClick={plus}><img src={plusSvg} alt='plus'/></div>
        </div>
    )
}

export default Options;