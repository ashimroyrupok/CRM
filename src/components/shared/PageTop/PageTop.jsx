import { AiOutlineInsertRowBelow } from "react-icons/ai";

const PageTop = ({title}) => {

  return (
    <div className="   rounded-md bg-white z-0 p-1  my-6 ">
      <div className="flex justify-between items-center gap-3">
        <div className="flex  items-center gap-0 lg:gap-2">
          <div className=" w-6 h-6 md:w-9 md:h-9 mx-3 flex justify-center items-center rounded-sm text-white bg-gradient-to-r from-fuchsia-500 to-violet-500 ">
            <AiOutlineInsertRowBelow />
          </div>
          <p className=" text-[12px] gap-1 lg:text-xl text-[#1F1F1F] flex  font-semibold ">
            <span>{title}</span>
          </p>
        </div>

        <div className="px-4">
          <p className="flex text-[12px] gap-1 lg:text-xl">
            <span className="text-blue-500 font-semibold ">Dashboard</span> /
            <span className="font-semibold"> {title} </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PageTop;
