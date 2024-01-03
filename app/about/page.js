"use client";
import Header from "../componats/Header";
import Map from "../componats/Map";
import { cliaints } from '../../lib/images'
import Footer from '../componats/Footer'





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

export default function About() {
  return (
    <>
      <Header />
      <main className="">
        <section className=" lg:ml-16 md:ml-14 md:mr-14 lg:m-10">
          <div className="flex justify-start mr-10 ml-10 font-bold">
            <h2 className="font-bold">About Us</h2>
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
       
        <section className=" lg:ml-16 md:ml-14 md:mr-14 lg:m-10">
          {/* <h1 className='flex justify-end mr-11 font-bold font-sans'>عملانا</h1> */}
          <div className=" border-b-2  flex justify-start mr-10 ml-10 font-bold mb-3">
            <h1 className="mb-2">Our Cliaints</h1>
          </div>
          <div class="flex flex-col bg-white m-auto lg:ml-10 lg:mr-10 p-auto shadow-inner rounded-xl">
            <div class="flex overflow-x-scroll p-3 hide-scroll-bar  ">
              <div class="flex flex-nowrap  ">
                <div class="flex px-0 ml-5">
                {cliaints.slice(0, 1).map((item) => (
                      <Cards imageUrl={item} />
                    ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <div className="">
        <Footer />
      </div>
    </>
  );
}
