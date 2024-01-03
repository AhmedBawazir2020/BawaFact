"use client";
import Header from '../componats/Header'
import Map from '../componats/Map'
import Footer from '../componats/Footer'


export default function Contact() {
    return (
        <>
            <Header />
            <section className=" lg:mr-11 lg:ml-11 ml-5 mr-5  ">
                <div className=" flex justify-start mr-10 ml-12 font-bold mt-10 mb-5">
                    <h1 className='flex justify-start'>Contact Us</h1></div>
                <div className='flex justify-start '>
                    <div className='mb-8 lg:ml-20 md:ml-14 ml-12'>
                        <h2 className='flex justify-start font-bold '>Address: Saudi Arabia  -Riyadh - Al-Shifa - Badr District - Al-Sultan Street</h2>
                        <h2 className='flex justify-start '>Phone:<span className='font-bold'>123654789</span></h2>{/* (المصنع) */}
                        <h2 className='flex justify-start '>Fax:<span className='font-bold'>987456321</span></h2>
                        <h1 className='flex justify-start font-bold'>
                            Post office box (Wasel): Postal code 14727 - additional number 8561
                        </h1>
                    </div>
                </div>
            </section>
            <div className='mr-11 ml-11 border-b-4'></div>
            <section className=" mr-11 ml-11">
                <div className='xl:flex lg:flex justify-center '>
                    <div className='m-5 mr-11 '>
                        <Map />
                    </div>
                    <div className="  mr-28 ml-2 m-5">
                        {/* <h1>Contact page</h1> */}
                        <div className='flex justify-center bg-gray-50 ml-11  '>
                            <form className="container  m-auto">
                                <div className="email block m-3 items-center ">
                                    <label htmlFor="frm-email" className='mr-14 '>Email</label>
                                    <input
                                        id="frm-email"
                                        type="email"
                                        name="email"
                                        autoComplete="email"
                                        className='border-2 border-gray-400 rounded-lg hover:border-gray-700'
                                        required
                                    />
                                </div>
                                <div className="block phone m-3">
                                    <label htmlFor="frm-phone" className='mr-12'>Phone</label>
                                    <input
                                        id="frm-phone"
                                        type="text"
                                        name="phone"
                                        autoComplete="tel"
                                        required
                                        className='border-2 border-gray-400 rounded-lg hover:border-gray-700'
                                    />
                                </div>
                                <div className="name block m-3">
                                    <div className='mb-2'>
                                        <label htmlFor="frm-first" className='mr-5'>First Name</label>
                                        <input
                                            id="frm-first"
                                            type="text"
                                            name="first"
                                            autoComplete="given-name"
                                            className='border-2 border-gray-400 rounded-lg hover:border-gray-700'
                                            required
                                        />
                                    </div>
                                    <div className='m-0'>
                                        <label htmlFor="frm-last" className='mr-5' >Last Name</label>
                                        <input
                                            id="frm-last"
                                            type="text"
                                            name="last"
                                            autoComplete="family-name"
                                            className='border-2 border-gray-400 rounded-lg hover:border-gray-700'
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="message block m-3">
                                    <h2 htmlFor="frm-message">Message</h2>
                                    <textarea id="frm-message" rows="6" name="message" className='ml-24 border-2 border-gray-400 rounded-lg hover:border-gray-700'></textarea>
                                </div>
                                <div className="items-center flex justify-center bg-blue-700  hover:text-blue-600  hover:bg-gray-600 hover:shadow-black w-20 h-9 m-5 rounded-md">
                                    <button className='flex justify-center font-bold text-white ' type="submit">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="">
                    <Footer />
                </div>
            </section>

        </>
    )
}