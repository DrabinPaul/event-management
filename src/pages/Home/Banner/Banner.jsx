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
                        <p className="text-white text-left">Marriage is a partnership of two unique people <br />who bring out the very best in each other and <br />who know that even though they are wonderful <br />as individuals, they are even better together.</p>
                    </div>
                </div>
                <div className="relative h-[550px]">
                    <img src="https://images.pexels.com/photos/2253842/pexels-photo-2253842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="object-cover h-full" />
                    <div className="absolute z-[1000] top-40 m-10">
                        <h3 className="text-5xl font-bold text-left mb-4 text-[#fe3e01]" >Getting Engaged !</h3>
                        <p className="text-white text-left">The minute I heard my first love story,<br /> I started looking for you, not knowing how <br />blind that was. Lovers don't finally meet <br />somewhere. They're in each other all along</p>
                    </div>
                </div>
                <div className="relative h-[550px]">
                    <img src="https://images.pexels.com/photos/3347413/pexels-photo-3347413.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="object-cover h-full" />
                    <div className="absolute z-[1000] top-40 m-10">
                        <h3 className="text-5xl font-bold text-left mb-4 text-[#fe3e01]" >Wedding Anniversary!</h3>
                        <p className="text-white text-left">Love is not about how many days, <br />months, or years you have been together. <br />Love is about how much you love each <br /> other every single day.</p>
                    </div>
                    <div className="thumbs">

                    </div>
                </div>
            </Carousel>


        </div>
    );
};

export default Banner;