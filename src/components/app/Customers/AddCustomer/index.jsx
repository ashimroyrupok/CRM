import AddCustomerForm from "./AddCustomerForm";
import PageTop from "@/src/components/shared/PageTop/PageTop.jsx";


const index = () => {
    return (
        <div>
            <PageTop title={"Add Customer"}/>
            <AddCustomerForm/>
        </div>
    );
};

export default index;