import React, { useState, useEffect } from 'react';
import './slider.styles.scss'

import Carousel from "react-simply-carousel";

const imgRight = require('../../../src/assets/arrow-next.png');
const imgLeft = require('../../../src/assets/arrow-prev.png');

const CarouselComponent = () => {
  const [activeSlide, setActiveSlide] = useState(5);

    const slideImages = [
        {
            img: require('../../assets/envelope.png'),
            title: 'Mobile Internet'

        },
        {
            img: require('../../assets/envelope.png'),
            title: 'Home Internet'
        },
        {
            img: require('../../assets/envelope.png'),
            title: 'Add a Phone-Line'
        },
        {
            img: require('../../assets/envelope.png'),
            title: 'Upgrade'
        },
        {
          img: require('../../assets/envelope.png'),
          title: 'Get a Device',
          more: 'Start here >'
      }
    ]




    return (

        <div className='container'>
          <Carousel
        updateOnItemClick
        containerProps={{
          style: {
            width: "100%",
            justifyContent: "space-between",
            top: "13em",
            position: "absolute",
            color:'black'
          }
        }}
        activeSlideIndex={activeSlide}
        activeSlideProps={{
          style: {
            background: "#2A2A2A",
            height:320,
            width:240,
            borderBottom:'20px solid #FFCB05',
            top:'1.1em',
            fontWeight:'bold',
            color:'white'
          }
        }}
        onRequestChange={setActiveSlide}
        forwardBtnProps={{
          children: <img src={imgRight.default} className="arrow"/>,
          style: {
            width: 15,
            height: 40,
            minWidth: 60,
            right:"25%",
            zIndex: 1,
            position:'relative',
            top: "12em",
            alignSelf: "center"
          }
        }}
        backwardBtnProps={{
          children: <img src={imgLeft.default} className="arrow"/>,
          style: {
            width: 15,
            height: 40,
            minWidth: 60,
            left:"25%",
            zIndex: 1,
            position:'relative',
            top: "12em",
            alignSelf: "center",
            borderWwidth: '0px !important',
            borderStyle: 'outset',
            borderColor: 'none !important',
            background:'none !important',
            color:'none !important'
          }
        }}
        itemsToShow={4.9}
        speed={400}
        centerMode={true}
      >
        {slideImages.map((item, index) => (
          <div
            style={{
              background: "#f7f7f7",
              width: 240,
              height: 200,
              border: "10px solid #E9E9E9",
              textAlign: "center",
              boxSizing: "border-box",
              top: '3em',
              position: 'relative',
              borderRadius: '15px'
            }}
            key={index}
          >
            <center><img src={item.img.default} className="imgH"/></center>
            <p className='t1'>{item.title}</p>
            <p className='t2'>{item.more}</p>
          </div>
        ))}
      </Carousel>
      <h1 className='welcome'>What are you <br/>
          here to do?
      </h1>
        </div >
    )
}

export default CarouselComponent;