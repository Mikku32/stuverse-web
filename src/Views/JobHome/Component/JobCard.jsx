import {
  MdArrowForwardIos,
  MdHome,
  MdLocationPin,
  MdOutlineShoppingBag,
} from "react-icons/md";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
const JobCard = ({ job }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate("/job/" + job.id);
      }}
      className="flex mt-4  flex-col bg-gray-800 rounded-[23px] p-4 border-1 border-gray-300"
    >
      <div className="flex flex-row ">
        <img src={job.image} alt="logo" className="w-16 h-16 rounded-full" />
        <div className="flex flex-col ml-4 mt-2">
          <h1 className="text-md font-bold font-sans">{job.title}</h1>
          <h1 className="text-md font-light text-gray-400">
            {job.companyName}
          </h1>
        </div>
      </div>
      <div className="flex flex-row mt-4 gap-4 mb-3">
        <div className="flex flex-row gap-2 border-1 border-gray-500 p-2 rounded-[15px] bg-slate-700">
          <div className="flex mt-1">
            <MdOutlineShoppingBag size={20} />
          </div>
          <div className="flex font-bold">{job.jobType}</div>
        </div>
        <div className="flex flex-row gap-2 border-1 border-gray-500 p-2 rounded-[15px] bg-slate-700">
          <div className="flex mt-1">
            <MdHome size={20} />
          </div>
          <div className="flex font-bold">{job.jobLocationType}</div>
        </div>
      </div>

      <div className="flex flex-row gap-2 mb-1">
        <MdLocationPin />
        <h1 className=" gap-3 text-md">{job.place}</h1>
      </div>
      <hr />

      <div className="flex flex-row my-2 justify-between">
        <h1 className="text-md font-light text-gray-400">2 months ago</h1>
        <div className="rounded-full bg-blue-800 p-1">
          <MdArrowForwardIos
            size={20}
            onClick={() => {
              navigate("/job/" + job.id);
            }}
          />
        </div>
      </div>
    </div>
  );
};

JobCard.propTypes = {
  job: PropTypes.object,
};
export default JobCard;
