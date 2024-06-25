import { MdArrowBackIos, MdOutlineShoppingBag } from "react-icons/md";

import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getJobDetail } from "../../Redux/Slices/Jobslice";
import { toast } from "sonner";
import Markdown from "react-markdown";

const DetailPage = () => {
  const jobState = useSelector((state) => state.jobs);
  const dispatch = useDispatch();
  const { id } = useParams();
  const accessToken = useSelector((state) => state.auth.user.token.access);
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        await dispatch(
          getJobDetail({
            token: accessToken,
            id: id,
          })
        ).unwrap();
      } catch (error) {
        toast.error("Something went wrong");
      }
    };
    fetchJobs();
  }, [accessToken, dispatch, id]);
  if (jobState.status == "idle") return <div>Loading...</div>;
  if (jobState.selectedJob == null) return <div>Job Not Found</div>;
  return (
    <div className="flex flex-col px-3 mb-3  ">
      <nav className="flex items-center justify-between shadow-lg mb-4 pb-3">
        <div className="flex-1 flex justify-start">
          <MdArrowBackIos
            size={20}
            className="ml-4 mt-4"
            onClick={() => {
              window.history.back();
            }}
          />
        </div>

        <div className="flex-1 flex justify-center mt-2 pt-2">
          <h1 className="text-xl font-bold ">Job Details</h1>
        </div>

        <div className="flex-1"></div>
      </nav>

      <div className="flex flex-row mb-5">
        <div className="flex rounded-lg bg-slate-300 h-[125px] w-[120px] items-center">
          <img
            src={jobState.selectedJob.image}
            alt="logo"
            className="w-24 h-24 rounded-full "
          />
        </div>
        <div className="flex flex-col ml-3 mb-3 ">
          <h1 className="text-xl font-bold">{jobState.selectedJob.title}</h1>
          <h1 className="text-md font-light text-gray-500">
            {jobState.selectedJob.companyName} - {jobState.selectedJob.place}
          </h1>

          <div className="flex flex-row gap-2 mt-2 border-1 border-gray-500 p-2 rounded-[6px] bg-slate-800 w-[180px] h-[40px]">
            <div className="flex  ">
              <MdOutlineShoppingBag size={20} />
            </div>
            <div className="flex font-light">
              {jobState.selectedJob.jobType} -{" "}
              {jobState.selectedJob.jobLocationType}
            </div>
          </div>
        </div>
      </div>
      <hr className="opacity-30 mb-4" />
      <div className="mb-4">
        <h1 className="font-bold">Skills Required :</h1>

        <div className="flex flex-wrap gap-3">
          {jobState.selectedJob.skills.map((skill) => (
            <div
              key={skill.id}
              className="inline-flex gap-2 mt-2 border-1 border-gray-500 p-2 rounded-[14px] bg-slate-800 "
            >
              <h1 className=" font-light text-xs text-gray-200">
                {skill.name}
              </h1>
            </div>
          ))}
        </div>
      </div>

      <Markdown>{jobState.selectedJob.description}</Markdown>
    </div>
  );
};

export default DetailPage;
