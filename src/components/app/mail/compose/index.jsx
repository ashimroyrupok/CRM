import PageTop from "@/src/components/shared/PageTop/PageTop.jsx";
import WriteMail from "./WriteMail";

const index = () => {
  return <div>
    <PageTop title={"Compose"} />
    <WriteMail/>
  </div>;
};

export default index;
