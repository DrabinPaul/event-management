import React from 'react';

const Welcome = () => {
    return (
        <div className='max-w-6xl mx-auto mt-10'>
            <div className="card lg:card-side bg-base-100">
                <figure className=''>
                    <img className='h-[500px]' src="https://images.pexels.com/photos/2909515/pexels-photo-2909515.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Album" />
                </figure>
                <div className=" pl-10 pt-40 w-[800px]">
                    <h2 className="card-title text-4xl pb-10">Welcome to <span className='text-[#fe3e01]'>Dweddings</span></h2>
                    <p className='text-xl font-semibold pb-5'>Making your events smarter & impactful by personalised event management.</p>
                    <p>Welcome to Dweddings, where we specialize in making your events smarter and more impactful through personalized event management. We believe in turning your dreams into unforgettable moments, meticulously crafting every detail to create a truly unique and memorable experience. With our dedicated team and innovative approach, we're here to transform your vision into reality, one event at a time. Let's embark on a journey together, where your special occasions are not just celebrated but elevated to new heights of elegance and distinction. Welcome to a world of exceptional events, welcome to Dweddings.</p>
                    
                </div>
            </div>

        </div>
    );
};

export default Welcome;