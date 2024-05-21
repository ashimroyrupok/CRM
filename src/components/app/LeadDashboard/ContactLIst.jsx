import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import AddNewContact from "./AddNewContact";
import { FaPencilAlt } from "react-icons/fa";
import SentMail from "./SentMail";



const ContactLIst = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openSentMessage,setOpenSentMessage]= useState(false)
  const [mailId, setMailId] = useState([]);
  console.log(isOpen);
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
  const handleMail = (e) => {
    setMailId(e.target.value);
    // mail.push(e.target.value)
    // console.log(e.target.value);
  };

  return (
    <div className="w-full bg-white rounded-lg  shadow-md border  ">
      <div
        className={`flex justify-between items-center  px-4 rounded-md py-2  bg-[#F3F3F3] `}
      >
        <div className="">
          <button
            onClick={() => setIsOpen(true)}
            className=" hover:bg-[#75c5bd] bg-[#009688] duration-500   btn flex  text-white  "
          >
            <FaPlus className="font-bold" /> <span>Add New Contact</span>
          </button>
          <button className="bg-[#009688] btn text-white my-1 ">
            Contact List
          </button>
        </div>
        <div>
          <button
            onClick={() => setOpenSentMessage(true)}
            disabled={mailId.length == 0}
            className={` btn text-white  bg-[#009688] disabled:opacity-30 opacity-100 `}
          >
            Send Message
          </button>
        </div>
      </div>
      {/* table */}
      <div className="overflow-x-auto m-5  lg:overflow-x-hidden shadow-md rounded-md w-screen md:w-[calc(100vw-330px)] bg-white">
        <table className="table px-4">
          {/* head */}
          <thead className="w-full  border rounded-md bg-[#E8F1F3]">
            <tr>
              <th>
                <label>Select</label>
              </th>
              <th> Name </th>
              <th>Mobile</th>
              <th>Email</th>
              <th> Subject </th>
              <th>Edit</th>
            </tr>
          </thead>

          <tbody>
            {/* row 1 */}
            <tr className="hover:bg-gray-100">
              <td>
                <input
                  onClick={(e) => handleMail(e)}
                  type="checkbox"
                  className="checkbox"
                />
              </td>
              <td> John Doe </td>
              <td> 017xxxxx </td>
              <td> johndoe@gmail.com </td>
              <td> mern project</td>
              <td>
                <button
                  // onClick={() => setIsOpen(true)}
                  className="bg-[#009688] px-1 border py-1 rounded-sm "
                >
                  <FaPencilAlt className="text-white  font-semibold" />
                </button>
              </td>
            </tr>
            {/* row 1 */}
            <tr className="hover:bg-gray-100">
              <td>
                <input
                  onClick={(e) => handleMail(e)}
                  type="checkbox"
                  className="checkbox"
                />
              </td>
              <td> John Doe </td>
              <td> 017xxxxx </td>
              <td> johndoe@gmail.com </td>
              <td> mern project</td>
              <td>
                <button
                  onClick={() => setIsOpen(true)}
                  className="bg-[#009688] px-1 border py-1 rounded-sm "
                >
                  <FaPencilAlt className="text-white  font-semibold" />
                </button>
              </td>
            </tr>
            {/* row 1 */}
            <tr className="hover:bg-gray-100">
              <td>
                <input
                  onClick={(e) => handleMail(e)}
                  type="checkbox"
                  className="checkbox"
                />
              </td>
              <td> John Doe </td>
              <td> 017xxxxx </td>
              <td> johndoe@gmail.com </td>
              <td> mern project</td>
              <td>
                <button
                  onClick={() => setIsOpen(true)}
                  className="bg-[#009688] px-1 border py-1 rounded-sm "
                >
                  <FaPencilAlt className="text-white  font-semibold" />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        {/* table footer
         */}
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
      {/* modal for new contact   */}
      <div
        className={` fixed left-0   md:left-[32%]  ${
          isOpen ? "translate-y-14" : "-translate-y-96 opacity-0"
        }  w-full md:w-[80%] lg:w-full  p-5 top-10  z-50 transition-all duration-700 mx-auto `}
      >
        <AddNewContact setIsOpen={setIsOpen} />
      </div>
      {/* mail sent modal   */}
      <div
        className={` fixed left-0   md:left-[32%]  ${
          openSentMessage ? "-translate-y-2" : "-translate-y-96 opacity-0"
        }  w-full md:w-[80%] lg:w-full  p-5 top-10  z-50 transition-all duration-700 mx-auto `}
      >
        <SentMail setOpenSentMessage={setOpenSentMessage} />
      </div>
    </div>
  );
};

export default ContactLIst;
