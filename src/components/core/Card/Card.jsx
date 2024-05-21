import { IoPersonAdd } from "react-icons/io5";
import { BiSolidUpArrow } from "react-icons/bi";
import { GrUserManager } from "react-icons/gr";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { GiFiles } from "react-icons/gi";
const Card = () => {
  return (
    <div className=" mt-3 md:mt-6">
      <div className="w-full cursor-pointer text-start grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 lg:gap-8">
        {/* active client */}
        <div className=" group w-full flex flex-col  bg-[#253145] dark:text-white  p-5 hover:bg-[#35bd8d] duration-700 ease-linear rounded-md gap-3">
          <div className="flex  justify-between items-start dark:text-white text-slate-600 group-hover:text-white">
            <IoPersonAdd className="text-5xl font-bold text-white"></IoPersonAdd>
            <div className="    flex justify-center items-center text-xl">
              <h2 className="text-xl flex  items-center justify-center gap-1  font-bold">
                {" "}
                <span>1445</span> <BiSolidUpArrow />
              </h2>
            </div>
          </div>
          <span className=" text-xl lg:text-2xl  font-semibold my-2">
            {" "}
            Active Client{" "}
          </span>
        </div>
        {/* active admin */}
        <div className=" group  w-full bg-[#253145] dark:text-white  p-5 hover:bg-[#35bd8d] duration-700 ease-linear rounded-md gap-3">
          <div className="flex  justify-between items-start dark:text-white text-slate-600 group-hover:text-white">
            <GrUserManager className="text-5xl font-bold text-white"></GrUserManager>
            <div className="    flex  items-center text-xl">
              <h2 className="text-xl flex  items-center justify-center gap-1  font-bold">
                <span>3</span> <BiSolidUpArrow />
              </h2>
            </div>
          </div>
          <h2 className="text-xl lg:text-2xl  font-semibold my-2">
            {" "}
            Active Admin{" "}
          </h2>
        </div>
        {/* Total Expenses */}
        <div className=" group w-full  bg-[#253145] dark:text-white  p-5 hover:bg-[#35bd8d] duration-700 ease-linear rounded-md gap-3">
          <div className="   flex justify-between  gap-6  dark:text-white  text-slate-600 group-hover:text-white">
            <FaMoneyCheckDollar className="text-5xl font-bold text-white"></FaMoneyCheckDollar>
            <div className="     text-xl">
              <h2 className="text-xl flex  items-center justify-center gap-1  font-bold">
                <span> $ 135</span> <BiSolidUpArrow />
              </h2>
            </div>
          </div>
          <h2 className="text-xl lg:text-2xl  font-semibold my-2">
            {" "}
            Total Expenses{" "}
          </h2>
        </div>
        {/* Running Project */}
        <div className=" group  w-full bg-[#253145] dark:text-white  p-5 hover:bg-[#35bd8d] duration-700 ease-linear rounded-md gap-3">
          <div className="flex  justify-between  dark:text-white text-slate-600 group-hover:text-white">
            <GiFiles className="text-5xl font-bold text-white"></GiFiles>
            <div className="    flex  items-center text-xl">
              <h2 className="text-xl flex  items-center justify-center gap-1  font-bold">
                <span> 5</span> <BiSolidUpArrow />
              </h2>
            </div>
          </div>
          <h2 className="text-xl lg:text-2xl  font-semibold my-2">
            Running Projects
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Card;
