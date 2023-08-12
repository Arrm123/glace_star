import React from 'react';
import Options from '../options/Options';
import './topings.scss';


const Topings = ({title,options}) => {
   
return(
    <>
        <div className='toppings'>
            <span className='title'>
            Add Toppings/Extras(500 AMD)
            </span>
            </div>
            {options.map((option,i)=>{
                return(
                    <div className='pumpkinSeeds' key={i * Math.random() * 100}>
                    <span className='pumpkinSeedsTitle'> 
                        {option}
                    </span>
                    <Options title={title} option={option}/>
                    </div>
                )
            })}
    </>
)
}
export default Topings