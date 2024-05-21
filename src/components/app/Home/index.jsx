import Card from "./Card";
import PageTop from "@/src/components/shared/PageTop/PageTop.jsx";
import UpComingEvent from "./UpComingEvent.jsx";
import RunningProject from "./RunningProject.jsx";
import WorkDeadline from "./WorkDeadline.jsx"
import WorkAnnouncement from './WorkAnnouncement.jsx';
import YearlyReport from "./YearlyReport.jsx"
import WeeklyReport from "./WeeklyReport.jsx";
import TotalLead from "./TotalLead.jsx";

const index = () => {
    return (
        <div className="px-5">
            <PageTop title={"Overview Dashboard"} />
            <div>
                <Card />
            </div>

            <div className=" grid mt-10 grid-cols-1 lg:grid-cols-2 gap-5">
                <UpComingEvent />
                <RunningProject/>
                <WorkDeadline/>
                <WorkAnnouncement/>
                <WeeklyReport/>
                <YearlyReport/>
                <TotalLead/>

            </div>

        </div>
    );
};

export default index;