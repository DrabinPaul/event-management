import React from 'react';
import Counter from './Counter';


const AboutUs = () => {
    return (
        <div className='mb-10'>
            <div className="hero min-h-[200px] flex justify-center relative" style={{ backgroundImage: "url('https://images.pexels.com/photos/3585798/pexels-photo-3585798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" }}>
                <div>
                    <div className="hero-overlay absolute inset-0 bg-black opacity-50"></div>
                    <div className="hero-content text-center relative z-10">
                        <div className="max-w-md">
                            <h1 className='text-5xl text-white font-bold text-center'>Who <span className='text-[#fe3e01]'>We</span> Are</h1>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center py-2 absolute top-[150px]">
                    <hr className="h-[4px] border-l-4" style={{ borderColor: '#fe3e01', height: '80px' }} />
                </div>
            </div>

            <div className='max-w-6xl mx-auto mt-20'>
                <div className='flex justify-center mb-5'>
                    <img src="https://pro-theme.com/html/dvents/assets/media/general/ui-decor-1.png" alt="" />
                </div>
                <h2 className='text-4xl font-bold text-center pb-2'>We <span className='text-[#fe3e01]'>Create Events</span> That Lasts</h2>
                <p className='text-center text-[#777] font-medium'>From Wedding Functions to Birthday Parties or Corporate Events to Musical Functions, <br />We offer full range of Events Management Services that scale to your needs & budget.</p>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 p-5 lg:p-0'>

                    <div className="card card-compact bg-base-100 mb-5">

                        <img className="w-full h-[200px]" src="https://images.pexels.com/photos/3082764/pexels-photo-3082764.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="picture" />
                        <div className="card-body h-[110px]">
                            <h3 className="text-xl font-bold text-center">Our Vision</h3>
                            <p className='text-center text-[#777]'>Aorem ipsum dolor sit amet consectetur elit sed tempor incididunt ut labore etua dolore mag aliqua minim veniam quis nostrud exercitation nostrud exercitation</p>

                        </div>
                    </div>
                    <div className="card card-compact bg-base-100 mb-5">

                        <img className="w-full h-[200px]" src="https://images.pexels.com/photos/1045541/pexels-photo-1045541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="picture" />
                        <div className="card-body h-[110px]">
                            <h3 className="text-xl font-bold text-center">Our Approach</h3>
                            <p className='text-center text-[#777]'>Aorem ipsum dolor sit amet consectetur elit sed tempor incididunt ut labore etua dolore mag aliqua minim veniam quis nostrud exercitation nostrud exercitation</p>

                        </div>
                    </div>
                    <div className="card card-compact  bg-base-100 mb-5">

                        <img className="w-full h-[200px]" src="https://images.pexels.com/photos/1238944/pexels-photo-1238944.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="picture" />
                        <div className="card-body h-[110px]">
                            <h3 className="text-xl font-bold text-center">Our Goals</h3>
                            <p className='text-center text-[#777]'>Aorem ipsum dolor sit amet consectetur elit sed tempor incididunt ut labore etua dolore mag aliqua minim veniam quis nostrud exercitation nostrud exercitation</p>

                        </div>
                    </div>

                </div>
            </div>

            <div className='max-w-6xl mx-auto lg:my-20'>
                <div className="grid grid-cols-1 lg:grid-cols-2 p-5 lg:p-0 gap-10 bg-base-100">

                    <div className="pt-10">
                        <div className='flex justify-center py-5'>
                            <img src="https://pro-theme.com/html/dvents/assets/media/general/ui-decor-1.png" alt="" />
                        </div>
                        <h2 className="text-center text-4xl font-bold pb-10">Why Choose <span className='text-[#fe3e01]'>Dweddings</span></h2>
                        <p className='text-xl text-[#777] font-semibold pb-5'>Making your events smarter & impactful by personalised event</p>
                        <p>Welcome to Dweddings, where we specialize in making your events smarter and more impactful through personalized event management. We believe in turning your dreams into unforgettable moments, meticulously crafting every detail to create a truly unique and memorable experience. With our dedicated team and innovative approach, we're here to transform your vision into reality, one event at a time. Let's embark on a journey together, where your special occasions are not just celebrated but elevated to new heights of elegance and distinction. Welcome to a world of exceptional events, welcome to Dweddings.</p>
                    </div>
                    <div className=''>
                        <img className='h-[500px] lg:w-[500px]' src="https://images.pexels.com/photos/2788488/pexels-photo-2788488.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Album" />
                    </div>
                </div>

            </div>

            <div>
                <h2 className='text-4xl font-bold text-center pb-2'>
                    We <span className='text-[#fe3e01]'>Create Events</span> That Lasts
                </h2>
                <p className='text-center text-[#777] font-medium'>
                    From Wedding Functions to Birthday Parties or Corporate Events to Musical Functions, <br />
                    We offer full range of Events Management Services that scale to your needs & budget.
                </p>

                <div className='flex justify-center mt-10'>
                    <div className="stats shadow flex flex-col lg:flex-row">

                        <div className="stat">
                            <div className="stat-figure text-[#fe3e01]">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                            </div>
                            <div className="stat-title">Total Events</div>
                            <div className="stat-value text-[#fe3e01]">2.6K</div>
                            <div className="stat-desc">21% more than last month</div>
                        </div>

                        <div className="stat">
                            <div className="stat-figure text-[#fe3e01]">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                            </div>
                            <div className="stat-title">Ongoing Events</div>
                            <div className="stat-value text-[#fe3e01] ">300</div>
                            <div className="stat-desc">21% more than last month</div>
                        </div>

                        <div className="stat">
                            <div className="stat-figure text-[#fe3e01]">
                            </div>
                            <div className="stat-title">Tasks done</div>
                            <div className="stat-value text-[#fe3e01]">96%</div>
                            <div className="stat-desc">300 tasks remaining</div>
                        </div>

                    </div>
                </div>

                <Counter></Counter>



            </div>



        </div>
    );
};

export default AboutUs;