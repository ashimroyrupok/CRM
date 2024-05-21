import PageTop from "@/src/components/shared/PageTop/PageTop.jsx";
import Task from "./Task"
const index = () => {
    return (
        <div>
            <PageTop title={"Add New Task"} />
            <div>
                <Task/>
            </div>
        </div>
    );
};

export default index;