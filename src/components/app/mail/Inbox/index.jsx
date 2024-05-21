import PageTop from "@/src/components/shared/PageTop/PageTop.jsx";
import Messages from "./Messages";

const index = () => {
  return <div>
    <PageTop title={"Inbox"} />
    <Messages/>
  </div>;
};

export default index;
