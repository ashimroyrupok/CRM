import { Divider } from "@mui/material";

const WorkAnnouncement = () => {
    return (
      <div className="rounded-md border shadow-md ">
        <div className="w-full  border rounded-md bg-[#E8F1F3]">
          <h2 className="text-xl py-3 px-5 rounded-md font-semibold">
            Works Announcements
          </h2>
        </div>
        <div className="px-4  bg-white">
          {/* head line */}
          <div className=" pb-3 pt-5">
            <div className="flex justify-between items-center gap-1 px-2 ">
              <div className="px-1 ">
                <h1 className="text-xl font-semibold">Works Type</h1>
              </div>
              <div>
                <p className="  p-1  text-xl font-semibold  ">Name of Worker</p>
              </div>
            </div>
          </div>
          <Divider />
          {/* work */}
          <div className=" pb-3 pt-5">
            <div className="flex justify-between items-center gap-1 px-2 ">
              <div className="px-1 ">
                {/* work name */}
                <h1 className="">Database Configuration</h1>
              </div>
              <div>
                {/* worker name */}
                <p className="  p-1    "> Mr Tom </p>
              </div>
            </div>
          </div>
          {/* work */}
          <div className=" pb-3 pt-5">
            <div className="flex justify-between items-center gap-1 px-2 ">
              <div className="px-1 ">
                {/* work name */}
                <h1 className="">Frontend Development</h1>
              </div>
              <div>
                {/* worker name */}
                <p className="  p-1    "> Mr Rahul</p>
              </div>
            </div>
          </div>
          {/* work */}
          <div className=" pb-3 pt-5">
            <div className="flex justify-between items-center gap-1 px-2 ">
              <div className="px-1 ">
                {/* work name */}
                <h1 className="">Backend Management</h1>
              </div>
              <div>
                {/* worker name */}
                <p className="  p-1    "> Mr Bean </p>
              </div>
            </div>
          </div>
          {/* work */}
          <div className=" pb-3 pt-5">
            <div className="flex justify-between items-center gap-1 px-2 ">
              <div className="px-1 ">
                {/* work name */}
                <h1 className="">Database Configuration</h1>
              </div>
              <div>
                {/* worker name */}
                <p className="  p-1    "> Mr Bean </p>
              </div>
            </div>
          </div>
      
        </div>
      </div>
    );
};

export default WorkAnnouncement;