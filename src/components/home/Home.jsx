import React from 'react'
import OrderNow from '../orderNow/OrderNow';
import AboutUs from '../aboutUs/AboutUs';
import './home.css';
import WhyChoose from '../whyChoose/WhyChoose';


const Home = ()=>{
    return(
        <div className='home'>
            <OrderNow />
            <AboutUs />
            <WhyChoose />
        </div>
    )
}
export default Home;

