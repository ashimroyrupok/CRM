
import Featured from "./Featured";
import KeyWords from "./KeyWords";
import PaginationButton from "./PaginationButton";
import RecentBlogs from "./RecentBlogs";
import SearchBar from "./SearchBar";

const Blogs = () => {

    return (
      <div className="rounded-md shadow-md bg-white p-3 py-8 w-full">
        <Featured />
        <SearchBar />
        <KeyWords/>
        <RecentBlogs/>
        <PaginationButton/>
      </div>
    );
};

export default Blogs;