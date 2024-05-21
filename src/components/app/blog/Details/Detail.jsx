import Link from 'next/link';
import React from 'react';

const Detail = () => {
    return (
      <div>
        <div className="max-w-screen-xl mx-auto p-5 sm:p-8 md:p-12 relative">
          <div
            className="bg-cover h-64 text-center rounded-md overflow-hidden"
            style={{
              height: 450,
              backgroundImage:
                'url("https://api.time.com/wp-content/uploads/2020/07/never-trumpers-2020-election-01.jpg?quality=85&w=1201&h=676&crop=1")',
            }}
          ></div>
          <div className="max-w-3xl mx-auto -mt-10 ">
            <div className="pt-3 px-3 rounded-md bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
              <div className="">
                <Link
                  href="#"
                  className="text-xs text-indigo-600  font-medium hover:text-gray-900 transition duration-500 ease-in-out"
                >
                JavaScript
                </Link>
                ,
                <Link
                  href="#"
                  className="text-xs text-indigo-600  font-medium hover:text-gray-900 transition duration-500 ease-in-out"
                >
                  TypeScript
                </Link>
                <h1 href="#" className="text-gray-900 font-bold text-3xl mb-2">
                  Revenge of Nature
                </h1>
                <p className="text-gray-700 text-xs mt-2">
                  Written By:
                  <Link
                    href="#"
                    className="text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out"
                  >
                    Depth Search
                  </Link>
                </p>
                <p className="text-base leading-8 my-5">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <h3 className="text-2xl font-bold my-5">
                  #1. What is Lorem Ipsum?
                </h3>
                <p className="text-base leading-8 my-5">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <blockquote className="border-l-4 text-base italic leading-8 my-5 p-5 text-indigo-600">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry
                  standard dummy text ever since the 1500s
                </blockquote>
                <p className="text-base leading-8 my-5">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <Link
                  href="#"
                  className="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out"
                >
                  #programming
                </Link>
                ,
                <Link
                  href="#"
                  className="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out"
                >
                  #coding
                </Link>
                ,
                <Link
                  href="#"
                  className="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out"
                >
                  #web-development
                </Link>
                ,
                <Link
                  href="#"
                  className="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out"
                >
                  #depth-search
                </Link>
                ,
                <Link
                  href="#"
                  className="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out"
                >
                  #
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Detail;