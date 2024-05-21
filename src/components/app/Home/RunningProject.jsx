import { Divider } from "@mui/material";
import { PiTargetBold } from "react-icons/pi";

const RunningProject = () => {
  return (
    <div className="rounded-md border shadow-md ">
      <div className="w-full  border rounded-md bg-[#E8F1F3]">
        <h2 className="text-xl py-3 px-5 rounded-md font-semibold">
          Running Projects
        </h2>
      </div>
      <div className="px-4 bg-white">
        {/* project */}
        <div className=" pb-3 pt-5">
          <div className="flex justify-between items-center gap-1 px-2 ">
            <div className="px-1 flex justify-around items-center gap-3">
              <div className=" text-center ">
                <PiTargetBold className="text-2xl text-[#009688]" />
              </div>
              <div>
                {/* project-name */}
                <h2 className="text-base font-semibold ">
                  Database Management
                </h2>
              </div>
            </div>

            <div>
              {/* status */}
              <p className=" bg-red-500  px-2 text-white rounded-md ">failed</p>
            </div>
          </div>
          <div className="bg-white w-full rounded-lg  block mt-2 px-10">
            <div className="w-full h-4 bg-gray-400 rounded-full">
              <div className="w-3/4 h-full text-center text-xs text-white bg-[#009688] rounded-full">
                75%
              </div>
            </div>
          </div>
        </div>
        <Divider />
        {/* project */}
        <div className=" pb-3 pt-5">
          <div className="flex justify-between items-center gap-1 px-2 ">
            <div className="px-1 flex justify-around items-center gap-3">
              <div className=" text-center ">
                <PiTargetBold className="text-2xl text-[#009688]" />
              </div>
              <div>
                {/* project-name */}
                <h2 className="text-base font-semibold ">
                  Database Management
                </h2>
              </div>
            </div>

            <div>
              {/* status */}
              <p className=" bg-[green] px-2 text-white rounded-md ">
                Completed
              </p>
            </div>
          </div>
          <div className="bg-white w-full rounded-lg  block mt-2 px-10">
            <div className="w-full h-4 bg-gray-400 rounded-full">
              <div className="w-full h-full text-center text-xs text-white bg-[#009688] rounded-full">
                100%
              </div>
            </div>
          </div>
        </div>
        <Divider />
        {/* project */}
        <div className=" pb-3 pt-5">
          <div className="flex justify-between items-center gap-1 px-2 ">
            <div className="px-1 flex justify-around items-center gap-3">
              <div className=" text-center ">
                <PiTargetBold className="text-2xl text-[#009688]" />
              </div>
              <div>
                {/* project-name */}
                <h2 className="text-base font-semibold ">
                  Database Management
                </h2>
              </div>
            </div>

            <div>
              {/* status */}
              <p className=" bg-[#009688] px-2 text-white rounded-md ">
                On Going
              </p>
            </div>
          </div>
          <div className="bg-white w-full rounded-lg  block mt-2 px-10">
            <div className="w-full h-4 bg-gray-400 rounded-full">
              <div className="w-3/4 h-full text-center text-xs text-white bg-[#009688] rounded-full">
                75%
              </div>
            </div>
          </div>
        </div>
        <Divider />
        {/* project */}
        <div className=" pb-3 pt-5">
          <div className="flex justify-between items-center gap-1 px-2 ">
            <div className="px-1 flex justify-around items-center gap-3">
              <div className=" text-center ">
                <PiTargetBold className="text-2xl text-[#009688]" />
              </div>
              <div>
                {/* project-name */}
                <h2 className="text-base font-semibold ">
                  Database Management
                </h2>
              </div>
            </div>

            <div>
              {/* status */}
              <p className=" bg-[#009688] px-2 text-white rounded-md ">
                On Going
              </p>
            </div>
          </div>
          <div className="bg-white w-full rounded-lg  block mt-2 px-10">
            <div className="w-full h-4 bg-gray-400 rounded-full">
              <div className="w-3/4 h-full text-center text-xs text-white bg-[#009688] rounded-full">
                75%
              </div>
            </div>
          </div>
        </div>
        <Divider />
      </div>
    </div>
  );
};

export default RunningProject;
