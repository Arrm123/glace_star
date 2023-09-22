import React, { useState } from 'react';
import './whyChoose.scss';
import fast from '../../assets/images/fast.png';
import gluten from '../../assets/images/gluten.png';
import healthy from '../../assets/images/healthy.png';
import lactose from '../../assets/images/lactose.png';
import organic from '../../assets/images/organic.png';
import custom from '../../assets/images/custom.png';
import customizeImage from '../../assets/images/image5.png';
import deliveryImg from '../../assets/images/Delivery.svg';
import deliverySecond from '../../assets/images/dsecond.svg';
import deliveryThird from '../../assets/images/dthird.svg';
import cocaBombs from '../../assets/images/slide.png';
import gingerCookies from '../../assets/images/SlideShow2.png';
import xmasCookies from '../../assets/images/SlideShow3.png';

const WhyChoose = () => {

  const data = [
  {
    image: fast,
    title: 'Fast Delivery'
  },
  {
    image: gluten,
    title: 'Gluten Delivery'
  },
  {
    image: healthy,
    title: 'Healthy Delivery'
  },
  {
    image: lactose,
    title: 'Lactose Delivery'
  },
  {
    image: organic,
    title: 'Organic Delivery'
  },
  {
    image: custom,
    title: 'Custom Delivery'
  },
  ]
  const [slidePicture, setSlidePicture] = useState([
    {
      name: 'Coca "Bombs"',
      img:  cocaBombs,
      sClass: 'slideFirst',
    },
    {
      name: 'Ginger Cookies',
      img: gingerCookies,
      sClass: 'slideSecond',
    },
    {
      name: 'Xmas Cookies',
      img:  xmasCookies,
      sClass: 'slideThird',
    }
  ])

  const delivery = [
    {
      img: deliveryImg,
      cName: "dFirst",
      heading: "CHOOSE GOODS FROM OUR ASSORTMENT",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    },
    {
      img: deliverySecond,
      cName: "dSecond",
      heading: "PLACE AN ORDER AND CONFIRM IT",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    },
    {
      img: deliveryThird,
      cName: "dThird",
      heading: "RECEIVE THE ORDER FROM THE COURIER",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    },
  ]

  const next = () => {
    setSlidePicture(prevSlidePicture => {
      const last = prevSlidePicture.pop();
      const newSlidePicture = [last, ...prevSlidePicture];
      return newSlidePicture;
    });
  }

  return (
    <div className="whyChoose">
      <h1 className='whyChooseTitle'>
      <span>WHY TO CHOOSE US?</span>
      </h1>
      <div className='whyChooseAll'>
        <div className='whyOptions'>
          {data.map((item,i)=>{
            return <div className='whyOption' key={i * Math.random() * 100}>
              <img src={item.image} alt="Image" />
              {item.title}
            </div>
          })}
        </div>
        <div className='whyImage'></div>
      </div>
      <div className='customizeTitle'>
        <span>CUSTOMIZE YOUR SWEETS</span>
      </div>
      <div className='customizeDiv'>
        <img src={customizeImage} alt='customize' /> 
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor reprehenderit in.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
        <div className='tryItNow'>
          <span>TRY IT NOW</span>
        </div>
        </span>
      </div>
      <div className="delivery">
        <div className='deliveryTerms'>
            <span>DELIVERY TERMS</span>
            <img src={fast} alt='fast' width="20px" height="17px"/> 
        </div>
        <div className='deliveryBox'>
            {delivery.map((item,i)=>{
              return (
                <div className={`chooseGoods ${item.cName}`} key={i * Math.random() * 100}>
                  <div className='chooseGoodsImg'>
                    <img src={item.img} alt='deliveryBoxImg' /> 
                  </div>
                  <div className='deliveryBoxText'>
                    <h5>{item.heading}</h5>
                    <span>{item.text}</span>
                  </div>
                </div>
              )
            })}
        </div>
      </div>
      <div className='seasonal'>
            TRY OUR SEASONAL NOVALTIES
      </div>
      <div className='snowFlake'>
      </div>
      <div className='allCards'>
        <div className="slider">
        <div className='backButton'></div>
        {slidePicture.map((item,i)=>{
          return (
            <div className={`slideShow ${item.sClass}`} key={i}> 
                <div className='slideImg' style={{backgroundImage: `url('${item.img}')`}}>
                </div>
                <div className='slideText'>
                {item.name}
                </div>
                <div className='tryItNowSlide'>
                  <span>TRY IT NOW</span>
                </div>
            </div>
          )
        })}
        <div className='nextButton' onClick={next}></div>
        </div>
        </div>
      </div>
  );
};

export default WhyChoose;

//slideri itemner@ sarqenq map u aj dzax buttenr@