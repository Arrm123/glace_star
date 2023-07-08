import React from 'react';
import './options.scss';
import plusSvg from '../../assets/images/plus.svg';
import minusSvg from '../../assets/images/minus.svg';
import { useDispatch, useSelector } from 'react-redux';
import { collected, selectCollected } from '../../features/sweet/sweetSlice';

const Options = ({option}) => {

    const collect = useSelector(selectCollected);

    const dispatch = useDispatch();

    const plus = () => {
        dispatch(collected({option,do:'add'}))
    }

    const minus = () => {
        dispatch(collected({option,do:'sub'}))
    }

    return(
        <div className='pumkinSeedsExtra'>
            <div className='minus'  onClick={minus}><img src={minusSvg} alt='minus'/></div>
            <input type='number' className='count' value={collect[option]} />
            <div className='plus'  onClick={plus}><img src={plusSvg} alt='plus'/></div>
        </div>
    )
}

export default Options;