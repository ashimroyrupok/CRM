import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
const AddForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);

    try {
      const imageFile = { image: data.propertyImage[0] };
      // console.log(imageFile);
      const res = await axiosPublic.post(hosting_api, imageFile, {
        headers: {
          "content-type": "multipart/form-data",
        },
      });

      console.log(res.data);
      console.log(res.data?.data?.display_url);
      const image = res.data?.data?.display_url;
      if (res.data.success) {
        const CustomerInfo = {
          //    all
        };
      }
    } catch {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Something Went wrong",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <div className="mt-10  bg-white rounded-md">
      <div className="w-full  py-3 border text-center relative  bg-[#E8F1F3]">
        <p className="text-center text-xl font-semibold "> Add New Invoice</p>
      </div>
      <form className="py-5 px-5" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex justify-around gap-y-3 items-center ">
          {/* Project Name */}
          <div className="form-control w-full  border-blue-500">
            <FormControl className="">
              <InputLabel id="demo-simple-select-label">
                Project Name
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                //   value={}
                label="Project Name"
                name="projectName"
                placeholder="Task Name"
                // InputProps={{
                //   readOnly: true,
                // }}
                sx={{ width: "90%", borderRadius: "10px" }}
                {...register("projectName", { required: true })}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>

            {errors.projectName && (
              <h5 className="text-red-600"> This field is required </h5>
            )}
          </div>
          {/* Invoice From */}
          <div className="form-control w-full ">
            <TextField
              //   focused
              id="outlined-required"
              label="Invoice From"
              name="invoiceFrom"
              type="text"
              placeholder=" Invoice From"
              sx={{ width: "90%", borderRadius: "10px" }}
              {...register("invoiceFrom", { required: true })}
            />
            {errors.invoiceFrom && (
              <h5 className="text-red-600"> This field is required </h5>
            )}
          </div>
        </div>

        <div className="flex  my-3 items-center justify-center">
          {/* Amount */}
          <div className="w-full">
            <TextField
              //   focused
              id="outlined-required"
              label="Amount"
              name="amount"
              type="number"
              placeholder="amount"
              sx={{ width: "90%", my: 3, borderRadius: "10px" }}
              {...register("amount", { required: true })}
            />
            {errors.amount && (
              <h5 className="text-red-600"> This field is required </h5>
            )}
          </div>
          {/* status*/}
          <div className="w-full">
            <TextField
              //   focused
              id="outlined-required"
              name="transactionTime"
              type="datetime-local"
              sx={{ width: "90%", my: 3, borderRadius: "10px" }}
              {...register("transactionTime", { required: true })}
            />
            {errors.transactionTime && (
              <h5 className="text-red-600"> This field is required </h5>
            )}
          </div>
        </div>

        <div className="flex justify-around gap-y-3 items-center ">
          {/* Payment Method */}
          <div className="form-control w-full  border-blue-500">
            <FormControl className="">
              <InputLabel id="demo-simple-select-label">
                Payment Method
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                //   value={}
                label="Payment Method"
                name="projectName"
                placeholder="Task Name"
                // InputProps={{
                //   readOnly: true,
                // }}
                sx={{ width: "90%", borderRadius: "10px" }}
                {...register("projectName", { required: true })}
              >
                <MenuItem value={"bkash"}>Bkash</MenuItem>
                <MenuItem value={"bank"}>Bank</MenuItem>
                <MenuItem value={"debit"}>Debit</MenuItem>
                <MenuItem value={"nagad"}>Nagad</MenuItem>
                <MenuItem value={"rocket"}>Rocket</MenuItem>
              </Select>
            </FormControl>

            {errors.projectName && (
              <h5 className="text-red-600"> This field is required </h5>
            )}
          </div>
          {/* Account number*/}
          <div className="form-control w-full ">
            <TextField
              //   focused
              id="outlined-required"
              label="Account Number"
              name="accountNumber"
              type="text"
              placeholder=" Received Account"
              sx={{ width: "90%", borderRadius: "10px" }}
              {...register("accountNumber", { required: true })}
            />
            {errors.accountNumber && (
              <h5 className="text-red-600"> This field is required </h5>
            )}
          </div>
        </div>
{/* optional  */}
        <div className="flex justify-around items-center ">
          <div className="form-control w-full ">
            <div className="w-[40%] my-5 mt-7">
              <TextField
                id="outlined-multiline-static"
                label="Note(Optional)"
                name="note"
                placeholder="optional"
                multiline
                rows={4}
                {...register("note", { required: true })}
              />
              {errors.note && (
                <h5 className="text-red-600"> This field is required </h5>
              )}
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center w-full">
          <input
            className="btn  bg-gradient-to-r from-fuchsia-500 to-violet-500 text-white  w-full mt-6"
            type="submit"
            value="Submit Now"
          />
        </div>
      </form>
    </div>
  );
};

export default AddForm;
