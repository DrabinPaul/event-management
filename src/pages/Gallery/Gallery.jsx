import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import './style.css';

import { Pagination } from 'swiper/modules';

const Gallery = () => {
    return (
        <div className='mb-10'>
            <h2 className='text-center text-4xl font-bold text-[#fe3e01] mt-10'>Wedding Moments</h2>
            <p className='text-center pt-2 text-[#777]'>Capture your best moments</p>
            <div className='flex justify-center items-center py-5'>
                <hr className="w-[300px] lg:w-[550px] border " style={{ borderColor: '#fe3e01' }} />
            </div>
            <div className='h-[400px] mb-10'>
                <>
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={30}
                        grabCursor={true}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <img src="https://www.wiselythemes.com/html/neela/images/gallery-img1.jpg" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://www.wiselythemes.com/html/neela/images/gallery-img13.jpg" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://www.wiselythemes.com/html/neela/images/gallery-img7.jpg" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://www.wiselythemes.com/html/neela/images/gallery-img14.jpg" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://www.wiselythemes.com/html/neela/images/gallery-img4.jpg" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://www.wiselythemes.com/html/neela/images/gallery-img2.jpg" alt="" />
                        </SwiperSlide>

                        <SwiperSlide>
                            <img src="https://www.wiselythemes.com/html/neela/images/gallery-img3.jpg" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://www.wiselythemes.com/html/neela/images/gallery-img11.jpg" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://www.wiselythemes.com/html/neela/images/gallery-img12.jpg" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://www.wiselythemes.com/html/neela/images/gallery-img19.jpg" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://www.wiselythemes.com/html/neela/images/gallery-img8.jpg" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://www.wiselythemes.com/html/neela/images/gallery-img9.jpg" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://www.wiselythemes.com/html/neela/images/gallery-img16.jpg" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://www.wiselythemes.com/html/neela/images/gallery-img5.jpg" alt="" />
                        </SwiperSlide>
                    </Swiper>
                </>

            </div>


            <h2 className='text-center text-4xl font-bold text-[#fe3e01] mt-20' >Wedding Blog</h2>
            <p className='text-center pt-5 text-[#777]'>Blogs best moments</p>
            <div className='flex justify-center items-center py-5'>
                <hr className="w-[300px] md:w-[550px] border " style={{ borderColor: '#fe3e01' }} />
            </div>

            <div className='max-w-6xl mx-auto mb-10'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
                    <div>
                        <img src="https://images.pexels.com/photos/10607341/pexels-photo-10607341.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                        <h2 className='text-center text-2xl font-bold  pt-5'>Wedding trends to obsess over this year</h2>
                        <div className='flex justify-center items-center py-5'>
                            <hr className="w-[300px] md:w-[550px] border " style={{ borderColor: '#fe3e01' }} />
                        </div>
                        <p className='text-center text-base font-medium text-[#777]'>If you've always dreamt of carrying a bouquet of old fashioned garden roses down the aisle, but your budget doesn't quite match up to the dream, try this!</p>
                    </div>
                    <div>
                        <img src="https://images.pexels.com/photos/57980/pexels-photo-57980.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                        <h2 className='text-center text-2xl font-bold  pt-5'>The ultimate guide to plan your wedding</h2>

                        <div className='flex justify-center items-center py-5'>
                            <hr className="w-[300px] md:w-[550px] border " style={{ borderColor: '#fe3e01' }} />
                        </div>
                        <p className='text-center text-base font-medium text-[#777]'>If you've always dreamt of carrying a bouquet of old fashioned garden roses down the aisle, but your budget doesn't quite match up to the dream, try this!</p>
                    </div>

                </div>

            </div>

            <div className='max-w-6xl mx-auto'>
                <h2 className='text-center text-4xl font-bold text-[#fe3e01] mt-20'>Upcoming Weddings</h2>
                <p className='text-center pt-5 text-[#777]'>Couples are getting marreid</p>
                <div className='flex justify-center items-center py-5'>
                    <hr className="w-[300px] md:w-[550px] border " style={{ borderColor: '#fe3e01' }} />
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 p-5 lg:p-0'>

                    <div className="card card-compact lg:w-[280px] bg-base-100 mb-5">
                        <figure>
                            <img className="rounded-t-lg w-full h-[400px]" src="https://images.pexels.com/photos/6692085/pexels-photo-6692085.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="picture" />
                        </figure>
                        <div className="card-body shadow-md h-[110px]">
                            <h3 className=" py-1 rounded-lg text-xl font-bold text-center">Lily and Christopher</h3>
                            <h2 className="bg-[#fe3e01] font-semibold text-base mb-2 text-white px-2 text-center py-2 rounded">August 20, 2023</h2>
                        </div>
                    </div>

                    <div className="card card-compact lg:w-[280px] bg-base-100 mb-5">
                        <figure>
                            <img className="rounded-t-lg w-full h-[400px]" src="https://images.pexels.com/photos/8039883/pexels-photo-8039883.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="picture" />
                        </figure>
                        <div className="card-body shadow-md h-[110px]">
                            <h3 className=" py-1 rounded-lg text-xl font-bold text-center">Mia and William</h3>
                            <h2 className="bg-[#fe3e01] font-semibold text-base mb-2 text-white px-2 text-center py-2 rounded">July 20, 2023</h2>
                        </div>
                    </div>

                    <div className="card card-compact lg:w-[280px] bg-base-100 mb-5">
                        <figure>
                            <img className="rounded-t-lg w-full  h-[400px]" src="https://images.pexels.com/photos/3754257/pexels-photo-3754257.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="picture" />
                        </figure>
                        <div className="card-body shadow-md h-[110px]">
                            <h3 className=" py-1 rounded-lg text-xl font-bold text-center">Sophia and Alexander</h3>
                            <h2 className="bg-[#fe3e01] font-semibold text-base mb-2 text-white px-2 text-center py-2 rounded">November 10, 2023</h2>
                        </div>
                    </div>

                    <div className="card card-compact lg:w-[280px] bg-base-100 mb-5">
                        <figure>
                            <img className="rounded-t-lg w-full  h-[400px]" src="https://images.pexels.com/photos/8933529/pexels-photo-8933529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="picture" />
                        </figure>
                        <div className="card-body shadow-md h-[110px]">
                            <h3 className=" py-1 rounded-lg text-xl font-bold text-center">Jessica and David</h3>
                            <h2 className="bg-[#fe3e01] font-semibold text-base mb-2 text-white px-2 text-center py-2 rounded">December 16, 2023</h2>
                        </div>
                    </div>


                </div>
            </div>

            <div className="max-w-6xl mx-auto mt-20">
                <h2 className="text-center text-4xl font-bold text-[#fe3e01]">Couples Feedback</h2>
                <p className='text-center pt-5 text-[#777]'>Happy couples feedback</p>
                <div className="flex justify-center items-center py-2">
                    <hr className="w-[300px] md:w-[550px] border" style={{ borderColor: '#fe3e01' }} />
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-5 p-5 lg:p-0">

                    <div className="comment-box">
                        <div className="avatar">
                            <div className="w-24 rounded-full">
                                <img src="https://images.pexels.com/photos/2760688/pexels-photo-2760688.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                            </div>
                        </div>
                        <div className="comment-content">
                            <h3 className="comment-author text-base font-semibold text-[#fe3e01]">Sarah and Daniel</h3>
                            <p className="comment-text text-[#777]">
                            Thank you for capturing our special day so beautifully! Your attention to detail and artistic eye truly made our wedding photos exceptional.
                            </p>
                        </div>
                    </div>


                    <div className="comment-box">
                        <div className="avatar">
                            <div className="w-24 rounded-full">
                                <img src="https://images.pexels.com/photos/3780689/pexels-photo-3780689.jpeg?auto=compress&cs=tinysrgb&w=600" />
                            </div>
                        </div>
                        <div className="comment-content">
                            <h3 className="comment-author text-base font-semibold text-[#fe3e01]">Emily and Michael</h3>
                            <p className="comment-text text-[#777]">
                            The wedding decoration was absolutely breathtaking! It transformed the venue into a fairytale dream. Thank you for making our special day truly magical.
                            </p>
                        </div>
                    </div>

                    <div className="comment-box">
                        <div className="avatar">
                            <div className="w-24 rounded-full">
                                <img src="https://images.pexels.com/photos/2479529/pexels-photo-2479529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                            </div>
                        </div>
                        <div className="comment-content">
                            <h3 className="comment-author text-base font-semibold text-[#fe3e01]">Ava and Ethan</h3>
                            <p className="comment-text text-[#777]">
                            Our wedding was a dream come true, thanks to the meticulous planning and execution by the wedding management team. Every detail was flawless, and we could truly relax and enjoy our special day.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Gallery;