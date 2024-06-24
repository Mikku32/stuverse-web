import stuverseLogo from "../../assets/stuverse_cleaned.png";
import { Button, Input } from "@nextui-org/react";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { loginWithEmailPassword } from "../../Redux/Slices/authSlice";
import { toast } from "sonner";

// react form validation
const schema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().required(),
  })
  .required();

const Login = () => {
  const dispatch = useDispatch();
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
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center pt-[20vh] gap-4 px-4">
        <img src={stuverseLogo} alt="Logo" className="w-40" />
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
            {...register("password")} //form validation
            placeholder="Enter your password"
            isInvalid={errors.password ? true : false}
            errorMessage={errors.password?.message}
          />
        </form>
        <Button
          form="login-form"
          type="submit"
          color="primary"
          className="w-full mt-7"
        >
          Login
        </Button>
      </div>
    </>
  );
};

export default Login;
