import { Input } from "@nextui-org/react";
import stuverseLogo from "../../assets/stuverse_cleaned.png";
import { MdLogout, MdSearch } from "react-icons/md";
import JobCard from "./Component/JobCard";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getJobs } from "../../Redux/Slices/Jobslice";
import { useSelector } from "react-redux";
import { toast } from "sonner";
import { logout } from "../../Redux/Slices/authSlice";
import { useNavigate } from "react-router-dom";

const JobHome = () => {
  // const authState = useSelector((state) => state.auth);
  const [SearchTerm, setSearchTerm] = useState("");
  const accessToken = useSelector((state) => state.auth.user.token.access);
  const jobState = useSelector((state) => state.jobs);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        await dispatch(
          getJobs({
            token: accessToken,
            search: SearchTerm,
          })
        ).unwrap();
      } catch (error) {
        toast.error("Something went wrong");
      }
    };
    fetchJobs();
  }, [accessToken, dispatch, SearchTerm]);
  return (
    <div className="flex flex-col px-3 mb-3 ">
      <nav className="flex justify-center">
        <div className="flex-1"></div>

        <div className="flex-1 flex justify-center">
          <img src={stuverseLogo} alt="logo" className="w-16 h-16" />
        </div>

        <div className="flex-1 flex justify-end">
          <MdLogout
            size={30}
            className="ml-4 mt-4"
            onClick={() => {
              navigate("/login");
              dispatch(logout());
            }}
          />
        </div>
      </nav>
      <div className="flex flex-col text-4xl mt-3 mb-5 font-bold font-mono">
        <h1>Find Your Dream</h1>
        <h1>Job with Us</h1>
      </div>
      <Input
        isClearable
        startContent={<MdSearch size={25} />}
        onChange={(e) => setSearchTerm(e.target.value)}
        variant="bordered"
        size="lg"
        placeholder="Search jobs here...."
      />
      <h1 className="text-2xl mt-8 font-bold">Featured Jobs</h1>
      {jobState.jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
};

export default JobHome;
