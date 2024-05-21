import { useState } from "react";

const PaginationButton = () => {
  const [count, setCount] = useState(40);
  const [itemPerPage, setItemPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(0);

  const numberOfPages = Math.ceil(count / itemPerPage);

  const pages = [...Array(numberOfPages).keys()];
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
    <div className="w-full py-8 text-center">
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
    </div>
  );
};

export default PaginationButton;
