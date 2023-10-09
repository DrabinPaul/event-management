import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import './style.css';

import { Pagination } from 'swiper/modules';

const Team = () => {
    return (
        <div className=''>
            <div>
                <h2 className='text-center text-4xl pb-2 font-bold'><span className='text-[#fe3e01]'>Dwedding</span> Team</h2>
                <p className='text-center pb-5 text-[#777]'>We make your events smart & impactful by personalised event management services</p>
            </div>
            <>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className='relative'>
                            <img src="https://images.pexels.com/photos/4348194/pexels-photo-4348194.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""  />
                            <div className="absolute z-[1000] top-48 ml-2 bg-[#fe3e01] items-center rounded-r-lg flex w-[310px]  px-4 py-2">
                                <h3 className="text-xl text-left text-white font-bold uppercase mb-2" >Selana <br />Gomez</h3>
                                <p className="text-base text-center ml-5">Wedding  specialist</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='relative'>
                            <img src="https://images.pexels.com/photos/12846590/pexels-photo-12846590.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""  />
                            <div className="absolute z-[1000] top-48 ml-2 bg-[#fe3e01] flex items-center  rounded-r-lg w-[310px] px-4 py-2">
                                <h3 className="text-xl text-left pr-2 text-white font-bold uppercase mb-2" >Lara <br />Gomez</h3>
                                <p className="text-base text-center ml-5">Wedding photographer </p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='relative'>
                            <img src="https://images.pexels.com/photos/5668870/pexels-photo-5668870.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""  />
                            <div className="absolute z-[1000] top-48 ml-2 bg-[#fe3e01] flex items-center text-center rounded-r-lg w-[310px]  px-4 py-2">
                                <h3 className="text-xl text-left text-white font-bold uppercase mb-2" >Sora<br />Shimazaki</h3>
                                <p className="text-base text-center ml-2">Anniversary specialist</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='relative'>
                            <img src="https://images.pexels.com/photos/3873745/pexels-photo-3873745.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""  />
                            <div className="absolute z-[1000] top-48 ml-2 bg-[#fe3e01] flex items-center text-center rounded-r-lg w-[310px]  px-4 py-2">
                                <h3 className="text-xl text-left  text-white font-bold uppercase mb-2" >Benjamin<br />Smith</h3>
                                <p className="text-base text-center ml-5">Party specialist</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='relative'>
                            <img src="https://images.pexels.com/photos/4427506/pexels-photo-4427506.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                            <div className="absolute z-[1000] top-48 ml-2 bg-[#fe3e01] flex items-center text-center rounded-r-lg w-[310px]  px-4 py-2">
                                <h3 className="text-xl text-left pr-2 text-white font-bold uppercase mb-2" >Olivia <br />Davis</h3>
                                <p className="text-base text-center ml-5">Honeymoon specialist</p>
                            </div>
                        </div>
                    </SwiperSlide>

            
                </Swiper>
            </>
        </div>
    );
};

export default Team;