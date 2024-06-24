import stuverseLogo from "../../assets/stuverse_cleaned.png";
import { Button, Input } from "@nextui-org/react";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { loginWithEmailPassword } from "../../Redux/Slices/authSlice";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

// react form validation
const schema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().required(),
  })
  .required();

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authState = useSelector((state) => state.auth);
  //react form validation hook
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    try {
      dispatch(loginWithEmailPassword(data)).unwrap();
      navigate("/");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <>
      <div className="flex flex-col  justify-center pt-[20vh] gap-4 px-4">
        <div className="flex justify-center">
          <img src={stuverseLogo} alt="Logo" className="w-40" />
        </div>
        <h1 className="flex text-3xl font-bold text-white ">
          Welcom to StuVerse!
        </h1>
        <form
          id="login-form"
          className="flex flex-col gap-4 w-full"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Input
            isRequired
            variant="bordered"
            size="md"
            label="Email"
            labelPlacement="outside"
            {...register("email")} //form validation
            placeholder="Enter your email"
            isInvalid={errors.email ? true : false}
            errorMessage={errors.email?.message}
          />
          <Input
            isRequired
            variant="bordered"
            size="md"
            type="password"
            label="Password"
            labelPlacement="outside"
            {...register("password")} //form validation
            placeholder="Enter your password"
            isInvalid={errors.password ? true : false}
            errorMessage={errors.password?.message}
          />
        </form>
        <p
          className="flex justify-end text-blue-400 hover:cursor-pointer hover:underline"
          onClick={() => {
            console.log("forgot password");
          }}
        >
          forgot password?
        </p>
        <Button
          isLoading={authState.status === "loading"}
          form="login-form"
          type="submit"
          color="primary"
          className="w-full mt-7"
        >
          Login
        </Button>
        <div className="flex justify-center ">
          <p className="mr-3">{"Don't have an account?"} </p>
          <p className="text-blue-400 hover:cursor-pointer hover:underline">
            Sign Up
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
