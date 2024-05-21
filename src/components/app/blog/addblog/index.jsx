import PageTop from "@/src/components/shared/PageTop/PageTop.jsx";
import Form from "./Form";

const index = () => {
    return (
        <div>
            <PageTop title={"Add New Blog"} />
            <Form />
        </div>
    );
};

export default index;