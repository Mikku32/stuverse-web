import React from "react";
import stuverseLogo from "../../assets/stuverse_cleaned.png";
import { Button, Input } from "@nextui-org/react";

const Login = () => {
  const onSubmit = (e) => {
    e.preventDefault();
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
          onSubmit={onSubmit}
        >
          <Input
            isRequired
            variant="bordered"
            size="md"
            label="Email"
            placeholder="Enter your email"
          />
          <Input
            isRequired
            variant="bordered"
            size="md"
            type="password"
            label="Password"
            placeholder="Enter your password"
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
