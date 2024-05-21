import { TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

// const api_key = import.meta.env.VITE_IMAGE_HOSTING_API_KEY;
const api_key = "imageHostingapiKey";
// console.log(api_key);
const hosting_api = `https://api.imgbb.com/1/upload?key=${api_key}`;
const AddCustomerForm = () => {
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
    <div className="mt-10 bg-white rounded-md">
      <div className="w-full  py-3 border text-center  bg-[#E8F1F3]">
        <p className="text-center text-xl font-semibold ">
          {" "}
          Add your new customer
        </p>
      </div>
      <form className="py-5 px-5" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex justify-around gap-y-3 items-center ">
          {/* first Name */}
          <div className="form-control w-full ">
            <TextField
              focused
              id="outlined-required"
              label="First Name"
              name="firstName"
              type="text"
              placeholder="First Name"
              // InputProps={{
              //   readOnly: true,
              // }}
              sx={{ width: "90%", borderRadius: "10px" }}
              {...register("firstName", { required: true })}
            />
            {errors.firstName && (
              <h5 className="text-red-600"> This field is required </h5>
            )}
          </div>
          {/* last name */}
          <div className="form-control w-full ">
            <TextField
              focused
              id="outlined-required"
              label="Last Name"
              name="lastName"
              type="text"
              // InputProps={{
              //   readOnly: true,
              // }}
              placeholder=" last Name"
              sx={{ width: "90%", borderRadius: "10px" }}
              {...register("lastName", { required: true })}
            />
            {errors.lastName && (
              <h5 className="text-red-600"> This field is required </h5>
            )}
          </div>
        </div>

        <div className="flex  my-3 items-center justify-center">
          {/* email */}
          <div className="w-full">
            <TextField
              focused
              id="outlined-required"
              label="Customer Email"
              name="email"
              type="email"
              placeholder="customer email"
              sx={{ width: "90%", my: 3, borderRadius: "10px" }}
              {...register("email", { required: true })}
            />
            {errors.email && (
              <h5 className="text-red-600"> This field is required </h5>
            )}
          </div>
          {/* mobile*/}
          <div className="w-full">
            <div className="form-control w-full ">
              <TextField
                focused
                id="outlined-required"
                label="Customer Mobile"
                name="customer Mobile"
                type="text"
                placeholder="your customerMobile"
                sx={{ width: "90%", borderRadius: "10px" }}
                {...register("customerMobile", { required: true })}
              />
              {errors.propertyImage && (
                <h5 className="text-red-600"> This field is required </h5>
              )}
            </div>
          </div>
        </div>
        <div className="flex justify-around items-center ">
          {/* location */}
          <div className="w-full">
            <TextField
              focused
              id="outlined-required"
              label="Customer Location"
              name="customerLocation"
              type="customerLocation"
              placeholder="customer Location"
              sx={{ width: "90%", my: 3, borderRadius: "10px" }}
              {...register("customerLocation", { required: true })}
            />
            {errors.customerLocation && (
              <h5 className="text-red-600"> This field is required </h5>
            )}
          </div>
          {/* company Name */}
          <div className="form-control w-full ">
            <TextField
              focused
              id="outlined-required"
              label="Company Name"
              name="companyName"
              type="text"
              placeholder="your companyName"
              sx={{ width: "90%", borderRadius: "10px" }}
              {...register("companyName", { required: true })}
            />
            {errors.companyName && (
              <h5 className="text-red-600"> This field is required </h5>
            )}
          </div>
        </div>
        <div className="flex justify-around items-center ">
          {/* position */}
          <div className="w-full">
            <TextField
              focused
              id="outlined-required"
              label="Position"
              name="position"
              type="text"
              placeholder="customer role in the company"
              sx={{ width: "90%", my: 3, borderRadius: "10px" }}
              {...register("position", { required: true })}
            />
            {errors.position && (
              <h5 className="text-red-600"> This field is required </h5>
            )}
          </div>
          {/* start work */}
          <div className="form-control w-full ">
            <TextField
              focused
              id="outlined-required"
              label="Collaboration Date"
              name="collaborationDate"
              type="text"
              placeholder="collaboration date"
              sx={{ width: "90%", borderRadius: "10px" }}
              {...register("collaborationDate", { required: true })}
            />
            {errors.collaborationDate && (
              <h5 className="text-red-600"> This field is required </h5>
            )}
          </div>
        </div>
        <div className="flex justify-around items-center ">
          <div className="form-control w-full ">
            <div className="w-[40%] my-5 mt-7">
              <TextField
                focused
                id="outlined-multiline-static"
                label="More information"
                name="moreDetails"
                multiline
                rows={4}
                {...register("moreDetails", { required: true })}
              />
              {errors.moreDetails && (
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

export default AddCustomerForm;
