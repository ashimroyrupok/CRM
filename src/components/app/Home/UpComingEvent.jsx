import { Divider } from "@mui/material";
import { SlCalender } from "react-icons/sl";
const UpComingEvent = () => {
  return (
    <div className="rounded-md border shadow-md ">
      <div className="w-full  border rounded-md bg-[#E8F1F3]">
        <h2 className="text-xl py-3 px-5 rounded-md font-semibold">
          Upcoming Event
        </h2>
      </div>
      <div className="px-4  bg-white">
        {/* event */}
        <div className=" pb-3 pt-5">
          <div className="flex justify-between items-center gap-1 px-2 ">
            <div className="px-1 flex justify-around items-center gap-4">
              {/* <SlCalender className="text-2xl font-semibold"></SlCalender> */}
              <div className="border text-center ">
                <p className="px-4 bg-[#E8F1F3]">1</p>
                <p
                  className="border px-1 text-[12px] text-white
               bg-[#009688]"
                >
                  APR
                </p>
              </div>
              <div>
                {/* meeting subject */}
                <h2 className="text-base font-semibold ">
                  Market Police{" "}
                  <span className="bg-[#009688] p-1 text-white rounded-lg">
                    9:34 pm
                  </span>
                </h2>
                {/* meeting location */}
                <p className="text-xs"> Green Road - Dhaka,Bangladesh </p>
              </div>
            </div>

            <div>
              <p className=" bg-[#009688] p-1 text-white rounded-md ">
                {" "}
                Facebook{" "}
              </p>
            </div>
          </div>
        </div>
        <Divider />
        {/* event */}
        <div className="bg-white pb-3 pt-5">
          <div className="flex justify-between items-center gap-1 px-2 ">
            <div className="px-1 flex justify-around items-center gap-4">
              {/* <SlCalender className="text-2xl font-semibold"></SlCalender> */}
              <div className="border text-center ">
                <p className="px-4 bg-[#E8F1F3]">1</p>
                <p
                  className="border px-1 text-[12px] text-white
               bg-[#009688]"
                >
                  APR
                </p>
              </div>
              <div>
                {/* meeting subject */}
                <h2 className="text-base font-semibold ">
                  Market Police{" "}
                  <span className="bg-[#009688] p-1 text-white rounded-lg">
                    9:34 pm
                  </span>
                </h2>
                {/* meeting location */}
                <p className="text-xs"> Green Road - Dhaka,Bangladesh </p>
              </div>
            </div>

            <div>
              <p className=" bg-[#009688] p-1 text-white rounded-md ">
                {" "}
                Facebook{" "}
              </p>
            </div>
          </div>
        </div>
        <Divider />
        {/* event */}
        <div className="bg-white pb-3 pt-5">
          <div className="flex justify-between items-center gap-1 px-2 ">
            <div className="px-1 flex justify-around items-center gap-4">
              {/* <SlCalender className="text-2xl font-semibold"></SlCalender> */}
              <div className="border text-center ">
                <p className="px-4 bg-[#E8F1F3]">1</p>
                <p
                  className="border px-1 text-[12px] text-white
               bg-[#009688]"
                >
                  APR
                </p>
              </div>
              <div>
                {/* meeting subject */}
                <h2 className="text-base font-semibold ">
                  Market Police{" "}
                  <span className="bg-[#009688] p-1 text-white rounded-lg">
                    9:34 pm
                  </span>
                </h2>
                {/* meeting location */}
                <p className="text-xs"> Green Road - Dhaka,Bangladesh </p>
              </div>
            </div>

            <div>
              <p className=" bg-[#009688] p-1 text-white rounded-md ">
                {" "}
                Facebook{" "}
              </p>
            </div>
          </div>
        </div>
        <Divider />
        {/* event */}
        <div className="bg-white pb-3 pt-5">
          <div className="flex justify-between items-center gap-1 px-2 ">
            <div className="px-1 flex justify-around items-center gap-4">
              {/* <SlCalender className="text-2xl font-semibold"></SlCalender> */}
              <div className="border text-center ">
                <p className="px-4 bg-[#E8F1F3]">1</p>
                <p
                  className="border px-1 text-[12px] text-white
               bg-[#009688]"
                >
                  APR
                </p>
              </div>
              <div>
                {/* meeting subject */}
                <h2 className="text-base font-semibold ">
                  Market Police{" "}
                  <span className="bg-[#009688] p-1 text-white rounded-lg">
                    9:34 pm
                  </span>
                </h2>
                {/* meeting location */}
                <p className="text-xs"> Green Road - Dhaka,Bangladesh </p>
              </div>
            </div>

            <div>
              <p className=" bg-[#009688] p-1 text-white rounded-md ">
                {" "}
                Facebook{" "}
              </p>
            </div>
          </div>
        </div>
        <Divider />
      </div>
    </div>
  );
};

export default UpComingEvent;
