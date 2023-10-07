import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import './style.css';

import { Pagination } from 'swiper/modules';

const Team = () => {
    return (
        <div className='mb-20'>
            <div>
                <h2 className='text-center text-4xl pb-2 font-bold'><span className='text-[#fe3e01]'>Dwedding</span> Team</h2>
                <p className='text-center pb-5'>We make your events smart & impactful by personalised event management services</p>
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
                            <img src="https://images.pexels.com/photos/3984863/pexels-photo-3984863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""  />
                            <div className="absolute z-[1000] top-48 ml-2 bg-[#fe3e01] flex items-center  rounded-r-lg w-[310px] px-4 py-2">
                                <h3 className="text-xl text-left pr-2 text-white font-bold uppercase mb-2" >Lara <br />Gomez</h3>
                                <p className="text-base text-center">Professional wedding dress designer</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='relative'>
                            <img src="https://images.pexels.com/photos/4348194/pexels-photo-4348194.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""  />
                            <div className="absolute z-[1000] top-48 ml-2 bg-[#fe3e01] items-center rounded-r-lg flex w-[310px]  px-4 py-2">
                                <h3 className="text-xl text-left text-white font-bold uppercase mb-2" >Selana <br />Gomez</h3>
                                <p className="text-base text-center">Professional wedding decor specialist</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='relative'>
                            <img src="https://images.pexels.com/photos/5668870/pexels-photo-5668870.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""  />
                            <div className="absolute z-[1000] top-48 ml-2 bg-[#fe3e01] flex items-center text-center rounded-r-lg w-[310px]  px-4 py-2">
                                <h3 className="text-xl text-left pr-4 text-white font-bold uppercase mb-2" >Sora<br />Shimazaki</h3>
                                <p className="text-base text-center">Best for buddget</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='relative'>
                            <img src="https://images.pexels.com/photos/3873745/pexels-photo-3873745.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""  />
                            <div className="absolute z-[1000] top-40 m-10 bg-[#fe3e01] justify-center items-center rounded flex w-[330px]  px-4 py-2">
                                <h3 className="text-xl text-white text-left font-bold uppercase mb-2" >Steve <br />Jobs</h3>
                                <p className="text-base text-center">Guest management specialist for the ara</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='relative'>
                            <img src="https://images.pexels.com/photos/4427506/pexels-photo-4427506.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                            <div className="absolute z-[1000] top-40 m-10 bg-[#fe3e01] justify-center items-center rounded flex w-[330px]  px-4 py-2">
                                <h3 className="text-xl text-left text-white font-bold uppercase mb-2" >Liza<br />Summer</h3>
                                <p className="text-center text-base">Reception Management specialist for every</p>
                            </div>
                        </div>
                    </SwiperSlide>

            
                </Swiper>
            </>
        </div>
    );
};

export default Team;