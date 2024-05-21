import { Divider } from "@mui/material";
import { usePathname } from "next/navigation";

const InvoicesDetail = () => {

  const pathename = usePathname()
  console.log(pathename)
  return (
    <div className="bg-white border shadow-md rounded-md p-5">
      <div>
        <div className="flex justify-between items-center gap-2">
          {/*  */}
          <div className="text-left">
            <h2 className="text-3xl font-semibold ">CRMPWA</h2>
            <p className=" font-semibold my-3">Invoice ID: X039B2Xa43 </p>
          </div>
          {/*  */}
          <div className="text-right">
            <h3 className="text-xl my-3 font-semibold">Invoice From</h3>
            <h4 className="font-semibold">Company Name</h4>
            <p>Address,address,address</p>
          </div>
        </div>
        <Divider className="my-5" />

        <div className="flex justify-between items-center gap-2">
          <div className="text-left">
            <h2 className=" font-semibold text-2xl my-3">Billed to </h2>
            <p className="font-semibold">Depth Search</p>
            <p>Account Number</p>
          </div>
          <div className="text-right">
            <h3 className="text-xl  font-semibold">Payment Details</h3>
            <h4 className="font-semibold">Mobile-Banking?Bank/Debit Card</h4>
            <p>Account Number: 01xxxxxxx</p>
            <p>Bkash,Nagad</p>
          </div>
        </div>

        {/* amount  date and time*/}

        <div className="my-6 py-6  p-1 rounded-md bg-gradient-to-r from-fuchsia-500 to-violet-500 text-white lg:font-semibold flex justify-evenly items-center gap-2">
          <h3>Bill Date:23 jul 2024</h3>
          <h3>Amount: $3400 </h3>
          <h3> Project Name: Web Development </h3>
        </div>
      </div>

      {/* more payment from same company  */}
      <div>
        <button className="bg-sky-500 btn text-white my-4 ">
          More Payments From Company
        </button>

        <div className="overflow-x-auto lg:overflow-x-hidden shadow-md rounded-md w-screen md:w-[calc(100vw-350px)] bg-white">
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
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default InvoicesDetail;
