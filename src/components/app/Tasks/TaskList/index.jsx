import TaskTable from "./TaskTable";
import PageTop from "@/src/components/shared/PageTop/PageTop.jsx";

const index = () => {


  return (
    <div className="relative">
      <PageTop title={"Task List"} />

      <TaskTable />
   
    </div>
  );
};

export default index;
