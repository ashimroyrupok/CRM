import PageTop from "@/src/components/shared/PageTop/PageTop.jsx";

import List from "./List";

const index = () => {
    return (
        <div>
            <PageTop title={"Customer List"}/>
            
            <List/>
        </div>
    );
};

export default index;