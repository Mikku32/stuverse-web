import { MdArrowBackIos, MdOutlineShoppingBag } from "react-icons/md";
import stuverseLogo from "../assets/stuverse_cleaned.png";
// import { useSelector } from "react-redux";

const DetailPage = () => {
  // const jobState = useSelector((state) => state.jobs);
  return (
    <div className="flex flex-col px-3 mb-3  ">
      <nav className="flex items-center justify-between shadow-lg mb-4 pb-3">
        <div className="flex-1 flex justify-start">
          <MdArrowBackIos size={20} className="ml-4 mt-4" />
        </div>

        <div className="flex-1 flex justify-center mt-2 pt-2">
          <h1 className="text-xl font-bold ">Job Details</h1>
        </div>

        <div className="flex-1"></div>
      </nav>

      <div className="flex flex-row mb-5">
        <div className="flex rounded-lg bg-slate-300 h-[125px] w-[120px] items-center">
          <img
            src={stuverseLogo}
            alt="logo"
            className="w-24 h-24 rounded-full object-cover"
          />
        </div>
        <div className="flex flex-col ml-3 mb-3 ">
          <h1 className="text-xl font-bold">Mern full Stack Developer</h1>
          <h1 className="text-md font-light text-gray-500">
            White Mastery - Chennai, Tamilnadu, india
          </h1>

          <div className="flex flex-row gap-2 mt-2 border-1 border-gray-500 p-2 rounded-[6px] bg-slate-800 w-[180px] h-[40px]">
            <div className="flex  ">
              <MdOutlineShoppingBag size={20} />
            </div>
            <div className="flex font-light">Temporary - onsite</div>
          </div>
        </div>
      </div>
      <hr className="opacity-30 mb-3" />
      <div>
        <h1 className="font-bold">Skills Required :</h1>
        <div className="inline-flex gap-2 mt-2 border-1 border-gray-500 p-2 rounded-[14px] bg-slate-800 ">
          <h1 className=" font-light text-xs ">visual communication</h1>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
