import React from 'react';

const Welcome = () => {
    return (
        <div className='max-w-6xl mx-auto my-20'>
            <div className="card lg:card-side bg-base-100">
                <figure className=''>
                    <img className='h-[500px]' src="https://images.pexels.com/photos/2909515/pexels-photo-2909515.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Album" />
                </figure>
                <div className=" lg:pl-10 mt-10 lg:w-[800px] p-5 lg:p-0">
                    <div className='flex justify-center'>
                        <img src="https://pro-theme.com/html/dvents/assets/media/general/ui-decor-1.png" alt="" />
                    </div>
                    <div className='flex justify-center items-center py-5'>
                        <hr className="w-[300px] md:w-[350px] border " style={{ borderColor: '#fe3e01' }} />
                    </div>
                    <h2 className="text-center text-4xl font-bold pb-10">Welcome to <span className='text-[#fe3e01]'>Dwedding</span></h2>
                    <p className='text-xl font-semibold pb-5'>Making your events smarter & impactful by personalised event management.</p>
                    <p className='text-[#777]'>Welcome to Dweddings, where we specialize in making your events smarter and more impactful through personalized event management. We believe in turning your dreams into unforgettable moments, meticulously crafting every detail to create a truly unique and memorable experience. With our dedicated team and innovative approach, we're here to transform your vision into reality, one event at a time. Let's embark on a journey together, where your special occasions are not just celebrated but elevated to new heights of elegance and distinction. Welcome to a world of exceptional events, welcome to Dweddings.</p>


                    <div className='mt-10'>
                        <h2 className='text-4xl font-extrabold text-[#fe3e01] font-Dancing text-center'>"Love may be blind, but marriage is a real eye-opener"</h2>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Welcome;