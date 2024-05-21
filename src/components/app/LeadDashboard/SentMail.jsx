import { Divider } from "@mui/material";
import React from "react";

const SentMail = ({ setOpenSentMessage }) => {
  return (
    <div className=" rounded-md border  z-50  w-[90%] md:w-[75%] lg:w-[50%] shadow-2xl  ">
      <div className="mt-10 z-50 bg-white rounded-md">
        <div className="w-full  py-3 border text-center relative  bg-[#E8F1F3]">
          <p className="text-center text-xl font-semibold ">Sent Mail</p>
          <h2
            onClick={() => setOpenSentMessage(false)}
            className="text-2xl font-semibold absolute p-2 hover:cursor-pointer right-2 top-1"
          >
            X
          </h2>
        </div>
        <div className="w-full my-4 mx-auto">
          <div className=" my-3 rounded-md px-3   flex gap-1  ">
            <h3>To:</h3>
            <div className="flex gap-1  flex-wrap">
              <p className="bg-gray-200 px-1 shadow-sm hover:text-black rounded-md">
                ashimroyrupok@gmail.com <span className="font-semibold px-1"> X </span>
              </p>
              <p className="bg-gray-200 px-1 shadow-sm hover:text-black rounded-md">
                ashimroyrupok@gmail.com <span className="font-semibold px-1"> X </span>
              </p>
              <p className="bg-gray-200 px-1 shadow-sm hover:text-black rounded-md">
                ashimroyrupok@gmail.com <span className="font-semibold px-1"> X </span>
              </p>
              <p className="bg-gray-200 px-1 shadow-sm hover:text-black rounded-md">
                ashimroyrupok@gmail.com <span className="font-semibold px-1"> X </span>
              </p>
          
             
            </div>
          </div>
          <Divider className="my-3" />
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-password"
            >
              Your Message
            </label>
            <textarea
              rows={10}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              defaultValue={""}
            />
          </div>
          <div className="flex justify-end w-full px-3">
            <button
              className="shadow bg-indigo-600 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded"
              type="submit"
            >
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SentMail;
