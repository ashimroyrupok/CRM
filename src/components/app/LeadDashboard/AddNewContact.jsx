import { TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { RxCross2 } from "react-icons/rx";
import Swal from "sweetalert2";

const AddNewContact = ({ setIsOpen }) => {
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
const handleClick=()=>{
  console.log("hello world")
}
  return (
    <div className="rounded-md border mt-20  bg-white absolute z-50  w-[90%] md:w-[75%] lg:w-[50%] shadow-2xl  ">
      <div className="    ">
        <div
          // onClick={() => alert("hello")}
          className="w-full  py-3 border -mt-3 relative  text-right  bg-[#E8F1F3]"
        >
          <p className="text-center text-xl font-semibold ">Update Your Task</p>
          <button
            onClick={() => setIsOpen(false)}
            className="text-2xl font-semibold p-2 z-50  absolute   cursor-pointer right-2 top-1"
          >
            <RxCross2 className="text-2xl font-extrabold" />
          </button>
        </div>
        <form className="py-5 px-5" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex  my-3 items-center justify-center">
            {/* email */}
            <div className="w-full">
              <TextField
                focused
                id="outlined-required"
                label="Email"
                name="email"
                type="email"
                placeholder="type here email address"
                sx={{ width: "90%", my: 3, borderRadius: "10px" }}
                {...register("email")}
              />
            </div>
            {/* subject */}
            <div className="w-full">
              <TextField
                focused
                id="outlined-required"
                label="Subject"
                name="subject"
                type="text"
                placeholder="Subject"
                sx={{ width: "90%", my: 3, borderRadius: "10px" }}
                {...register("subject", { required: true })}
              />
            </div>
          </div>
          <div className="flex  justify-around gap-y-3 items-center ">
            {/*  Name */}
            <div className="form-control w-full ">
              <TextField
                focused
                id="outlined-required"
                label="Name"
                name="name"
                type="text"
                placeholder="Contact Name"
                sx={{ width: "90%", borderRadius: "10px" }}
                {...register("name", { required: true })}
              />
              {errors.name && (
                <h5 className="text-red-600"> This field is required </h5>
              )}
            </div>
            {/* mobile */}
            <div className="form-control w-full ">
              <TextField
                focused
                id="outlined-required"
                label="Mobile"
                name="mobile"
                type="number"
                placeholder=" type here mobile number"
                sx={{ width: "90%", borderRadius: "10px" }}
                {...register("mobile")}
              />
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

export default AddNewContact;
