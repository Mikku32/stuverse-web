import { Button } from "@nextui-org/react";
import stuverseLogo from "../../../assets/stuverse_cleaned.png";
import {
  MdArrowForwardIos,
  MdHome,
  MdLocationPin,
  MdOutlineShoppingBag,
} from "react-icons/md";
import { useNavigate } from "react-router-dom";

const JobCard = () => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate("/description");
      }}
      className="flex mt-4  flex-col bg-gray-800 rounded-[23px] p-4 border-1 border-gray-300"
    >
      <div className="flex flex-row ">
        <img src={stuverseLogo} alt="logo" className="w-16 h-16 rounded-full" />
        <div className="flex flex-col ml-4 mt-2">
          <h1 className="text-md font-bold font-sans">
            Mern Full Stack Developer
          </h1>
          <h1 className="text-md font-light text-gray-400">White Mastery</h1>
        </div>
      </div>
      <div className="flex flex-row mt-4 gap-4 mb-3">
        <Button variant="bordered" startContent={<MdOutlineShoppingBag />}>
          Temporary{" "}
        </Button>
        <Button variant="bordered" startContent={<MdHome />}>
          Onsite
        </Button>
      </div>

      <div className="flex flex-row gap-2 mb-1">
        <MdLocationPin />
        <h1 className=" gap-3 text-md">chennai, Tamil Nadu</h1>
      </div>
      <hr />

      <div className="flex flex-row my-2 justify-between">
        <h1 className="text-md font-light text-gray-400">2 months ago</h1>
        <div className="rounded-full bg-blue-800 p-1">
          <MdArrowForwardIos
            size={20}
            onClick={() => {
              navigate("/description");
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default JobCard;
