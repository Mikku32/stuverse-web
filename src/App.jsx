import { Route, Routes } from "react-router-dom";
import { Toaster } from "sonner";
import JobHome from "./Views/JobHome/JobHome";
import Login from "./Views/Login/Login";
import DetailPage from "./Views/DetailPage";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { loadUser } from "./Redux/Slices/authSlice";

const App = () => {
  const authState = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser()); //To load the user data after refresh
  }, [dispatch]);

  if (authState.status == "idle") {
    return <div className="flex justify-center items-center">Loading...</div>;
  }
  return (
    <div className="bg-gray-900 min-h-screen">
      <Toaster richColors />

      <Routes>
        <Route path="/" element={<JobHome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/description" element={<DetailPage />} />
      </Routes>
    </div>
  );
};

export default App;
