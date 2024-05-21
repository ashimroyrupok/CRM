import Image from "next/image";
import { useState } from "react";
const Featured = () => {
  return (
    <div className=" ">
      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-5 w-full ">
        <div className=" relative group h-[450px] overflow-hidden ">
          <Image
            height={320}
            width={500}
            className="w-full h-[380px] rounded-t-md "
            alt="blog image"
            src={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbWt4TBEQJHQIRcjGXW79trtefkX6SvavHZunQhK9Hgg&s"
            }
          />
          {/* overlay  */}
          <div className=" w-full h-[380px] opacity-75 hidden translate-y-20 group-hover:translate-y-0 group-hover:block duration-700 absolute top-0 left-0  bg-gradient-to-t from-[#A091F4] to-[#D9D9ED]   "></div>
          {/*  */}
          <div className="  p-2  rounded-b-xl ">
            <div className="bg-[#F3F3F3] group-hover:bg-transparent  w-full h-[160px] absolute rounded-md group-hover:-translate-y-64 left-0 px-6  -translate-y-1  transition-all duration-500 overflow-hidden ">
              <h2 className=" group-hover:bg-transparent text-2xl text-black group-hover:text-white p-2 px-7  font-semibold ">
                Lorem ipsum dolor sit, amet cons..
              </h2>
              <p className=" text-center text-white  px-7">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptate doloremque facere ut voluptatem nisi, velit vel
                impedit labore accusantium facilis.
              </p>
            </div>
          </div>
          <button className=" group-hover:hidden absolute top-5 left-3 p-2 rounded-xl text-white bg-gradient-to-r from-fuchsia-500 to-violet-500 ">
            Web development
          </button>
        </div>

        {/* <div className="  w-full  relative h-[460px]  ">
            <div className=" bg-[#F3F3F3] pb-4 rounded-b-xl  ">
              <Image
                height={450}
                width={744}
                alt="blog image"
                className=" rounded-tl-xl h-[370px] w-[744px] rounded-tr-xl  "
                src={
                  "https://img.freepik.com/free-photo/online-message-blog-chat-communication-envelop-graphic-icon-concept_53876-139717.jpg?size=626&ext=jpg&ga=GA1.1.1269040533.1714521600&semt=sph"
                }
              />
              <div className=" p-2">
                <h2 className=" text-2xl pt-2 mt-4 font-semibold ">
                  Lorem ipsum dolor sit, amet consectetur adipisicing...
                </h2>
              </div>

              <button className="  absolute top-5 left-3 p-2 rounded-xl text-white bg-gradient-to-r from-fuchsia-500 to-violet-500 ">
                Web development
              </button>
            </div>
          </div> */}
        {/*  */}
        <div className=" flex  flex-col justify-center items-center gap-4 ">
          <div className=" relative group h-56 overflow-hidden ">
            <Image
              height={130}
              width={500}
              className="w-[600px] h-40 rounded-t-md "
              alt="blog image"
              src={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbWt4TBEQJHQIRcjGXW79trtefkX6SvavHZunQhK9Hgg&s"
              }
            />
            {/* overlay  */}
            <div className=" w-[600px] h-40 opacity-75 hidden translate-y-20 group-hover:translate-y-0 group-hover:block duration-700 absolute top-0 left-0  bg-gradient-to-t from-[#A091F4] to-[#D9D9ED]   "></div>
            {/*  */}
            <div className="  p-2   rounded-b-xl ">
              <div className="bg-[#F3F3F3] group-hover:bg-transparent  w-[600px] h-[160px] absolute rounded-md group-hover:-translate-y-32 left-0 px-6  -translate-y-1  transition-all duration-500 overflow-hidden ">
                <h2 className=" group-hover:bg-transparent text-2xl text-black group-hover:text-white p-2 px-7  font-semibold ">
                  Lorem ipsum dolor sit, amet cons..
                </h2>
                <p className=" text-center text-white  px-7">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptate doloremque facere ut voluptatem nisi, velit vel
                  impedit labore accusantium facilis.
                </p>
              </div>
            </div>
            <button className=" group-hover:hidden absolute top-5 left-3 p-2 rounded-xl text-white bg-gradient-to-r from-fuchsia-500 to-violet-500 ">
              Web development
            </button>
          </div>
          <div className=" relative group h-56 overflow-hidden ">
            <Image
              height={130}
              width={500}
              className="w-[600px] h-40 rounded-t-md "
              alt="blog image"
              src={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbWt4TBEQJHQIRcjGXW79trtefkX6SvavHZunQhK9Hgg&s"
              }
            />
            <div className=" w-[600px] h-40 opacity-75 hidden translate-y-20 group-hover:translate-y-0 group-hover:block duration-700 absolute top-0 left-0  bg-gradient-to-t from-[#A091F4] to-[#D9D9ED]   "></div>
            <div className="  p-2   rounded-b-xl ">
              <div className="bg-[#F3F3F3] group-hover:bg-transparent  w-[600px] h-[160px] absolute rounded-md group-hover:-translate-y-32 left-0 px-6  -translate-y-1  transition-all duration-500 overflow-hidden ">
                <h2 className=" group-hover:bg-transparent text-2xl text-black group-hover:text-white p-2 px-7  font-semibold ">
                  Lorem ipsum dolor sit, amet cons..
                </h2>
                <p className=" text-center text-white  px-7">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptate doloremque facere ut voluptatem nisi, velit vel
                  impedit labore accusantium facilis.
                </p>
              </div>
            </div>
            <button className=" group-hover:hidden absolute top-5 left-3 p-2 rounded-xl text-white bg-gradient-to-r from-fuchsia-500 to-violet-500 ">
              Web development
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
