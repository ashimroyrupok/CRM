import AddForm from "./AddForm";
import PageTop from "@/src/components/shared/PageTop/PageTop.jsx";


const index = () => {
    return (
        <div>
                <PageTop title={"Add Invoice"} />
            <AddForm/>
        </div>
    );
};

export default index;