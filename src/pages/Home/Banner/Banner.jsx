// import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import banner from '../../../assets/images/pic1.jpg';
import './style.css'

const Banner = () => {
    return (
        <div>

            <Carousel>
                <div className="relative h-[500px]">
                    <img src={banner} className="object-cover h-full" />
                    <p className="legend">Legend 1</p>
                    <div className="absolute z-[1000] top-20 m-10">
                        <h3 className="text-white text-5xl uppercase text-left mb-4" >Shoes</h3>
                        <p className="text-white uppercase text-left">Give a girl the right shoes, <br /> and she can conquer the world. <br /> A lie can travel half way around the world <br /> while the truth is putting on its shoes.</p>
                    </div>
                </div>
                <div className="relative h-[500px]">
                    <img src={banner} className="object-cover h-full" />
                    <p className="legend">Legend 2</p>
                    <div className="absolute z-[1000] top-20 m-10">
                        <h3 className="text-white text-5xl uppercase text-left mb-4">Shoes</h3>
                        <p className="text-white uppercase text-left">“If the shoe fits, wear it.” “One size  fit all, <br /> but when the shoe fits, it sure feels good.” <br />  force a square foot into a round shoe.” <br />Clothing, when it  on a body, looks lifeless. <br /> Shoes retain their perfect shape, and some even look like art.
                        </p>
                    </div>
                </div>
                <div className="relative h-[500px]">
                    <img src={banner} className="object-cover h-full" />
                    <p className="legend">Legend 3</p>
                    <div className="absolute z-[1000] top-20 m-10">
                        <h3 className="text-white text-5xl uppercase text-left mb-4">Shoes</h3>
                        <p className="text-white uppercase text-left">someone who is certain to win an election or a competition:  a shoo-in for the White House. <br /> The Padres are a shoo-in to win the pennant this season.
                        </p>
                    </div>
                    <div className="thumbs">

                    </div>
                </div>
            </Carousel>


        </div>
    );
};

export default Banner;