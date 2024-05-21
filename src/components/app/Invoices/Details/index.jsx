import PageTop from "@/src/components/shared/PageTop/PageTop.jsx";
import InvoicesDetail from "./InvoicesDetail";

const index = () => {
  return <div>
    <PageTop title={"Payment Details"} />
    <InvoicesDetail/>
  </div>;
};

export default index;
