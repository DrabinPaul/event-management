import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import banner from '../../../assets/images/pic1.jpg';
import './style.css'

const Banner = () => {
    return (
        <div className="">

            <Carousel>
                <div className="relative h-[550px]">
                    <img src="https://images.pexels.com/photos/3342697/pexels-photo-3342697.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="object-cover h-full" />
                    <div className="absolute z-[1000] top-40 m-10">
                        <h3 className="text-5xl font-bold  text-left mb-4 text-[#fe3e01]" >Getting Married !</h3>
                        <p className="text-white text-left">Marriage is the beautiful union of two souls, a journey where love grows <br />stronger with each passing day. It's a promise to stand together through <br />life's highs and lows, forging a bond that's unbreakable. In marriage, <br />two become one, creating a lifetime of shared dreams and cherished memories.</p>
                    </div>
                </div>
                <div className="relative h-[550px]">
                    <img src="https://images.pexels.com/photos/2253842/pexels-photo-2253842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="object-cover h-full" />
                    <div className="absolute z-[1000] top-40 m-10">
                        <h3 className="text-5xl font-bold text-left mb-4 text-[#fe3e01]" >Getting Married !</h3>
                        <p className="text-white text-left">Marriage is the beautiful union of two souls, a journey where love grows <br />stronger with each passing day. It's a promise to stand together through <br />life's highs and lows, forging a bond that's unbreakable. In marriage, <br />two become one, creating a lifetime of shared dreams and cherished memories.</p>
                    </div>
                </div>
                <div className="relative h-[550px]">
                    <img src="https://images.pexels.com/photos/3347413/pexels-photo-3347413.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="object-cover h-full" />
                    <div className="absolute z-[1000] top-40 m-10">
                        <h3 className="text-5xl font-bold text-left mb-4 text-[#fe3e01]" >Getting Married !</h3>
                        <p className="text-white text-left">Marriage is the beautiful union of two souls, a journey where love grows <br />stronger with each passing day. It's a promise to stand together through <br />life's highs and lows, forging a bond that's unbreakable. In marriage, <br />two become one, creating a lifetime of shared dreams and cherished memories.</p>
                    </div>
                    <div className="thumbs">

                    </div>
                </div>
            </Carousel>


        </div>
    );
};

export default Banner;