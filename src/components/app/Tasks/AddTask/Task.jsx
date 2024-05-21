import { TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";


const Task = () => {
   
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
        <p className="text-center text-xl font-semibold "> Add New Task</p>
      </div>
      <form className="py-5 px-5" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex justify-around gap-y-3 items-center ">
          {/* Task Name */}
          <div className="form-control w-full ">
            <TextField
              focused
              id="outlined-required"
              label="Task Name"
              name="taskName"
              type="text"
              placeholder="Task Name"
              // InputProps={{
              //   readOnly: true,
              // }}
              sx={{ width: "90%", borderRadius: "10px" }}
              {...register("taskName", { required: true })}
            />
            {errors.taskName && (
              <h5 className="text-red-600"> This field is required </h5>
            )}
          </div>
          {/* deadline */}
          <div className="form-control w-full ">
            <TextField
              focused
              id="outlined-required"
              label="Task Deadline"
              name="deadline"
              type="datetime-local"
              placeholder=" Task Deadline"
              sx={{ width: "90%", borderRadius: "10px" }}
              {...register("deadline", { required: true })}
            />
            {errors.deadline && (
              <h5 className="text-red-600"> This field is required </h5>
            )}
          </div>
        </div>

        <div className="flex  my-3 items-center justify-center">
          {/* Assign to */}
          <div className="w-full">
            <TextField
              focused
              id="outlined-required"
              label="Assign to"
              name="assignTo"
              type="text"
              placeholder="customer assign to"
              sx={{ width: "90%", my: 3, borderRadius: "10px" }}
              {...register("assignTo", { required: true })}
            />
            {errors.assignTo && (
              <h5 className="text-red-600"> This field is required </h5>
            )}
          </div>
          {/* status*/}
          <div className="w-full">
            <div className="form-control w-full ">
              {/* <TextField
                focused
                id="outlined-required"
                label="Customer Mobile"
                name="customer Mobile"
                type="text"
                placeholder="your customerMobile"
                sx={{ width: "90%", borderRadius: "10px" }}
                {...register("customerMobile", { required: true })}
              /> */}
              <select
                className="select border-blue-500 select-info w-[90%] "
                name="status"
                placeholder="task status"
                sx={{ width: "90%", borderRadius: "10px" }}
                {...register("customerMobile", { required: true })}
              >
                <option disabled selected>
                  Task Status
                </option>
                <option value={"pending"}>pending</option>
                <option value={"inProgress"}>In progress</option>
                <option value={"completed"}>Completed</option>
              </select>

              {errors.status && (
                <h5 className="text-red-600"> This field is required </h5>
              )}
            </div>
          </div>
        </div>
     
       
        <div className="flex justify-around items-center ">
          <div className="form-control w-full ">
            <div className="w-[40%] my-5 mt-7">
              <TextField
                focused
                id="outlined-multiline-static"
                label="Task Description"
                name="description"
                multiline
                rows={4}
                {...register("description", { required: true })}
              />
              {errors.description && (
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

export default Task;
