"use client";
import Header from '../componats/Header'
import Footer from '../componats/Footer'
import { useState } from 'react';
import './sytle.css';




import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import "swiper/css/scrollbar";


import { FreeMode, Navigation, Thumbs, Scrollbar } from 'swiper/modules';

import { galleryImagae } from '../../lib/images';


export default function Factory() {

    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <>
            <Header />

            <section className=" lg:ml-5 md:ml-14 md:mr-14 px-2 lg:m-10">
                <div className=" ">
                    <h1 className='flex justify-start mr-10 ml-10 font-bold'> Gallery Images</h1>
                    <div className='flex flex-wrap justify-cemter'>
                        {/* <img className='image m-5' src='https://www.calliaweb.co.uk/wp-content/uploads/2015/10/600x600.jpg'
                            height={550}
                            width={450} /> */}
                        <Swiper
                            style={{
                                '--swiper-navigation-color': '#000',
                                '--swiper-pagination-color': '#000',
                            }}
                            loop={true}
                            spaceBetween={10}
                            navigation={true}
                            thumbs={{ swiper: thumbsSwiper }}
                            modules={[FreeMode, Navigation, Thumbs]}
                            className="mySwiper2"

                        >

                            {galleryImagae.map((itme) => (
                                <SwiperSlide className='container'>
                                    <div className='divcontainer'>
                                        <img className={`galleyimg   m-5 `} src={itme} />
                                    </div>

                                </SwiperSlide>
                            ))}


                        </Swiper>
                        <Swiper
                            scrollbar={{
                                hide: true,
                            }}
                            loop={true}
                            onSwiper={setThumbsSwiper}
                            spaceBetween={5}
                            slidesPerView={6}
                            freeMode={true}
                            watchSlidesProgress={true}
                            modules={[FreeMode, Navigation, Thumbs, Scrollbar]}
                            className="mySwiper "

                        >

                            {galleryImagae.map((itme) => (
                                <SwiperSlide>
                                    <img className='img' src={itme} />
                                </SwiperSlide>
                            ))}


                        </Swiper>

                    </div>
                </div>
            </section>
            <section>
                <div className="mt-32">
                     <Footer />
                </div>
               
            </section>
        </>
    )
}