import React, { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaPencilAlt } from "react-icons/fa";
import EditTable from "./EditTable";

const TaskTable = () => {
  // count will come from database
  const [isOpen, setIsOpen] = useState(false);
  // console.log(isOpen);
  const [count, setCount] = useState(40);
  const [itemPerPage, setItemPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(0);

  const numberOfPages = Math.ceil(count / itemPerPage);

  const pages = [...Array(numberOfPages).keys()];

  const handleItemsPerPage = (e) => {
    const val = parseInt(e.target.value);
    console.log(val);
    setItemPerPage(val);
    setCurrentPage(0);
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };
  return (
    <div
      className={` ${
        isOpen ? "bg-black bg-opacity-45" : "bg-white"
      } overflow-x-auto lg:overflow-x-hidden shadow-md rounded-md w-screen md:w-[calc(100vw-290px)] bg-white  `}
    >
      <table className="table">
        {/* head */}
        <thead className="w-full  border rounded-md bg-[#E8F1F3]">
          <tr>
            {/* <th>
              <label>
                Select
              </label>
            </th> */}
            <th> Task Name</th>
            <th>Due Date</th>
            <th>Description</th>
            <th>Assign to</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr>
            <td> Collect account information </td>
            <td> 3/4/2024 </td>
            <td>Need to work in Dhaka Bank</td>
            <td>Mr David</td>
            <td>
              <button className="btn btn-sm bg-[#009688] text-white">
                completed
              </button>
            </td>
            <td>
              <div className="flex w-full justify-center items-center gap-1">
                <button
                  onClick={() => setIsOpen(true)}
                  className="bg-[#009688] px-1 border py-1 rounded-sm "
                >
                  <FaPencilAlt className="text-white  font-semibold" />
                </button>
                <button className="bg-red-500 px-1 border py-1 rounded-sm ">
                  <RiDeleteBin6Line className="text-white  font-semibold" />
                </button>
              </div>
            </td>
          </tr>
          <tr>
            <td> Collect account information </td>
            <td> 3/4/2024 </td>
            <td>Need to work in Dhaka Bank</td>
            <td>Mr David</td>
            <td>
              <button className="btn btn-sm bg-[#009688] text-white">
                completed
              </button>
            </td>
            <td>
              <div className="flex w-full justify-center items-center gap-1">
                <button className="bg-[#009688] px-1 border py-1 rounded-sm ">
                  <FaPencilAlt className="text-white  font-semibold" />
                </button>
                <button className="bg-red-500 px-1 border py-1 rounded-sm ">
                  <RiDeleteBin6Line className="text-white  font-semibold" />
                </button>
              </div>
            </td>
          </tr>
          <tr>
            <td> Collect account information </td>
            <td> 3/4/2024 </td>
            <td>Need to work in Dhaka Bank</td>
            <td>Mr David</td>
            <td>
              <button className="btn btn-sm btn-warning text-white">
                pending
              </button>
            </td>
            <td>
              <div className="flex w-full justify-center items-center gap-1">
                <button className="bg-[#009688] px-1 border py-1 rounded-sm ">
                  <FaPencilAlt className="text-white  font-semibold" />
                </button>
                <button className="bg-red-500 px-1 border py-1 rounded-sm ">
                  <RiDeleteBin6Line className="text-white  font-semibold" />
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="w-full py-4 text-center">
        {/* <p>Current page: {currentPage}</p> */}
        <button
          className=" px-1 lg:py-2 lg:px-3  rounded font-medium select-none border text-black  bg-[#E8F1F3] transition-colors hover:border-blue-600 hover:bg-gradient-to-r from-fuchsia-300 to-violet-300  "
          onClick={handlePrevPage}
        >
          ⪻ Prev
        </button>
        {pages.map((page) => (
          <button
            className={`${
              currentPage === page
                ? "bg-gradient-to-r from-fuchsia-500 to-violet-500 text-white font-semibold"
                : ""
            } px-1 lg:py-2 lg:px-3  rounded font-medium select-none border text-black  bg-[#E8F1F3] transition-colors hover:bg-gradient-to-r from-fuchsia-400 to-violet-400`}
            onClick={() => setCurrentPage(page)}
            key={page}
          >
            {page}
          </button>
        ))}
        <button
          className=" px-1 lg:py-2 lg:px-3  rounded font-medium select-none border text-black  bg-[#E8F1F3] transition-colors hover:border-blue-600 hover:bg-gradient-to-r from-fuchsia-300 to-violet-300  "
          onClick={handleNextPage}
        >
          Next ⪼
        </button>

        <select
          className="select  select-warning border-2 ml-2  border-[#E8F1F3]"
          value={itemPerPage}
          onChange={handleItemsPerPage}
          name=""
          id=""
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
        </select>
      </div>
      {/* modal  */}
      <div
        className={` fixed left-0   md:left-[32%]  ${
          isOpen ? "-translate-y-2" : "-translate-y-96 opacity-0"
        }  w-full md:w-[80%] lg:w-full bg-green-500 p-5 top-10  z-50 transition-all duration-700 mx-auto `}
      >
        <EditTable setIsOpen={setIsOpen} />
      </div>
    </div>
  );
};

export default TaskTable;
