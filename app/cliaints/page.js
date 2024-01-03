import Header from '../componats/Header'
import { images } from '../../lib/images'
import Footer from '../componats/Footer';


// const Cards = () => {
//     return (
//         <div className=" w-80 m-3 ml-0 ">
//             <div name="card" className="p-4  bg-gray-50 rounded-3xl hover:shadow-2xl shadow-inner">
//                 <div name="card imgae" className="overflow-visible py-2">
//                     <img
//                         alt="Card background"
//                         className="object-cover rounded-xl"
//                         src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg"
//                         width={370}
//                     />
//                 </div>
//                 <div name="card body" className="pb-0 pt-2 px-4 flex-col items-start">
//                     <p className="text-tiny uppercase font-bold">Daily Mix</p>
//                     <small className="text-default-500">12 Tracks</small>
//                     <h4 className="font-bold text-large">Frontend Radio</h4>
//                 </div>
//             </div>
//         </div>
//     );
// };

const Cards = ({ imageUrl }) => {
  return (
    <div className=" lg:w-96 m-3 ml-0 ">
      <div name="card" className="p-4 bg-gray-50 rounded-3xl hover:shadow-2xl lg:w-96 lg:h-96 md:w-72 md:h-80 w-52 h-64 ">
        <div name="card imgae" className="overflow-visible py-2  ">
          <img
            alt="Card background"
            className="object-contain rounded-xl lg:h-64 md:h-44"
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

export default function Cliaints() {
  return (
    <>
      <Header />
      <section className="m-4 pt-4">
        <div className="bg-white">
          <div className="flex flex-wrap justify-center items-end m-3">
            {images.map((item) => (
              <Cards imageUrl={item} />
            ))}
          </div>

        </div>
      </section>
      <div className="footer absolute bottom-0 w-full">
        <Footer />
      </div>
    </>
  )
}