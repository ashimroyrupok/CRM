import { TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const UpdateUser = ({ setIsOpen }) => {
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
    <div className=" rounded-md border absolute z-50  w-[90%] md:w-[75%] lg:w-[50%] shadow-2xl  ">
      <div className="mt-10 z-50 bg-white rounded-md">
        <div className="w-full  py-3 border text-center relative  bg-[#E8F1F3]">
          <p className="text-center text-xl font-semibold ">
            {" "}
            Update User Details
          </p>
          <h2
            onClick={() => setIsOpen(false)}
            className="text-2xl font-semibold absolute p-2 hover:cursor-pointer right-2 top-1"
          >
            X
          </h2>
        </div>
        <form className="py-5 px-5" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex justify-around gap-y-3 items-center ">
            {/* User Name */}
            <div className="form-control w-full ">
              <TextField
                focused
                id="outlined-required"
                label="User Name"
                name="userName"
                type="text"
                placeholder="User Name"
                sx={{ width: "90%", borderRadius: "10px" }}
                {...register("userName", { required: true })}
              />
              {errors.userName && (
                <h5 className="text-red-600"> This field is required </h5>
              )}
            </div>
            {/* company name */}
            <div className="form-control w-full ">
              <TextField
                focused
                id="outlined-required"
                label="Company Name"
                name="companyName"
                type="text"
                placeholder=" company name"
                sx={{ width: "90%", borderRadius: "10px" }}
                {...register("companyName", { required: true })}
              />
              {errors.companyName && (
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
                label="Email"
                name="email"
                type="email"
                placeholder="Type your email"
                sx={{ width: "90%", my: 3, borderRadius: "10px" }}
                {...register("email", { required: true })}
              />
              {errors.email && (
                <h5 className="text-red-600"> This field is required </h5>
              )}
            </div>
            {/* password*/}
            <div className="w-full">
              <TextField
                focused
                id="outlined-required"
                label="Password"
                name="password"
                type="password"
                placeholder="Type your password"
                sx={{ width: "90%", my: 3, borderRadius: "10px" }}
                {...register("password", { required: true })}
              />
              {errors.password && (
                <h5 className="text-red-600"> This field is required </h5>
              )}
            </div>
          </div>
          <div className="flex  my-3 items-center justify-center">
            {/* role */}
            <div className="w-full">
              <div className="form-control w-full ">
                <select
                  className="select border-blue-500 select-info w-[90%] "
                  name="role"
                  placeholder=" User role"
                  sx={{ width: "90%", borderRadius: "10px" }}
                  {...register("customerMobile", { required: true })}
                >
                  <option disabled selected>
                   User Role
                  </option>
                  <option value={"client"}>client</option>
                  <option value={"admin"}>admin</option>
                </select>

                {errors.role && (
                  <h5 className="text-red-600"> This field is required </h5>
                )}
              </div>
            </div>
            {/* status*/}
            <div className="w-full">
              <div className="form-control w-full ">
                <select
                  className="select border-blue-500 select-info w-[90%] "
                  name="status"
                  placeholder="Client status"
                  sx={{ width: "90%", borderRadius: "10px" }}
                  {...register("customerMobile", { required: true })}
                >
                  <option disabled selected >
                    Client Status
                  </option>
                  <option value={"active"}>active</option>
                  <option value={"inactive"}>Inactive</option>
                </select>

                {errors.status && (
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
    </div>
  );
};

export default UpdateUser;
