import PageTop from "@/src/components/shared/PageTop/PageTop.jsx";

import ListTable from "./ListTable";

const index = () => {
  return (
    <div>
        <PageTop title={"Invoices List"}/>
      <ListTable />
    </div>
  );
};

export default index;
