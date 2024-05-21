import React, { useState } from "react";
import { CiMenuKebab } from "react-icons/ci";
const List = () => {
  // count will come from database .base on document collection length
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
    <div className="overflow-x-auto lg:overflow-x-hidden  rounded-md w-screen md:w-[calc(100vw-290px)] bg-white">
      <table className="table">
        {/* head */}
        <thead className="w-full  border rounded-md bg-[#E8F1F3]">
          <tr>
            <th>
              <label>
                {/* <input type="checkbox" className="checkbox" /> */}
                Select
              </label>
            </th>
            <th>Name</th>
            <th>Company</th>
            <th>Position</th>
            <th>mail</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr className="hover:bg-gray-100">
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <td>Mr Jhon</td>
            <td>Meta</td>
            <td>Software Engineer</td>
            <td>test@gmail.com</td>
            <td>017xxxxxxx</td>
            <td>
             
              <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className=" m-1">
                  <CiMenuKebab />
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a>Edit</a>
                  </li>
                  <li>
                    <a>Delete</a>
                  </li>
                </ul>
              </div>
            </td>
          </tr>
          {/* row 1 */}
          <tr className="hover:bg-gray-100">
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <td>Mr Jhon</td>
            <td>Meta</td>
            <td>Software Engineer</td>
            <td>test@gmail.com</td>
            <td>017xxxxxxx</td>
            <td>
             
              <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className=" m-1">
                  <CiMenuKebab />
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a>Edit</a>
                  </li>
                  <li>
                    <a>Delete</a>
                  </li>
                </ul>
              </div>
            </td>
          </tr>
          {/* row 1 */}
          <tr className="hover:bg-gray-100">
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <td>Mr Jhon</td>
            <td>Meta</td>
            <td>Software Engineer</td>
            <td>test@gmail.com</td>
            <td>017xxxxxxx</td>
            <td>
             
              <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className=" m-1">
                  <CiMenuKebab />
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a>Edit</a>
                  </li>
                  <li>
                    <a>Delete</a>
                  </li>
                </ul>
              </div>
            </td>
          </tr>
        
        
        </tbody>
      </table>
      <div className="w-full py-4 text-center">
        {/* <p>Current page: {currentPage}</p> */}
        {/* <button>Prev</button> */}
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

export default List;
