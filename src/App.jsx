import { Route, Routes } from "react-router-dom";
import { Toaster } from "sonner";
import JobHome from "./Views/JobHome/JobHome";
import Login from "./Views/Login/Login";

const App = () => {
  return (
    <div className="bg-gray-900 min-h-screen">
      <Toaster richColors />

      <Routes>
        <Route path="/" element={<JobHome />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
