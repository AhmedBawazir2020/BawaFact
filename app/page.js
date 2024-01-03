"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import Header from "./componats/Header";
import { images, adImages, cliaints } from '../lib/images'
import { descraption } from '../lib/text'
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Footer from './componats/Footer'
import { useState } from "react";


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './globals.css'
import Link from 'next/link';

function truncate(string, n) {
  return string?.length > n ? string.substr(0, n - 1) + '...' : string;

}




const Cards = ({ imageUrl }) => {
  return (
    <div className=" lg:w-70 w-46 md:w-72 m-5 lg:m-2 md:m-2 ">
      <div name="card" className="p-4 bg-gray-100 rounded-3xl shadow-md hover:shadow-2xl lg:w-70 lg:h-95 md:w-72 md:h-75 w-52 h-64 ">
        <div name="card imgae" className="overflow-visible py-2  ">
          <img
            alt="Card background"
            className="object-contain rounded-xl lg:h-56 md:h-40 h-32"
            src={imageUrl}
            width={370}

          />
        </div>
        <div name="card body" className="pb-0 pt-2 px-4 flex-col items-start">
          <p className="text-tiny uppercase font-bold">Daily Mix</p>
          <small className="text-default-500">12 Tracks</small>
          <h4 className="font-bold text-large">Frontend Radio</h4>
        </div>
      </div>
    </div>

  );
};

export default function Home() {


  const [image, setImage] = useState(images);


  return (
    <>
      <Header />

      <section className=" flex justify-center mt-5  ">
        <div className="  w-screen  lg:mr-24 lg:ml-24 ">
          <Swiper
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            navigation={true} pagination={{
              dynamicBullets: true,
            }} modules={[Navigation, Pagination, Autoplay]} className="mySwiper ml-10 mr-10"
          >
            {adImages.map((item) => (
              <SwiperSlide className=''>
                <div className='flex justify-center' >
                  <img className='object-fill lg:w-screen md:h-96 md:w-screen sm:w-screen sm:h-72 lg:h-96 w-full h-44 rounded-lg'
                    src={item}

                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      <section className="mt-4 pt-4 lg:ml-16 md:ml-14 md:mr-14 p-4 lg:m-16">
        <div className="border-b-2   flex justify-start mr-9 ml-9 font-bold">
          <h2>welcomeing message</h2>
        </div>
        <div className=" lg:mr-32 lg:ml-32 m-5">
          <p className='font-serif text-justify'>
            Lorem ipsum dolor sit amet, officia excepteur ex fugiat
            reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit
            ex esse exercitation amet. Nisi animcupidatat excepteur officia.
            Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate
            voluptate dolor minim nulla est proident. Nostrud officia pariatur
            ut officia. Sit irure elit esse ea nulla sunt ex occaecat
            reprehenderit commodo officia dolor Lorem duis laboris cupidatat
            officia voluptate. Culpa proident adipisicing id nulla nisi laboris
            ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo
            ex non excepteur duis sunt velit enim. Voluptate laboris sint
            cupidatat ullamco ut ea consectetur et est culpa et culpa duis.
          </p>
        </div>
      </section>
      {/* Pordcts */}
      <section className="lg:ml-16 md:ml-14 md:mr-14 p-4 lg:m-16">
        <div className="border-b-2   flex justify-start mr-9 ml-9 font-bold mb-5">
          <h2>Our products</h2>
        </div>
        <div className=" ">
          <Link className='flex justify-end mr-5  ' href={'/products'}><h4 className='text-blue-400 underline hover:text-blue-500'>see more —›</h4></Link>
          <div class="flex flex-col bg-blue-50 m-0 lg:ml-10 lg:mr-10 p-0 shadow-inner rounded-xl">
            <div class="flex overflow-x-scroll p-3 hide-scroll-bar  ">
              <div class="flex flex-nowrap  ">
                <div class="flex ">
                  {image.slice(0, 5).map((item) => (
                    <Cards imageUrl={item} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* cliaints  */}
      <section className="lg:ml-16 lg:m-16 md:ml-14 md:mr-14 p-4">
        <div className="border-b-2   flex justify-start mr-9 ml-9 font-bold mb-5">
          <h2>Our Clliaints</h2>
        </div>
        <div className=" ">
          <div className=" ">
            <div class="flex flex-col bg-blue-50 m-auto lg:ml-10 lg:mr-10 p-auto shadow-inner rounded-xl">
              <div class="flex overflow-x-scroll p-3 hide-scroll-bar  ">
                <div class="flex flex-nowrap  ">
                  <div class="flex ">
                    {cliaints.slice(0, 1).map((item) => (
                      <Cards imageUrl={item} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div >
        <Footer />
      </div>
    </>
  );
}
