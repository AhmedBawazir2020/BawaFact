"use client";
import Header from "../componats/Header";
import { images } from '../../lib/images'
import Footer from "../componats/Footer";


const Cards = ({ imageUrl }) => {
  return (
    <div className=" lg:w-70 w-46 md:w-72 m-5 lg:m-2 md:m-2 ">
      <div name="card" className="p-4 bg-gray-100 rounded-3xl shadow-md hover:shadow-2xl lg:w-70 lg:h-95 md:w-72 md:h-75 w-48 h-60 ">
        <div name="card imgae" className="overflow-visible py-2  ">
          <img
            alt="Card background"
            className="object-contain rounded-xl lg:h-56 md:h-40 h-28"
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

export default function Products() {

  return (
    
    <>
      <Header />

      <section className="  lg:ml-16 md:ml-14 md:mr-14  lg:m-9 ">
        <div className="bg-white itme lg:mr-1.5 lg:ml-1.5">
          <div className="flex justify-start mr-10 ml-10 font-bold">
            <h1 className="items-center">Products</h1>
          </div>
          <div className="flex flex-wrap justify-center items-center mb-5">
            {images.map((item) => (
              <Cards imageUrl={item} />
            ))}
          </div>

        </div>
      </section>
      <div className="">
        <Footer />
      </div>
    </>
  );
}
