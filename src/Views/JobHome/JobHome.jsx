import { Input } from "@nextui-org/react";
import stuverseLogo from "../../assets/stuverse_cleaned.png";
import { MdSearch } from "react-icons/md";
import JobCard from "./Component/JobCard";

const JobHome = () => {
  return (
    <div className="flex flex-col px-3 mb-3 ">
      <nav className="flex justify-center">
        <img src={stuverseLogo} alt="logo" className="w-20 h-20" />
      </nav>
      <div className="flex flex-col text-4xl mt-3 mb-5 font-bold font-mono">
        <h1>Find Your Dream</h1>
        <h1>Job with Us</h1>
      </div>
      <Input
        isClearable
        startContent={<MdSearch size={25} />}
        variant="bordered"
        size="lg"
        placeholder="Search jobs here...."
      />
      <h1 className="text-2xl mt-8 font-bold">Featured Jobs</h1>
      <JobCard />
      <JobCard />
      <JobCard />
    </div>
  );
};

export default JobHome;
