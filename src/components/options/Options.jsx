import React from 'react';
import './options.scss';
import plusSvg from '../../assets/images/plus.svg';
import minusSvg from '../../assets/images/minus.svg';
import { useDispatch, useSelector } from 'react-redux';
import { collected, collectDried, selectCollected, selectCollectedDried } from '../../features/sweet/sweetSlice';

const Options = ({option,title}) => {

    const collect = useSelector(selectCollected); 
    const collectDry = useSelector(selectCollectedDried);

    const dispatch = useDispatch();

    const plus = () => {
        if(title==="Dried Fruits"){
            dispatch(collectDried({option,do:'add'}))
        }else{
            dispatch(collected({option,do:'add'}))
        }
    }

    const minus = () => {
        if(title==="Dried Fruits"){
            dispatch(collectDried({option,do:'sub'}))
        }else{
            dispatch(collected({option,do:'sub'}))
        }
    }

    return(
        <div className='pumkinSeedsExtra'>
            <div className='minus'  onClick={minus}><img src={minusSvg} alt='minus'/></div>
            <input type='number' className='count' value={title==="Dried Fruits" ? collectDry[option] : collect[option]} onChange={()=>{}} />
            <div className='plus'  onClick={plus}><img src={plusSvg} alt='plus'/></div>
        </div>
    )
}

export default Options;