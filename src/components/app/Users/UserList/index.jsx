import List from "./List";
import PageTop from "@/src/components/shared/PageTop/PageTop.jsx";

const index = () => {
  return (
    <div>
      <PageTop title={"User List"} />
      <List />
    </div>
  );
};

export default index;
