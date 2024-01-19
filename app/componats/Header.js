"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname  } from "next/navigation";
import { FiMenu } from "react-icons/fi";
import { FiX } from "react-icons/fi";


export default function Header() {
  const pathname = usePathname()
  const currentRout = pathname;
  console.log(pathname)
  const [open, setOpen] = useState(true);
  const [hide, setHide] = useState(true)



  return (
    <header class=" bg-gray-100 shadow-md ">
      <nav class=" lg:ml-16 lg:mr-16 bg-gray-100 ">
        <div className=" flex justify-between border-b-0 h-24">
          <div className=" lg:ml-20 ">
            <Link class="flex hover:text-white" href={"/"}>
              <img
                class=" h-11  lg:h-16 md:h-16 sm:h-16 sm:mt-5 sm:ml-24  lg:mt-5 md:mt-5 mt-8 m-4 mx-10 "
                src="https://bit.ly/3FrleBg"
              />
            </Link>

          </div>

          {open ? (
            <FiMenu
              class="lg:hidden flex justify-end h-8 w-8 mr-5 lg:ml-56 md:ml-96 sm:ml-80 ml-56 mt-6 "
              onClick={() => setOpen(false)}
            />
          ) : null}

          <div class={`lg:flex  lg:ml-70  ${open ? "hidden" : "hidden"}  `}>
            <div class="">
              <ul class="items-center lg:flex gap-4 mt-8 p-4 ml-0 justify-start font-bold">
                <li>
                  <Link
                    className={`hover:text-blue-400  + " ${currentRout == "/" ? "text-gray-100 bg-blue-400 p-1 rounded-md items-center hover:text-white" : "text-black"
                      }`}
                    href={"/"}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link className={` hover:text-blue-400 " ${currentRout == "/products" ?  "text-gray-100 bg-blue-400 p-1 rounded-md items-center hover:text-white" : "text-black"
                    }`} href={"/products"}>
          
                    Products
                  </Link>
                </li>
                <li>
                  <Link className={` hover:text-blue-400 " ${currentRout == "/about" ?  "text-gray-100 bg-blue-400 p-1 rounded-md items-center hover:text-white" : "text-black"
                    }`} href={"/about"}>
                  
                    About Us
                  </Link>
                </li>
                <li className={``}>{/*`${hide ? "hidden" : "hidden"}`*/}
                  <Link className={`hover:text-blue-400  " ${currentRout == "/gallery" ? "text-gray-100 bg-blue-400 p-1 rounded-md items-center hover:text-white" : "text-black"
                    }`} href={"/gallery"}>
                    {" "}
                    Gallery
                  </Link>
                </li>
                <li className={`${hide ? "hidden" : "hidden"}`}>
                  <Link className={` hover:text-blue-400  " ${currentRout == "/cliaints" ? "text-gray-100 bg-blue-400 p-1 rounded-md items-center hover:text-white" : "text-black"
                    }`} href={"/cliaints"}>
                    {" "}
                    Cliaints
                  </Link>
                </li>
                <li>
                  <Link className={` hover:text-blue-400 " ${currentRout == "/contact" ?  "text-gray-100 bg-blue-400 p-1 rounded-md items-center hover:text-white" : "text-black"
                    }`} href={"/contact"}>
                    {" "}
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link className={` hover:text-blue-400 " ${currentRout == "/contact" ?  "text-gray-100 bg-blue-400 p-1 rounded-md items-center hover:text-white" : "text-black"
                    }`} href={"/studio"}>
                    {" "}
                    Studio
                  </Link>
                </li>
              </ul>
            </div>
            {/* <div class=" hover:bg-green-900 inline-flex justify-center   items-center  bg-green-300 w-50 h-20  ">
              <Link class="flex hover:text-white" href={""}>
                <img
                  class="lg:h-16 md:h-10 h-8 m-4 mx-10"
                  src="https://bit.ly/3FrleBg"
                ></img>
              </Link>
            </div> */}
          </div>

          {/* burger menu */}
          <div className="flex justify-end  z-10">

            <div
              class={`lg:flex gap-3 mt-24 h-96 w-80 rounded-md  bg-slate-100 ${!open ? "block" : "hidden"
                }  lg:hidden `}
            >
              {!open ? (
                <FiX
                  class="lg:hidden h-10 w-10 mt-6 ml-6 hover:text-red-500 " //lg:ml-56 md:ml-80 sm:ml-56 mt-6 
                  onClick={() => setOpen(true)}
                />
              ) : null}
              <ul class="  font-bold  justify-center">
                <li className={`pb-3 text-xl  py-2 text-center ${currentRout == "/" ? "text-white bg-blue-400" : "text-black"}`}>
                  <Link
                    className={`hover:text-blue-400 active:text-blue-200 ${currentRout == "/" ? "text-gray-100 bg-blue-400   rounded-md items-center hover:text-white" : "text-black"
                      }`}
                    href={"/"}
                  >
                    {" "}
                    Home
                  </Link>
                </li>
                <li className= {`pb-3 text-xl text-black py-2  text-center  ${currentRout == "/products" ? "text-white bg-blue-400" : "text-black"}`}>
                  <Link className={`hover:text-blue-400 active:text-blue-200 " ${currentRout == "/products" ? "text-gray-100 bg-blue-400 p-1 rounded-md items-center hover:text-white" : "text-black"
                    }`} href={"/products"}>
                    {" "}
                    Products
                  </Link>
                </li>
                <li className={`pb-3 text-xl text-black py-2  text-center  ${currentRout == "/about" ? "text-white bg-blue-400" : "text-black"}`}>
                  <Link className={`hover:text-blue-400 active:text-blue-200 " ${currentRout == "/about" ? "text-gray-100 bg-blue-400 p-1 rounded-md items-center hover:text-white" : "text-black"
                    }`} href={"/about"}>
                    {" "}
                    About Us
                  </Link>
                </li>
                <li className={` pb-3 text-xl text-black py-2  text-center  ${currentRout == "/gallery" ? "text-white bg-blue-400" : "text-black"}`}> {/*${hide ? "hidden" : "hidden"}  */}
                  <Link className={`hover:text-blue-400 active:text-blue-200 " ${currentRout == "/gallery" ? "text-gray-100 bg-blue-400 p-1 rounded-md items-center hover:text-white" : "text-black"
                    }`} href={"/gallery"}>
                    {" "}
                    Gallery
                  </Link>
                </li>
                <li className={` ${hide ? "hidden" : "hidden"} pb-3 text-xl text-black py-2  text-center  ${currentRout == "/cliaints" ? "text-white bg-blue-400" : "text-black"}`} >
                  <Link className={`hover:text-blue-400 active:text-blue-200 " ${currentRout == "/cliaints" ? "text-gray-100 bg-blue-400 p-1 rounded-md items-center hover:text-white" : "text-black"
                    }`} href={"/cliaints"}>
                    {" "}
                    Cliaints
                  </Link>
                </li>
                <li className={`pb-3 text-xl text-black py-2  text-center  ${currentRout == "/contact" ? "text-white bg-blue-400" : "text-black"}`}>
                  <Link className={`hover:text-blue-400 active:text-blue-200 " ${currentRout == "/contact" ? "text-gray-100 bg-blue-400 p-1 rounded-md items-center  hover:text-white" : "text-black"
                    }`} href={"/contact"}>
                    {" "}
                    Contact Us
                  </Link>
                </li>
                <li className={`pb-3 text-xl text-black py-2  text-center  ${currentRout == "/contact" ? "text-white bg-blue-400" : "text-black"}`}>
                  <Link className={`hover:text-blue-400 active:text-blue-200 " ${currentRout == "/contact" ? "text-gray-100 bg-blue-400 p-1 rounded-md items-center  hover:text-white" : "text-black"
                    }`} href={"/studio"}>
                    {" "}
                    Studio
                  </Link>
                </li>
              </ul>
            </div>
          </div>


        </div>

      </nav>
    </header>
  );
}
