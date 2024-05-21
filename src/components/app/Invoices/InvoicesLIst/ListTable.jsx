import React, { useState } from "react";
import Link from "next/link";
const ListTable = () => {
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
    <div className="overflow-x-auto lg:overflow-x-hidden shadow-md rounded-md w-screen md:w-[calc(100vw-290px)] bg-white">
      <table className="table">
        {/* head */}
        <thead className="w-full  border rounded-md bg-[#E8F1F3]">
          <tr>
            {/* <th>
              <label>
                Select
              </label>
            </th> */}
            <th> Invoice Id</th>
            <th>Invoice From</th>
            <th>Amount</th>
            <th>Date and Time</th>
            <th>Project Name</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr className="hover:bg-gray-100">
            <td> X029Ad353c </td>
            <td> Mr Tom </td>
            <td> $34234 </td>
            <td>
              12/4/2024 <span className="font-semibold">(8:32pm)</span>{" "}
            </td>
            <td>
              <button className="btn btn-sm bg-[#009688] text-white">
                Social Media
              </button>
            </td>
            <td>
              <Link href={`/invoicesList/a`}>
                {" "}
                <p className="btn btn-sm">Details...</p>{" "}
              </Link>
            </td>
          </tr>
          {/* row 1 */}
          <tr className="hover:bg-gray-100">
            <td> X029Ad353c </td>
            <td> Mr Tom </td>
            <td> $34234 </td>
            <td>
              12/4/2024 <span className="font-semibold">(8:32pm)</span>{" "}
            </td>
            <td>
              <button className="btn btn-sm bg-[#009688] text-white">
                Social Media
              </button>
            </td>
            <td>
              <p className="btn btn-sm">Details...</p>
            </td>
          </tr>
          {/* row 1 */}
          <tr className="hover:bg-gray-100">
            <td> X029Ad353c </td>
            <td> Mr Tom </td>
            <td> $34234 </td>
            <td>
              12/4/2024 <span className="font-semibold">(8:32pm)</span>{" "}
            </td>
            <td>
              <button className="btn btn-sm bg-[#009688] text-white">
                Social Media
              </button>
            </td>
            <td>
              <p className="btn btn-sm">Details...</p>
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
    </div>
  );
};

export default ListTable;
