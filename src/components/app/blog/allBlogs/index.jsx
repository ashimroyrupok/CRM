import PageTop from "@/src/components/shared/PageTop/PageTop.jsx";
import Blogs from "./Blogs";

const index = () => {
    return (
        <div>
            <PageTop title={'Blog'} />
            <Blogs/>
        </div>
    );
};

export default index;